import { NextApiRequest, NextApiResponse } from "next";



export default async function verify( req : NextApiRequest , res: NextApiResponse ){
    if(req.method !== "POST") return res.status(400).send({ message: "Invalid Request" });
    const data = req.body;
    console.log(data)
    res.status(200).json({})
}