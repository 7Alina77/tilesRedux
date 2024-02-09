import { useDispatch, useSelector } from "react-redux";
import { cardClick, checkTheCardsMatch } from "../actions/actions";
import { useEffect } from "react";

function Card({card}) {
  const {color, isOpen} = card;
  const dispatch = useDispatch();
  // const cardsOpen = useSelector((state) => state.cardsOpen);
  // console.log(cardsOpen);

  // useEffect(() => {
  //   if(cardsOpen.length === 2) {
  //     setTimeout(() => dispatch(checkTheCardsMatch), 2000);
  //   }
  // },[dispatch, cardsOpen.length]);

  return (
    <section className='card hover'>
      {isOpen === true ? 
      <div style={{backgroundColor: color}} className="card__opened"></div>
      :
      <div onClick={() => dispatch(cardClick(card))} className="card__closed"></div>
      }
    </section>
  )
}

export default Card;