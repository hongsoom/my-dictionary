import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import WordCard from "./WordCard";

const Main = () => {
    return (
        <Wrapper>
            <Header />
                <Content>hello</Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 60px;
`;

const Content = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    width: 1200px;
    position: relative;
    background: gray;
`;
export default Main;