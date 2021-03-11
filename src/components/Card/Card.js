import styles from './Card.module.css';

function Card(props) {

  const { card, toggleFavorites,type } = props;
console.log(type);
  return (
    <div className={styles.card} onClick={() => toggleFavorites(card._id,type)}>
      <img className={styles.img} src={card.imgUrl} alt={card.imgAlt} />
      <h2>{card.movieTitle}</h2>
      <p>Popularity: {card.popularity}</p>
      <p>Release: {card.release}</p>
    </div>
  );

}

export default Card;