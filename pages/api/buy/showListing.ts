// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import currentListings from '../../../components/utility/data/listingsData/currentListings'
import { Item } from '../../../hooks/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  res.status(200).json(currentListings)
}
