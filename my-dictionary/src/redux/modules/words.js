import {db} from "../../firebase"; 

// Actions
const LOAD   = 'words/LOAD';
const CREATE = 'words/CREATE';
const UPDATE = 'words/UPDATE';
const REMOVE = 'words/REMOVE';

// 초기 상태값
const initialState = {
    list: [{
      word : '홍수민홍수민홍수',
      mean : 'adfdsfdsf수',
      ex : "asfdadsfdasfads민"
    },  {
      word : '12345678',
      mean : '하',
      ex : "얀"
    }, {
      word : 'javascript',
      mean : '현',
      ex : "준"
    }, {
      word : '이',
      mean : '병',
      ex : "수"
    }],
  };

// Action Creators
export function loadWords(word_list) {
  return { type: LOAD, word_list };
}

export function createWords(word) {
  console.log(word);
  return { type: CREATE, word };
}

export function updateWords(word_index) {
  return { type: UPDATE, word_index };
}

export function removeWords(word_index) {
  return { type: REMOVE, word_index };
}

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "words/LOAD":
        return {list : action.word_list};
  
      case "words/CREATE": {
        const new_word_list = [...state.list, action.word];
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