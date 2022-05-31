import {db} from "../../firebase"; 
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, orderBy, query, Timestamp } from "firebase/firestore";

// Actions
const LOAD   = 'words/LOAD';
const CREATE = 'words/CREATE';
const UPDATE = 'words/UPDATE';
const DELETE = 'words/DELETE';

// 초기 상태값
const initialState = {
    list: [],
  };

// Action Creators
export function loadWord(word_list) {
  console.log('1 mount', word_list);
  return { type: LOAD, word_list };
}

export function createWord(word) {
  console.log('5 객체생성', word);
  return { type: CREATE, word };
}

export function updateWord(word_index) {
  return { type: UPDATE, word_index };
}

export function deleteWord(word_index) {
  return { type: DELETE, word_index };
}

// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "words"));

    let word_list = [];

    word_data.forEach((doc) => {
      word_list.push({id:doc.id, ...doc.data()});
    });

    console.log('2 미들웨어', word_list);
    dispatch(loadWord(word_list));
  }
}

export const createWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "words"), word );
    const word_data = {id: docRef.id, ...word};

    console.log('4 미들웨어', word_data);
    dispatch(createWord(word_data));
  }
}

export const updateWordFB = (word_index) => {
  return function(dispatch) {

  }
}

export const deleteWordFB = (word_id) => {
  return async function(dispatch, getState) {
    const docRef = doc(db, "words", word_id);
    await deleteDoc(docRef);

    const _word_list = getState().words.list;
    const word_index = _word_list.findIndex((i) => {
      return i.id === word_id;
    });
    
    dispatch(deleteWord(word_index));
}

}

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "words/LOAD":
        console.log('3 리듀서', action.word_list);
        return {list : action.word_list};
  
      case "words/CREATE": {
        const new_word_list = [...state.list, action.word];
        console.log('6 리듀서', new_word_list);
        return { list: new_word_list };
      }
    
      case "bucket/DELETE": {
      const new_word_list = state.list.filter((l, idx) => {
        return parseInt(action.word_index) !== idx;
      });
      return {list: new_word_list};
    }
      default:
        return state;
    }
  }