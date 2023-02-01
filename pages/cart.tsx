import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { myitems, products } from '../utils/data'
import { useAppSelector } from "../app/hook";
import { useAppDispatch } from "../app/hook";
import { add, remove } from "../app/reducer/cart.reducer";
import Navbar from '../components/Navbar/Navbar'
import PayStackHook from '../components/PayStackHook'
const HorizontalLine = styled.div`
    border : 1px solid #E5E5E5;
    width: 85%;
    margin-bottom: 10px;
    
`
const Flex = styled.div`

    display: flex;
    flex-direction: row;
    gap: 350px;
    flex-wrap: wrap;
    width: 100%;
  


`
const ButtonColor = styled.div`

    width: 40px;
    height: 40px;
    padding: 12px;
    cursor: pointer;
    background: #0F6450
    
`
const Color = styled.div`
    display: flex;
    gap: 10px;
`
const ButtonBlack = styled.div`

    width: 40px;
    height: 40px;
    padding: 12px;
    cursor: pointer;
    background: #2B2B2B;
`
const ButtonSelect = styled.div`
    width: 50px;
    height: 50px;
    border: 2px solid black;
    padding: 12px;
    cursor: pointer;

`
const ButtonSelects = styled.div`
width: 50px;
height: 50px;
border: 2px solid black;
padding: 12px;
cursor: pointer;
background: #000000;
color: #fff;

`
const Size = styled.div`
    display: flex;
    gap: 10px;
`
const MyItems = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -20px;
   
`
const ButtonWhite = styled.div`
    background: #D3D2D5;
    width: 40px;
    height: 40px;
    padding: 12px;
    cursor: pointer;
`
const FlexImage = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
`
const Main = styled.div`
    margin-left: 200px

   
`
const SumTotal = styled.div`
    display: flex;
    gap: 800px;
`
const ImageDiv = styled.div`

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 5px;
    
`
const Cart = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    //const myproducts : string | undefined | string[] | number= router.query.products
    
    const myproducts = router.query.products
     const  data  = myproducts != undefined ? myitems[ myproducts as keyof typeof myitems] : null 
    console.log(data , myproducts )

    const { items } = useAppSelector((state) => state.cart);
    

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
    interface Item {
        [title: string]: any;
        [price : number] :any;
    }
  return (
        <>
        <Navbar />
        <Main>
        <h2> CART</h2>
        <HorizontalLine/>
       
            {
                items.map((item , id: number | string) => (
                <>
                 <Flex>
                <MyItems key = {id}>
                <h1>
                        {item?.title}
                    </h1>
        
                    <h5>SIZE :</h5>
                    <Size>
                    <ButtonSelect>
                        XS
                    </ButtonSelect>
                    <ButtonSelects>
                        S
                    </ButtonSelects>
                    <ButtonSelect>
                        M
                    </ButtonSelect>
                    <ButtonSelect>
                        L
                    </ButtonSelect>
                    </Size>
                    <h5>COLOR :</h5>
                   <Color>
                   <ButtonWhite/>
                   <ButtonBlack/>
                   <ButtonColor  />
                   </Color>
                    <h5> PRICE : </h5>
                       <h2> ${item?.price}</h2>
        
                    </MyItems>
                  
            <FlexImage>


            
            <ImageDiv>
            <ButtonSelect onClick={() => dispatch(add(item))}>
               +
            </ButtonSelect>

            <h3> {item.quantity} </h3>
            <ButtonSelect onClick={() => dispatch(remove(item))}>
                -
            </ButtonSelect>

            </ImageDiv>
            
            <Image
            src= {item?.image}
            alt= "my product image"
            width = "200"
            height = "200"
            />
            
            </FlexImage>

         
            </Flex>
            <HorizontalLine/>
                    </>
                ))
                }

            <SumTotal>
            <h3>Total</h3> 

           
              <h3>${setTotal(items)}</h3>
            </SumTotal>
    </Main>
    <PayStackHook/>
    </>
  )
}

export default Cart