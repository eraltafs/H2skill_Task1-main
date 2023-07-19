const express = require('express');
const searchRouter = express.Router();
const { VideoModel } = require('../model/video');

searchRouter.get('/', async (req, res) => {
  try {
    const query = req.query.q;

    const videos = await VideoModel.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    });

    res.status(200).json(videos);
  } catch (error) {
    console.error('Error searching videos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {searchRouter};
