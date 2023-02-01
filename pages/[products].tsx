/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { products, myitems } from "../utils/data";
import Navbar from "../components/Navbar/Navbar";
import { useAppDispatch } from "../app/hook";
import { add } from "../app/reducer/cart.reducer";




const SideImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
const MainImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 80px;
  gap: 80px;
  width: 300px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 1.3rem;
  }
`;
const Button = styled.div`
  width: 292px;
  height: 52px;
  background: #5ece7b;
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;
const ButtonSelect = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid black;
  padding: 12px;
  cursor: pointer;
`;

const ButtonColor = styled.div`
  width: 40px;
  height: 40px;
  padding: 12px;
  cursor: pointer;
  background: #0f6450;
`;
const ButtonBlack = styled.div`
  width: 40px;
  height: 40px;
  padding: 12px;
  cursor: pointer;
  background: #2b2b2b;
`;

const ButtonWhite = styled.div`
  background: #d3d2d5;
  width: 40px;
  height: 40px;
  padding: 12px;
  cursor: pointer;
`;
const Color = styled.div`
  display: flex;
  gap: 10px;
`;
const Size = styled.div`
  display: flex;
  gap: 10px;
`;
const MyText = styled.div`
    @media (max-width: 768px) {
      font-size: 1.2em;
      margin-top: 2rem;
      width: 20rem;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }
`
const SideBar = styled.div`
  margin-top: -20px;
  width: 400px;
  @media (max-width: 768px) {
  }
`;
const Products = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const myproducts = router.query.products;
  const data =
    myproducts != undefined
      ? myitems[myproducts as keyof typeof myitems]
      : null;

  const handleAddToCart = () => {
    if (!data) return;
    dispatch(add({ image: data.image, title: data.title, price: data.price }));
  };

  return (
    <div>
      <Navbar />
      <MainImageContainer>
        <SideImages>
          <Image src={data?.image!} alt="my image" width="80" height="90" />

          <Image src={data?.image!} alt="my image" width="80" height="90" />

          <Image src={data?.image!} alt="my image" width="80" height="90" />
        </SideImages>
        <Image className = "image" src={data?.image!} alt="my image" width="570" height="400" />
        
       
        <SideBar>
          <h1>{data?.title}</h1>

          <h5>SIZE :</h5>
          <Size>
            <ButtonSelect>XS</ButtonSelect>
            <ButtonSelect>S</ButtonSelect>
            <ButtonSelect>M</ButtonSelect>
            <ButtonSelect>L</ButtonSelect>
          </Size>
          <h5>COLOR :</h5>
          <Color>
            <ButtonWhite />
            <ButtonBlack />
            <ButtonColor />
          </Color>
          <h5> PRICE : </h5>
          <h2> ${data?.price}</h2>

          <Button onClick={handleAddToCart}> ADD TO CART</Button>

          <MyText>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </MyText>
        </SideBar>
      </MainImageContainer>
    </div>
  );
};

export default Products;