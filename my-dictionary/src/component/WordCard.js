import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB,updateWordFB, deleteWordFB } from "../redux/modules/words";
import styled from "styled-components";
import { BsCheckLg,BsPencilSquare,BsTrash } from "react-icons/bs";

const WordCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.words.list);

    return (
        <Cards>
            {data.map ((list, index) => {
                return (
                    <CardBox key={index} id={list.id} completed={list.completed}>
                        <Word>{list.word}</Word>
                            <button type="button" className="btn_check" onClick={() => {
                                dispatch(updateWordFB(list, list.id));
                             }}><BsCheckLg size="25"/></button>
                            <button type="button" className="btn_edit" onClick={() => { history.push('/Edit/' + index);}}><BsPencilSquare size="25"/></button>
                            <button type="button" className="btn_delete" onClick={() => { 
                                dispatch(deleteWordFB(list.id));
                                window.alert("삭제했습니다!");}}><BsTrash size="25"/></button>
                        <Mean>{list.mean}</Mean>
                        <Ex completed={list.completed}>{list.ex}</Ex>
                        <Read completed={list.completed}>{list.read}</Read>
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
    background-color: ${(props) => (props.completed ? "#F47C7C" : "#FFFFFF")};
    color: ${(props) => (props.completed ? "#FFFFFF" : "black")};
`;

const Word = styled.div`
    max-width : 100%;
    display : inline-block;
    margin-bottom : 10px;
    margin-right : 50px;
    font-size : 25px;
    font-family: 'Do Hyeon', sans-serif;
`;

const Mean = styled.div`
    margin-bottom : 20px;
    font-size : 20px;
    font-family: 'Do Hyeon', sans-serif;
    margin-bottom : 5px;
`;

const Ex = styled.div`
    font-size : 17px;
    font-family: 'Do Hyeon', sans-serif;
    color: ${(props) => (props.completed ? "#FFFFFF" : "#7FB5FF")};
`;

const Read = styled.div`
    font-size : 17px;
    font-family: 'Do Hyeon', sans-serif;
    color: ${(props) => (props.completed ? "#FFFFFF" : "#7FB5FF")};
`;
export default WordCard;