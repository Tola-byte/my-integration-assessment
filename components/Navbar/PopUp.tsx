import styled from 'styled-components'
import { useAppSelector } from "../../app/hook";
import { useAppDispatch } from "../../app/hook";
import { products } from '../../utils/data';

 import Link from 'next/link';
 import Image from 'next/image'
 import PayStackHook from '../PayStackHook';
const ModalBackground = styled.div`
    background-color: rgba(57, 55, 72, 0.22);
    opacity: 1;
`

const ModalPopUp = styled.div`
      background: #fff;
      position: absolute;
      top: 50px;
      left: -200px;
      z-index: 29;
      min-height: 400px;
      padding: 20px;
      width: 500px;
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
      border-radius: 10px;
`
const Flex = styled.div`

    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
  


`
const ButtonColor = styled.div`

    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    background: #0F6450
    
`
const Color = styled.div`
    display: flex;
    gap: 10px;
`
const ButtonBlack = styled.div`

    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    background: #2B2B2B;
`
const ButtonSelect = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid black;
    padding: 5px;
    cursor: pointer;

`
const ButtonSelects = styled.div`
width: 30px;
height: 30px;
border: 2px solid black;
padding: 5px;
cursor: pointer;
background: #000000;
color: #fff;

`
const ImageDiv = styled.div`

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 5px;
    
`
const ButtonWhite = styled.div`
    background: #D3D2D5;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
`
const FlexImage = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
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
const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ViewBag = styled.div`
    width: 220px;
    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid #1D1F22;
    padding-left: 58px;
`
const Checkout = styled.div`
    width: 220px;
    border-radius: 5px;
    padding-left: 58px;
    background: #5ECE7B;
    color: white
`

const SumTotal = styled.div`
    display: flex;
    gap: 40px;
    justify-content: space-between;
`

const LinkCart = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const PopUp = () => {
  
    const dispatch = useAppDispatch()
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

  interface Item  {
    [title: string]: any;

  }
  

  return (

    <ModalBackground>
      <ModalPopUp>

        <h2>My Bag , <span> {items.length} items</span></h2>
        {
           items.map((item, id: number | string) => (
            <>
             <Flex>
            <MyItems key = {id}>
            <h3>
                    {item?.title}
                  
                </h3>
    
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
        <ButtonSelect >
           +
        </ButtonSelect>

        <h3> {item.quantity} </h3>
        <ButtonSelect >
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
        
                </>
            ))
            }

            <Total>
              <SumTotal>
              <h3>Total</h3> 

           
              <h3>${setTotal(items)}</h3>
              </SumTotal>
             
            
              <LinkCart>
              <a>
              <Link href="/cart">
                <ViewBag><h4>VIEW BAG</h4></ViewBag>
                </Link>
              </a>
              
              <PayStackHook/>
              </LinkCart>
               
            </Total>
       
      </ModalPopUp>

          </ModalBackground>
    

  )
}

export default PopUp