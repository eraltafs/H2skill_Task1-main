const express = require('express');
const videoRouter = express.Router();
const { VideoModel } = require('../model/video');

videoRouter.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalCount = await VideoModel.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);

    const videos = await VideoModel.find()
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      data: videos,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error('Error retrieving videos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {videoRouter};
