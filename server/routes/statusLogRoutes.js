const express = require('express');
const router = express.Router();
const statusLogController = require('../controllers/statusLogController');

router.get('/', statusLogController.getAllStatusLogs);
router.post('/', statusLogController.createStatusLog);

module.exports = router;
