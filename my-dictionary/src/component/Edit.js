import styled from 'styled-components';
import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux"; 
import { modifyWordFB } from "../redux/modules/words";
import Header from "./Header";

const Edit = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const word_data = props.data;
    const word_index = useParams().index;
    const word_id = useParams().id;

    const word = React.useRef(null);
    const mean = React.useRef(null);
    const ex = React.useRef(null);
    const read = React.useRef(null);

    const modifyWordList = () => {
        dispatch(modifyWordFB({
            word : word.current.value,
            mean : mean.current.value,
            ex : ex.current.value,
            read : read.current.value,
            completed : false,
            date: Date.now(),
        }, word_id));
        history.goBack();
      };

    return (    
        <AddWrap>
            <Header />
            <Content>
                <Title>단어 수정하기</Title>
                <Word>
                    <label>단어</label> <br/>
                    <input type="text" defaultValue={word_data[word_index].word} size="60" maxLength='8' ref={word}></input>
                </Word>
                <Mean>
                    <label>설명</label> <br/>
                    <input type="text" defaultValue={word_data[word_index].mean} size="60" maxLength='30' ref={mean}></input>
                </Mean>
                <Ex>
                    <label>예시</label> <br/>
                    <input type="text" defaultValue={word_data[word_index].ex} size="60" maxLength='30' ref={ex}></input>
                </Ex>
                <Read>
                    <label>해석</label> <br/>
                    <input type="text" defaultValue={word_data[word_index].read} size="60" maxLength='50' ref={read}></input>
                </Read>
                <Button onClick={modifyWordList}>
                    수정하기
                </Button>
            </Content>
        </AddWrap>
    )
}

const AddWrap = styled.div`
    padding-top: 60px;
`;

const Content = styled.div`
    margin: 2rem auto;
    max-width: 450px;
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

export default Edit;