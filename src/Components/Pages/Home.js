
import React, { useRef } from "react";
import Layout from "../Layout/Layout";
import styled from "styled-components";

const HomeWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Bio = styled.p`
    width: 60%;
    text-align: center;
` 
const Home = () => {
  return (
    <Layout>
        <HomeWrapper>
            <h1> JOE CUNNINGHAM </h1>
            <Bio>
            This is my website.
            </Bio>
        </HomeWrapper>
    </Layout>
  );
};

export default Home;
