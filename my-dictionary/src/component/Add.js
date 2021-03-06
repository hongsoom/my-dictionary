import styled from 'styled-components';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux"; 
import { createWordFB } from "../redux/modules/words"; 
import Header from "./Header";

const Add = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const word = React.useRef(null);
    const mean = React.useRef(null);
    const ex = React.useRef(null);
    const read = React.useRef(null);

    const addWordList = () => {
        dispatch(createWordFB({
            word : word.current.value,
            mean : mean.current.value,
            ex : ex.current.value,
            read : read.current.value,
            completed : false,
            date: Date.now(),
        }));
        history.goBack();
      };

    return (    
        <AddWrap>
            <Header />
            <Content>
                <Title>단어 추가하기</Title>
                <Word>
                    <label>단어</label> <br/>
                    <input type="text" size="60" maxlength='15' ref={word} />
                </Word>
                <Mean>
                    <label>설명</label> <br/>
                    <input type="text" size="60" maxlength='50' ref={mean} />
                </Mean>
                <Ex>
                    <label>예시</label> <br/>
                    <input type="text" size="60" maxlength='50' ref={ex} />
                </Ex>
                <Read>
                    <label>해석</label> <br/>
                    <input type="text" size="60" maxlength='50' ref={read} />
                </Read>
                <Button onClick={addWordList}>
                    저장하기
                </Button>
            </Content>
        </AddWrap>

    )
}

const AddWrap = styled.div`
    padding-top: 60px;
`;

const Content = styled.div`
    max-width: 450px;
    margin: 2rem auto;
    height: 600px;
    position: relative;
    flex-direction: column;
    display : flex;
    align-items: center;
    border: 3px solid #EF9F9F;
    border-radius: 10px;
`;

const Title = styled.div`
    margin : 20px;
    color: black;
    font-size: 25px;
    font-family: 'Do Hyeon', sans-serif;
`;

const Word = styled.div`
    margin-bottom : 50px;
    label {
        font-family: 'Do Hyeon', sans-serif;
        font-size : 20px;
    }
    input {
        border : none;
        border-bottom : 2px solid #FAD4D4;
        background-color: transparent;
        height: 30px;
    }
`;

const Mean = styled.div`
    margin-bottom : 50px;
    label {
        font-family: 'Do Hyeon', sans-serif;
        font-size : 20px;
    }
    input {
        border : none;
        border-bottom : 2px solid #FAD4D4;
        background-color: transparent;
        height: 30px;
    }
`;

const Ex = styled.div`
    margin-bottom : 50px;
    label {
        font-family: 'Do Hyeon', sans-serif;
        font-size : 20px;
    }
    input {
        border : none;
        border-bottom : 2px solid #FAD4D4;
        background-color: transparent;
        height: 30px;
    }
`;

const Read = styled.div`
    margin-bottom : 50px;
    label {
        font-family: 'Do Hyeon', sans-serif;
        font-size : 20px;
    }
    input {
        border : none;
        border-bottom : 2px solid #FAD4D4;
        background-color: transparent;
        height: 30px;
    }
`;

const Button = styled.div`
    width : 200px;
    height : 30px;
    border: 1px solid #EF9F9F;
    background : #EF9F9F;
    color : white;
    text-align : center;
    font-size : 18px;
    padding-top : 10px;
    cursor : pointer;
    border-radius: 5px;
    font-family: 'Do Hyeon', sans-serif;
`;

export default Add;