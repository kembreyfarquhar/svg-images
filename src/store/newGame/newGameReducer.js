import { SET_GAME_FORM, CLEAR_GAME_FORM } from "./newGameActions";

const newGameStore = {
  type: null,
  title: null,
  description: null,
  gameImg: null,
  tags: [],
  privacy: null,
};

export const newGameReducer = (state = newGameStore, { type, payload }) => {
  switch (type) {
    case SET_GAME_FORM:
      return {
        ...state,
        type: payload.type,
        title: payload.title,
        description: payload.description,
        gameImg: payload.gameImg,
        tags: payload.tags,
        privacy: payload.privacy,
      };
    case CLEAR_GAME_FORM:
      return { ...newGameStore };
    default:
      return state;
  }
};
