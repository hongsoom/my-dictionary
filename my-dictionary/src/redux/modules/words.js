// Actions
const LOAD   = 'words/LOAD';
const CREATE = 'words/CREATE';
const UPDATE = 'words/UPDATE';
const REMOVE = 'words/REMOVE';

// 초기 상태값
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
  };

// Action Creators
export function loadWords() {
  return { type: LOAD };
}

export function createWords(word) {
  return { type: CREATE, word };
}

export function updateWords(word) {
  return { type: UPDATE, word };
}

export function removeWords(word) {
  return { type: REMOVE, word };
}

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "words/LOAD":
        return state;
  
      case "words/CREATE":
        const new_bucket_list = [...state.list, action.bucket];
        return { list: new_bucket_list };
  
      default:
        return state;
    }
  }