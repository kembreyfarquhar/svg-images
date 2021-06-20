export const SET_GAME_TYPE = "SET_GAME_TYPE";
export const setGameType = (gameType) => ({
  type: SET_GAME_TYPE,
  payload: gameType,
});

export const CLEAR_GAME_FORM = "CLEAR_GAME_FORM";
export const clearGameForm = () => ({ type: CLEAR_GAME_FORM });
