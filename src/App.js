import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import { Col, Row, Card, Progress, Statistic } from "antd";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  Box,
} from "@chakra-ui/react";
import BaseLayout from "./component/layout";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BaseLayout title="Coin Crypt">
      <div>
        <Row>
          <Col xl={12} style={{ marginBottom: "2rem" }}>
            <h1>Search currently coin</h1>
            <FormControl id="email">
              <Input
                onChange={handleChange}
                placeholder="Search Coin"
                type="text"
              />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col xl={24}>
            <Table variant="simple" colorScheme="teal">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Logo</Th>
                  <Th>Name</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th>Total Volume</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredCoins.map((coin) => {
                  return (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      price={coin.current_price}
                      image={coin.image}
                      volume={coin.total_volume}
                      date={Date(coin.ath_date)}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </BaseLayout>
  );
}

export default App;
