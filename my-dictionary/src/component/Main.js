import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Header from "./Header";
import WordCard from "./WordCard";

const Main = () => {
    const history = useHistory();

    return (
        <MainWrap>
            <Header />
                <Content><WordCard /></Content>
                <AddBottom>
                    <button type="button" onClick={() => {
                        history.push("/Add");
                    }}>
                        +
                    </button>
                </AddBottom>
        </MainWrap>
    )
}

const MainWrap = styled.div`
    padding-top: 60px;
`;

const Content = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 1225px;
    height: 900px;
    position: relative;
    display : fiex;
    align-content: flex-start;
    justify-content: center;
`;

const AddBottom = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 30px;
        margin-right: 50px;
        border: 3px solid #EF9F9F;
        background-color: #EF9F9F;
        color: #ffffff;
        font-size: 40px;
        cursor:pointer;
        box-shadow: 2px 2px 2px 2px gray;
        font-family: 'Jua', sans-serif;
      }
`;

export default Main;