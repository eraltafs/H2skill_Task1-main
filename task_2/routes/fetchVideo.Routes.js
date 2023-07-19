const { google } = require('googleapis');
const { VideoModel } = require('../model/video');
require("dotenv").config()
const apiKey1 = process.env.key1
const apiKey2 = process.env.key2

const youtubeApi = google.youtube('v3');
const apiKeys = [apiKey1,apiKey2];
let currentApiKeyIndex = 0;

async function fetchLatestVideos() {
  try {
    const searchQuery = 'football';
    const response = await youtubeApi.search.list({
      key: apiKeys[currentApiKeyIndex],
      part: 'snippet',
      q: searchQuery,
      type: 'video',
      order: 'date',
      publishedAfter: '2023-07-01T00:00:00Z'
    });

    const videos = response.data.items.map(item => ({
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnails: item.snippet.thumbnails,
    }));

    await VideoModel.insertMany(videos);
  }  catch (error) {
    console.error('Error fetching latest videos:', error);

    // If the error is due to quota exhaustion, switch to the next API key
    if (error.errors[0].reason === 'quotaExceeded') {
      currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
      console.log('Switched to the next API key:', apiKeys[currentApiKeyIndex]);
    }
  }
}

module.exports = {fetchLatestVideos};
