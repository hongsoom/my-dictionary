import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
    return (
       <Wrapper>
           My Dictionary
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
    color: black;
    border-bottom: 1px solid #FFD9C0;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
    font-size: 20px;
`;
export default Header;