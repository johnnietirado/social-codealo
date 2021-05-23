import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/channels';

export const getCurrentYouTubeData = async () => {
  try {
    const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
    const response = await axios.get(BASE_URL, {
      params: {
        'part': 'statistics',
        'id': YOUTUBE_CHANNEL_ID,
        'key': YOUTUBE_API_KEY
      }
    });
    let channel = response.data.items.find((i) => i.id === YOUTUBE_CHANNEL_ID);
    return { 'subscribers': channel.statistics.subscriberCount };
  } catch (err) {
    console.log(err);
  }
}