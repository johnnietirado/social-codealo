// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentYouTubeData } from '../../vendors/youtube';
import { runMiddleware } from '../../middleware/runMiddleware';
import connectDB from '../../middleware/database';
import Entry from '../../models/Entry';

const cors = Cors({ methods: ['GET', 'POST'] })



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await runMiddleware(req, res, cors);
    switch (req.method) {
      case 'GET':
        const entries = await Entry.find({});
        return res.status(200).json(entries);
        return;

      case 'POST':
        const youTubeStats = await getCurrentYouTubeData()
        let newEntry = new Entry({ youtube: youTubeStats.subscribers });
        await newEntry.save();
        return res.status(201).json({ youtube: youTubeStats.subscribers });
    }

  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
}

export default connectDB(handler);
