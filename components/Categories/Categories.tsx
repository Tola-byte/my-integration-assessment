import React from "react";
import styled from "styled-components";
import { products } from "../../utils/data";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "../../app/hook";
import { add } from "../../app/reducer/cart.reducer";
import { myitems } from "../../utils/data";
const Title = styled.div`
  font-weight: 400;
  font-size: 40px;
  width: 299px;
  height: 68px;
  display: flex;
  justify-content: flex-end;
  margin-left: 50px;
`;

const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
`;

const ProductText = styled.div`
    font-weight: 300
    font-size: 20px;
    padding: 15px;
`;

const Price = styled.div`
  font-weight: 800;
  font-size: 20px;
  padding: 15px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
    background: #fff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

`
const ImageIndex= styled.div`
   position: relative;
   z-index: 9;
   margin-top: -26px;
   padding-right: 20px;
   cursor: pointer;
  background: #fff;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;
const Button = styled.div`
  position: relative;
  z-index: 9;
  cursor: pointer;
  margin-top: -28px;
  padding-right: 20px;
`
const Categories = () => {
  
  const dispatch = useAppDispatch();
 
  return (
    <div>
      <Title>Category name</Title>

      <Grid>
        {products.map((product, idx) => (
          <Card key={idx}>
            <a>
              <Link href={product?.linktitle}>
                <Image
                  src={product.image}
                  alt="my products"
                  height="250"
                  width="300"
                />
              </Link>
              <Flex>
                <ProductText>{product.title}</ProductText>
                <Button>
                  <Image
                    src="/Common.png"
                    alt="my products"
                    height="40"
                    width="40"
                    onClick={() => dispatch(add(
                      {
                       ...product,
                      }
                       
                     ))}
                  />
                  
                </Button>
              </Flex>

              <Price>${product.price}</Price>
            </a>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
