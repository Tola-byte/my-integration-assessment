import React, { useState } from "react";
import { currency } from "../../utils/data";
import styled from "styled-components";

const Switcher = styled.div`
  position: absolute;
  width: 114px;
  height: 169px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  left: 0px;
  top: 50px;
  @media (max-width: 768px) {
    position: absolute;
    left: -2.5rem;
`;

const Currency = styled.div`
  display: flex;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  padding: 10px;
  p {
    font-weight: 400;
    font-size: 16px;
  }
`;
const CurrencyPop = () => {
  return (
    <div>
      <Switcher>
        {currency.map((currency, index) => (
          <Currency key={index}>
            <div>
              {currency.icon} {currency.type}
            </div>
          </Currency>
        ))}
      </Switcher>
    </div>
  );
};

export default CurrencyPop;
