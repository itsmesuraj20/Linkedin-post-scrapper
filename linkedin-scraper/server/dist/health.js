import express from 'express';
const router = express.Router();
router.get('/', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});
export default router;
//# sourceMappingURL=health.js.map