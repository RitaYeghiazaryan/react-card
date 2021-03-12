import styles from './Favorites.module.css';

function Favorites({ favorites,selected}) {

  return (
    <div className={styles.card} onClick={()=>selected(favorites._id)} >
      <img className={styles.img} src={favorites.imgUrl} alt={favorites.imgAlt} />
      <h2>{favorites.movieTitle}</h2>
      <p>Popularity: {favorites.popularity}</p>
      <p>Release: {favorites.release}</p>
    </div>
  );

}

export default Favorites;