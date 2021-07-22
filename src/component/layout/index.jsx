import React from "react";
import { Layout, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useHistory, Link } from "react-router-dom";
import styled  from "styled-components";

const { Header, Content, Footer } = Layout;



const BaseLayout = ({ title, children }) => {

  const StyledContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`;

  const history = useHistory();
  return (
    <Layout className="layout" theme="light">
      <Header ghost={true} style={{ color: "white", "font-size": "1.2rem" }}>
        <div>
          
          <span> {title} </span>
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <StyledContent>{children}</StyledContent>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Corona Virus Statistics ©2020 Created by Alan Campora
      </Footer>
    </Layout>
  );
};

export default BaseLayout;
