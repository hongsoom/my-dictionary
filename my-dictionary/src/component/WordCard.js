import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWordFB } from "../redux/modules/words";
import styled from "styled-components";
import { BsCheckLg,BsPencilSquare,BsTrash } from "react-icons/bs";

const WordCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.words.list);

    const [isClicked, setIsCilcked] = useState(false);
    const onClick = () => {
        setIsCilcked(!isClicked); 
      };

    return (
        <Cards>
            {data.map ((list, index) => {
                return (
                    <CardBox key={index} id={list.id}>
                        <Word>{list.word}</Word>
                            <button className="btn_check" onClick={onClick}><BsCheckLg size="25"/></button>
                            <button className="btn_edit" onClick={() => { history.push('/Edit/' + index);}}><BsPencilSquare size="25"/></button>
                            <button className="btn_delete" onClick={() => { 
                                dispatch(deleteWordFB(list.id));
                                window.alert("삭제했습니다!");
                            }}><BsTrash size="25"/></button>
                        <Mean>{list.mean}</Mean>
                        <Ex style={{color : isClicked ? ('#FFFFFF') : ('#7FB5FF')}}>{list.ex}</Ex>
                        <Read style={{color : isClicked ? ('#FFFFFF') : ('#7FB5FF')}}>{list.read}</Read>
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
    font-size : 20px;
    font-family: 'Do Hyeon', sans-serif;
    color : #7FB5FF;
`;

const Read = styled.div`
    font-size : 20px;
    font-family: 'Do Hyeon', sans-serif;
    color : #7FB5FF;
`;
export default WordCard;