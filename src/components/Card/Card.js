import styles from './Card.module.css';

const  Card=(props)=> {

  const { card,handleOnCards}  = props;

  return (
    <div className={styles.card} onClick={() => handleOnCards(card._id)}>
      <img className={styles.img} src={card.imgUrl} alt={card.imgAlt} />
      <h2>{card.movieTitle}</h2>
      <p>Popularity: {card.popularity}</p>
      <p>Release: {card.release}</p>
    </div>
  );

}

export default Card;


