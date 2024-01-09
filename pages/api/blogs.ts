// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { json } from 'stream/consumers'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


    let data = await fs.promises.readdir("blogdata");
    let myFile;
    let allBlogs = [];

    for(let index=0;index <data.length;index++){
        const item = data[index]

        myFile = await fs.promises.readFile(('blogdata/'+item),'utf-8')
        console.log(myFile)
        fs.promises.readdir("blogdata");
        allBlogs.push(JSON.parse(myFile))
    }
    res.status(200).json(allBlogs)
}


      // fs.promises.readdir("blogdata",(err,data)=>{
    //   console.log(data);


    // })
