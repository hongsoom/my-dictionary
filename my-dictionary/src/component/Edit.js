import styled from 'styled-components';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux"; 
import { updateWordFB } from "../redux/modules/words"; // 액션생성함수
import Header from "./Header";

const Edit = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const word = React.useRef(null);
    const mean = React.useRef(null);
    const ex = React.useRef(null);

    const addWordList = () => {
        dispatch(updateWordFB({
            word : word.current.value,
            mean : mean.current.value,
            ex : ex.current.value,
        }));
        history.goBack();
      };

    return (    
        <AddWrap>
            <Header />
            <Content>
                <Title>단어 수정하기</Title>
                <Word>
                    <label>단어</label> <br/>
                    <input type="text" size="60" maxLength='8' ref={word} />
                </Word>
                <Mean>
                    <label>설명</label> <br/>
                    <input type="text" size="60" maxLength='30' ref={mean} />
                </Mean>
                <Ex>
                    <label>예시</label> <br/>
                    <input type="text" size="60" maxLength='30' ref={ex} />
                </Ex>
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
    margin: 2rem auto;
    width: 500px;
    height: 500px;
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