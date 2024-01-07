// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { json } from 'stream/consumers'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    fs.readFile("blogdata/how-to-learn-flask.json",'utf-8',(err,data)=>{
      console.log('');
      res.status(200).json(JSON.parse(data))
    })
}
