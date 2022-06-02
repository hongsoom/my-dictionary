import {db} from "../../firebase"; 
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Actions
const LOAD   = 'words/LOAD';
const CREATE = 'words/CREATE';
const MODIFY = 'words/MODIFY';
const UPDATE = 'words/UPDATE';
const DELETE = 'words/DELETE';

// 초기 상태값
const initialState = {
    list: [],
  };

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  return { type: CREATE, word };
}

export function modifyWord(word, word_index) {
  return { type: MODIFY, word, word_index };
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

    word_list.sort((a,b) => {
      return b.date - a.date;
    })

    dispatch(loadWord(word_list));
  }
}

export const createWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "words"), word);
    const word_data = {id: docRef.id, ...word};

    dispatch(createWord(word_data));
  }
}

export const modifyWordFB = (word, word_id) => {
  return async function(dispatch,getState) {
    const docRef = doc(db, "words", word_id);
    await updateDoc(docRef, {
      word : word.word,
      mean : word.mean,
      ex : word.ex,
      read : word.read,
    });

    const _word_list = getState().words.list;
    const word_index = _word_list.findIndex((l) => {
      return l.id === word_id;
    })
    
    dispatch(modifyWord(word, word_index));
  }
}

export const updateWordFB = (word, word_id) => {
  return async function(dispatch, getState) {
    const docRef = doc(db, "words", word_id);
    await updateDoc(docRef, {completed: !word.completed});

    const _word_list = getState().words.list;
    const word_index = _word_list.findIndex((l) => {
      return l.id === word_id;
    })

    dispatch(updateWord(word_index));
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
        return {list : action.word_list};
  
      case "words/CREATE": {
        const new_word_list = [...state.list, action.word];
        new_word_list.sort((a,b) => {
          return b.date - a.date;
        })
        return { list: new_word_list };
      }

      case "words/MODIFY": {
        const new_word_list = state.list.map((a, idx) => 
          parseInt(action.word_index) === idx ? { ...a, ...action.word } : a);
        return { ...state, list: new_word_list };
      }
      
      case "words/UPDATE": {
        const new_word_list = state.list.map((b, idx) => 
          parseInt(action.word_index) === idx ? { ...b, completed: !b.completed } : b);
        return { ...state, list: new_word_list };
      }

      case "words/DELETE": {
      const new_word_list = state.list.filter((l, idx) => {
        return parseInt(action.word_index) !== idx;
      });
      return {list: new_word_list};
    }
      default:
        return state;
    }
  }