const mongoose = require('mongoose');
//  creating model to store data
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  publishedAt: Date,
  thumbnails: Object,
});

const VideoModel = mongoose.model('Video', videoSchema);

module.exports = { VideoModel }
