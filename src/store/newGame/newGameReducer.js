import { SET_GAME_TYPE, CLEAR_GAME_FORM } from "./newGameActions";

const newGameStore = {
  gameType: null,
  title: null,
  description: null,
  photo: null,
  tags: [],
  privacy: null,
};

export const newGameReducer = (state = newGameStore, { type, payload }) => {
  switch (type) {
    case SET_GAME_TYPE:
      return { ...state, gameType: payload };
    case CLEAR_GAME_FORM:
      return { ...newGameStore };
    default:
      return state;
  }
};
