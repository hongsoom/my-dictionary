import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
    return (
       <Wrapper>
           나만의 단어장
       </Wrapper>
    )  
}

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;
    color: white;
    border-bottom: 3px solid #FAD4D4;
    background-color: #FAD4D4;
    font-size: 30px;
    font-family: 'Jua', sans-serif;
`;
export default Header;