export const SET_GAME_FORM = "SET_GAME_FORM";
export const setGameForm = (gameForm) => ({
  type: SET_GAME_FORM,
  payload: gameForm,
});

export const CLEAR_GAME_FORM = "CLEAR_GAME_FORM";
export const clearGameForm = () => ({ type: CLEAR_GAME_FORM });
