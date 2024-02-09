import React, { useEffect, useState } from 'react';
import Card from './Card';
import { initialState, randomizeCards} from '../constants/constants';
import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame, clickOnCard, firstCardClick } from '../actions/actions';

function App() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state);

  // function reducer(state, action) {
  //   switch(action.type) {
  //     case 'click':
  //       if(state.firstCardColor === null && state.secondCardColor === null) {
  //         return {
  //           allCards: state.allCards.map((card) => (
  //             state.allCards.indexOf(card) === state.allCards.indexOf(action.card) 
  //             ? {...card, isOpen: true}
  //             : card 
  //           )),
  //           firstCard: state.allCards.indexOf(action.card),
  //           secondCard: null,
  //           cardIsOpen:  [...state.cardIsOpen, state.allCards.indexOf(action.card)],
  //           firstCardColor: action.card.color,
  //           secondCardColor: null,
  //         }
  //       } else if(state.firstCardColor !== null && state.secondCardColor === null) {
  //         if(state.firstCardColor === state.secondCardColor) {
  //           return {
  //             allCards: state.allCards.map((card) => (
  //               (state.allCards.indexOf(card) === state.allCards.indexOf(action.card) 
  //               ? {...card, isOpen: true}
  //               : card )
  //               && (state.allCards.indexOf(card) === state.firstCard
  //               ? {...card, isOpen: true}
  //               : card
  //               )
  //             )),
  //             firstCard: null,
  //             secondCard: null,
  //             cardIsOpen:[],
  //             firstCardColor: null,
  //             secondCardColor: null,
  //           }
  //         } else if(state.firstCardColor !== state.secondCardColor) {
  //           console.log(2)
  //           return {
  //             allCards: state.allCards.map((card) => (
  //               (state.allCards.indexOf(card) === state.allCards.indexOf(action.card) 
  //               ? {...card, isOpen: true}
  //               : card )
  //             )),
  //             firstCard: state.firstCard,
  //             secondCard: state.allCards.indexOf(action.card),
  //             cardIsOpen:  [...state.cardIsOpen, state.allCards.indexOf(action.card)],
  //             firstCardColor: state.firstCardColor,
  //             secondCardColor: action.card.color,
  //           }
  //         }
  //        } else if(state.firstCardColor === state.secondCardColor) {
  //         console.log(3)
  //         return {
  //           allCards: state.allCards.map((card) => (
  //             state.allCards.indexOf(card) === state.allCards.indexOf(action.card) 
  //             ? {...card, isOpen: true}
  //             : card 
  //           )),
  //           firstCard: state.allCards.indexOf(action.card),
  //           secondCard: null,
  //           cardIsOpen: [state.allCards.indexOf(action.card)],
  //           firstCardColor: action.card.color,
  //           secondCardColor: null,
  //         }
  //       } else if(state.firstCardColor !== state.secondCardColor){
  //         console.log('wtf')
  //         return {
  //           allCards: state.allCards.map((card) => (
  //             (state.allCards.indexOf(card) === state.allCards.indexOf(action.card) 
  //               ? {...card, isOpen: true}
  //               : card )
  //             &&
  //             (state.allCards.indexOf(state.firstCard)
  //               ? {...card, isOpen: false}
  //               : card) 
  //             && 
  //             (state.allCards.indexOf(state.secondCard)
  //               ? {...card, isOpen: false}
  //               : card)
  //           )),
  //           cardIsOpen: [],
  //           firstCardColor: null,
  //           secondCardColor: null,
  //           firstCard: null,
  //           secondCard: null,
  //         }
  //       }
  //   }
  //   switch(action.type) {
  //     case 'reset':
  //       return {
  //         allCards: randomizeCards(),
  //         cardIsOpen: [],
  //         firstCardColor: null,
  //         secondCardColor: null,
  //       }
  //   }
  // }

  // function clickOnCard(card) {
  //   dispatch({
  //     type: 'click',
  //     card,
  //   })
  // }

  // function checkTheCardsMatch(){
  //   dispatch({type: "check"})
  // };

  // const clickOnCard = (card) => {
  //   dispatch(firstCardClick(card));
  // }

  return (
    <div className='page'>
      <h1 className='page__title'>Tiles game by Alina Potapchuk</h1>
      <button onClick={() => dispatch(resetGame())} className='page__btn hover'>Start new game!</button>
      <section className='cards'>
        {cards &&
        cards.allCards.map((card) => {
          return (
            <Card 
            //clickOnCard={clickOnCard} 
            key={card.id} 
            card={card} 
            cards = {cards}
          />
          )    
        })}
      </section>
    </div> 
  );
}

export default App;
