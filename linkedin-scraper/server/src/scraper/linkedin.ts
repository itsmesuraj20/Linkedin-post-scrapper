import puppeteer from 'puppeteer';

export async function scrapeLinkedInPost(postUrl: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.goto(postUrl, { waitUntil: 'networkidle2' });
  // Wait for post content to load
  await page.waitForSelector('[data-test-post-content], .feed-shared-update-v2');

  // Extract post data (selectors may need adjustment)
  const data = await page.evaluate(() => {
    const content = document.querySelector('[data-test-post-content], .feed-shared-update-v2')?.textContent || '';
    const hashtags = Array.from(document.querySelectorAll('a[href*="/hashtag/"]')).map(e => e.textContent?.replace('#', '').trim() || '');
    const authorName = document.querySelector('.feed-shared-actor__name')?.textContent || '';
    const authorTitle = document.querySelector('.feed-shared-actor__description')?.textContent || '';
    const authorProfileUrl = document.querySelector('.feed-shared-actor__container a')?.getAttribute('href') || '';
    const authorAvatar = document.querySelector('.feed-shared-actor__avatar img')?.getAttribute('src') || '';
    const publishDate = document.querySelector('time')?.getAttribute('datetime') || '';
    const likes = Number(document.querySelector('.social-details-social-counts__reactions span')?.textContent?.replace(/\D/g, '') || '0');
    const comments = Number(document.querySelector('.social-details-social-counts__comments span')?.textContent?.replace(/\D/g, '') || '0');
    const shares = Number(document.querySelector('.social-details-social-counts__shares span')?.textContent?.replace(/\D/g, '') || '0');
    return {
      content,
      hashtags,
      author: {
        name: authorName,
        title: authorTitle,
        profileUrl: authorProfileUrl,
        avatar: authorAvatar,
      },
      publishDate,
      metrics: { likes, comments, shares },
    };
  });
  await browser.close();
  return data;
}
