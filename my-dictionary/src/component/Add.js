import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Header from "./Header";

const Add = () => {
    const history = useHistory();

    return (
        <AddWrap>
            <Header />
            <Content>
                <Title>단어 추가하기</Title>
                <Word>
                    <label>단어</label> <br/>
                    <input type="text" size="70" />
                </Word>
                <Mean>
                    <label>설명</label> <br/>
                    <input type="text" size="70" />
                </Mean>
                <Ex>
                    <label>예시</label> <br/>
                    <input type="text" size="70" />
                </Ex>
                <Button onClick={() => {
                    history.goBack();
                }}>
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
`;

const Title = styled.div`
    margin : 20px;
    color: black;
    font-size: 20px;
    font-family: 'Jua', sans-serif;
`;

const Word = styled.div`
    margin-bottom : 50px;
    label {
        font-family: 'Jua', sans-serif;
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
        font-family: 'Jua', sans-serif;
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
        font-family: 'Jua', sans-serif;
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
    font-family: 'Jua', sans-serif;
`;

export default Add;