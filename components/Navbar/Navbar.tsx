import React, { useState , useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { currency } from "../../utils/data";
import CurrencyPop from "./CurrencyPop";
import { useAppSelector } from "../../app/hook";

import PopUp from "./PopUp";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  height: 150px;
  width: 100%;
  position: relative;

 @media (max-width: 768px){
  margin-top: 1rem;
 }
`;

const Categories = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-left: 80px;

  @media (max-width: 768px) {
    display: flex;
    width: 10rem;
    margin-left: 1rem;
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
`;
const Icons = styled.div`
  width: 200px;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-right: 100px;
  cursor: pointer;
  align-items: start;

  @media (max-width: 768px) {
    display: flex;
    width: 5rem;
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  position: relative;
  background: transparent;
  outline: none;
  border: none;
`;

const CounterParagraph = styled.p`
  background: black;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.5;
  position: absolute;
  border-radius: 999px;
  top: -23px;
  right: -3px;
`;
const Navbar = () => {
  const [show, setShow] = useState(false);
    const [modal , setModal] = useState(false);
  const CurrencySwitcher = () => {
    setShow(!show);
  };

  const { items } = useAppSelector((state) => state.cart);
  //console.log(items)

  return (
    <Nav>
      <Categories>
        <Text>WOMEN</Text>

        <Text> MEN </Text>

        <Text> KIDS </Text>

      </Categories>
      <a>
        <Link href="/">
        <Image src="/greenbag.png" alt="Green" width="30" height="30" />
        </Link>
      
      </a>
      
    

      <Icons>
        <Image
          src="/dollar.png"
          alt="dollar"
          width="30"
          height="30"
          onClick={CurrencySwitcher}
        />
        {show ? <CurrencyPop /> : null}
        <a>
            <Link href="">
           
        <Button>
          <Image src="/cart.png" alt="cart" width="20" height="20"  onClick = {()=> setModal(!modal)}/>
         
           {Boolean(items.length) && (
            <CounterParagraph>{items.length}</CounterParagraph>
          )} 
        </Button>
        { modal ? <PopUp/> : null}
        </Link>
        </a>
       
      </Icons>

      
      
    </Nav>
  );
};

export default Navbar;
