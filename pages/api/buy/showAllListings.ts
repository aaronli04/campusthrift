// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import currentListings from '../../../components/utility/data/listingsData/currentListings';
import { Item } from '../../../hooks/types';

type BuyListing = {
  items?: Item[],
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BuyListing>
) {
  if (req.method !== 'POST') res.status(400).json({ error: 'Bad request' });


  res.status(200).json({items: currentListings});
}
