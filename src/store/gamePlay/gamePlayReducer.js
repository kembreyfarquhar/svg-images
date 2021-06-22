import { SET_GAME_PLAY } from "./gamePlayActions";

const gamePlayStore = {
  type: null,
  isPlaying: false,
};

export const gamePlayReducer = (state = gamePlayStore, { type, payload }) => {
  switch (type) {
    case SET_GAME_PLAY:
      return { ...state, type: payload.type, isPlaying: true };
    default:
      return state;
  }
};
