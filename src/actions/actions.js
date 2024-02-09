import { RESET_GAME, CLICK_ON_CARD, CHECK_THE_MATCH} from "../constants/constants";

export const resetGame = (state) => ({
  type: RESET_GAME, 
  payload: state, 
});

export const cardClick = (card) => ({
  type: CLICK_ON_CARD,
  payload: card,
});

export const checkTheCardsMatch = () => ({
  type: CHECK_THE_MATCH,
})