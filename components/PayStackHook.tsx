import React from "react";
import { usePaystackPayment } from "react-paystack";
import { useAppSelector } from "../app/hook";
import { useAppDispatch } from "../app/hook";
import { myitems , products } from '../utils/data';
import styled from 'styled-components';
import AxiosClient from "axios";



const Checkout = styled.div`
    width: 220px;
    border-radius: 5px;
    padding-left: 58px;
    background: #5ECE7B;
    color: white
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px

`

interface Ref {
  [key:string]:any
}

// you can call this function anything

const onSuccess =  ( reference : any | Ref ) => {
  console.log(reference)

  
  try{
    const data = AxiosClient.post("/api", reference);
    console.log(data)
  }
  catch(error){
    console.error(error)
  }

}

// const onSuccess = (reference : Ref | any) => {
//   console.log("done successfully")
//   console.log(reference)

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const setTotal = (items: any[])=> {
  let total = 0; 
  if (items?.length !== products?.length) {
    items?.forEach((item: { price: number; }) => total += item?.price)
  } else if (items?.length === products?.length) {

    items?.forEach((item: { price: number; }) => total += item?.price)

  }
  console.log(total)
  return total 
}


const PayStackHook = () => {
  const dispatch = useAppDispatch()
  
  const { items } = useAppSelector((state : any) => state.cart);
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: setTotal(items) * 100 ,
    publicKey: "pk_test_d4092ce3db5a82a4b470336b1bff4f34cbb49ae2",
  };
  const initializePayment  = usePaystackPayment(config);
  

  return (
    <>
    <ButtonWrap>

    <Checkout
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        <h4>ORDER NOW</h4>
      </Checkout>
    </ButtonWrap>
     
    </>
  );
};

export default PayStackHook;
