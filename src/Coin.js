import React from "react";
import { Tr, Td } from "@chakra-ui/react";
const Coin = ({ name, price, image, volume, date }) => {
  return (
    <Tr>
      <Td>
        <img src={image} height={60} />
      </Td>
      <Td>{name}</Td>
      <Td isNumeric>{price}</Td>
      <Td>{volume}</Td>
      <Td>{date}</Td>
    </Tr>
  );
};

export default Coin;

// image, symbol, price, volume
