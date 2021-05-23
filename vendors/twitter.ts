import axios from 'axios';
import cheerio from 'cheerio';

export const getTwitterFollowers = async () => {
  try {
    const response = await axios.get('https://twitter.com/codealodev', {
      responseType: 'text'
    });

    console.log(response.data);

    const $ = cheerio.load(response.data);

    let followerTag = $('a[href=/codealodev/followers]');

    console.log(followerTag.html());

  } catch (err) {
    console.log(err);
  }
}