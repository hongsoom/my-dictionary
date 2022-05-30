import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeWords } from "../redux/modules/words";
import styled from "styled-components";
import { BsCheckLg,BsPencilSquare,BsTrash } from "react-icons/bs";

const WordCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    const data = useSelector((state) => state.words.list);

    const [isClicked, setIsCilcked] = useState(false);
    const onClick = () => {
        setIsCilcked(!isClicked); 
      };

    return (
        <Cards style={{color : isClicked ? ('#FFFFFF') : ('black')}}>
            {data.map ((list, index) => {
                return (
                    <CardBox key={index} style={{backgroundColor : isClicked ? ('#F47C7C') : ('#FFFFFF')}}>
                        <Word>{list.word}</Word>
                            <button className="btn1" onClick={onClick}><BsCheckLg size="25"/></button>
                            <button className="btn2" onClick={() => { history.push('/Edit');}}><BsPencilSquare size="25"/></button>
                            <button className="btn3" onClick={() => { alert("삭제했습니다!");}}><BsTrash size="25"/></button>
                        <Mean>{list.mean}</Mean>
                        <Ex style={{color : isClicked ? ('#FFFFFF') : ('#7FB5FF')}} >{list.ex}</Ex>
                    </CardBox>
                )
        })}
        </Cards>
    )
}

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-content: flex-start;
`;

const CardBox = styled.div`
    border: 2px solid #F47C7C;
    border-radius: 10px;
    position: relative;
    width : 350px;
    height : 150px;
    padding: 20px;
`;

const Word = styled.div`
    display : inline-block;
    margin-bottom : 20px;
    margin-right : 50px;
    font-size : 25px;
    font-family: 'Do Hyeon', sans-serif;
`;

const Mean = styled.div`
    margin-bottom : 20px;
    font-size : 20px;
    font-family: 'Do Hyeon', sans-serif;
`;

const Ex = styled.div`
    margin-bottom : 20px;
    font-size : 20px;
    font-family: 'Do Hyeon', sans-serif;
    color : #7FB5FF;
`;
export default WordCard;