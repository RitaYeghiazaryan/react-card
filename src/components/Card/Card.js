import styles from './Card.module.css';

const  Card=(props)=> {

  const { card, available} = props;

  return (
    <div className={styles.card} onClick={() => available(card._id,)}
    >
      <img className={styles.img} src={card.imgUrl} alt={card.imgAlt} />
      <h2>{card.movieTitle}</h2>
      <p>Popularity: {card.popularity}</p>
      <p>Release: {card.release}</p>
    </div>
  );

}

export default Card;


//onClick={() => toggleFavorites(card._id,type)}

//toggleFavorites,type 