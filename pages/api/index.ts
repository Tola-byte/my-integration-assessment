import { NextApiRequest , NextApiResponse } from "next";
import axios from "axios";
// import { myitems , products } from '../../utils/data';


const mykey = process.env.NEXT_PUBLIC_SECRET_KEY 

export default async function handler( req: NextApiRequest , res: NextApiResponse)  {


   if(req.method !== "POST") return res.status(400).send({ message: "Invalid Request" });

   const { payload:  reference  } = req.body;
   console.log(reference)
   // const { reference } = req.body

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        'Authorization': `Bearer ${mykey}`
      }
    });
    const { data } = response;

   if (data.status) {
      return res.status(200).json({
        message: 'Payment was successful'
      });
    } else {
      return res.status(400).json({
        message: 'Payment was unsuccessful'
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: 'An error occurred while trying to verify payment'
    });
  }
   
}