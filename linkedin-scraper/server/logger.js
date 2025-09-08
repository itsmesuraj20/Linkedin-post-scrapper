import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
export const logger = morgan('combined', { stream: logStream });
//# sourceMappingURL=logger.js.map