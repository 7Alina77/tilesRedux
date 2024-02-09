import { CHECK_THE_MATCH, CLICK_ON_CARD, RESET_GAME, randomizeCards } from "../constants/constants";

export default function reducer(state, action) {
  switch (action.type) {
    case CLICK_ON_CARD:
      if(state.firstCardColor === null && state.secondCardColor === null) {
        console.log(state, action.payload);
        return {
          allCards: state.allCards.map((card) => (
            card.id === action.payload.id 
            ? {...card, isOpen: true}
            : card
          )),
          cardsOpen: [action.payload.id],
          firstCardId: action.payload.id,
          secondCardId: null,
          firstCardColor: action.payload.color,
          secondCardColor: null
        };
      } else if(state.firstCardColor !== null && state.secondCardColor === null) {
        console.log(state, action.payload);
        return {...state,
          allCards: state.allCards.map((card) => (
            card.id === action.payload.id 
            ? {...card, isOpen: true}
            : card
          )),
          cardsOpen:  [...state.cardsOpen, action.payload.id],
          secondCardId: action.payload.id,
          secondCardColor: action.payload.color,
        };
      } 
      else if(state.firstCardColor !== null && state.secondCardColor !== null) {
        console.log(state, action.payload);
        if(state.firstCardColor !== state.secondCardColor) {
          return {
            allCards: state.allCards.map((card) => (
              card.id === state.cardsOpen[0] || card.id === state.cardsOpen[1]
              ? {...card, isOpen: false}
              : card
            )),
            cardsOpen: [],
            firstCardId: null,
            secondCardId: null,
            firstCardColor: null,
            secondCardColor: null,
          }
        } else {
          return {
            allCards: state.allCards,
            cardsOpen: [],
            firstCardId: null,
            secondCardId: null,
            firstCardColor: null,
            secondCardColor: null,
          }
        }
      }
      break;
    case RESET_GAME:
      return {
        allCards: randomizeCards(),
        cardsOpen: [],
        firstCardId: null,
        secondCardId: null,
        firstCardColor: null,
        secondCardColor: null};
    default:
      return state;
  }
}