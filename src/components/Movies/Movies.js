import React, { Component } from "react";
import Card from "../Card/Card";
import styles from "./Movies.module.css";
import idGenerator from "../../helpers/idGenerator";
import Favorite from './../Favorites/Favorites'
class Movies extends Component {
  state = {
    cards: [
      {
        _id: idGenerator(),
        imgUrl:
          "https://image.tmdb.org/t/p/w500//iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
        imgAlt: "img1",
        movieTitle: "I Am Legend",
        popularity: "118.189",
        release: "2007-12-12",
      },
      {
        _id: idGenerator(),
        imgUrl:
          "https://image.tmdb.org/t/p/w500//197JwBpJ7TW7WtBvNLDb6gj7N9Z.jpg",
        imgAlt: "img2",
        movieTitle: "Come to Daddy",
        popularity: "99.741",
        release: "2020-02-07",
      },
      {
        _id: idGenerator(),
        imgUrl:
          "https://image.tmdb.org/t/p/w500//i91mfvFcPPlaegcbOyjGgiWfZzh.jpg",
        imgAlt: "img3",
        movieTitle: "First Man",
        popularity: "108.847",
        release: "2018-10-11",
      },
      {
        _id: idGenerator(),
        imgUrl:
          "https://image.tmdb.org/t/p/w500//6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
        imgAlt: "img4",
        movieTitle: "Avatar",
        popularity: "117.153",
        release: "2009-12-10",
      },
    ],
    favorites: [],
  };
  
  available=(id)=>{
        // ADD TO FAVORITES
        const cards = [...this.state.cards];
        const favorites = [...this.state.favorites];
        const myFoundObj = this.state.cards.find((item, idx, arr) => {
          return item._id === id;
        });
        favorites.push(myFoundObj);
        
      // DELETE ITEM FROM CARDS
      const itemIdx = cards.findIndex((item) => item._id === id);
      cards.splice(itemIdx, 1);

      this.setState({cards,favorites})
    }
    favoritesMovie=(id)=>{
    const cards = [...this.state.cards];
    const favorites = [...this.state.favorites];

    // ADD TO FAVORITES
    const myFoundObj = this.state.favorites.find((item, idx, arr) => {
      return item._id === id;
    });
    cards.push(myFoundObj);

    // DELETE ITEM FROM CARDS
    const itemIdx = favorites.findIndex((item) => item._id === id);
    favorites.splice(itemIdx, 1);
  
     this.setState({ favorites, cards });

};
render() {

    return (
      <div>
        <h1> Available Card </h1>
        <div className={styles.container}>
          {this.state.cards.map((card) => {
            return (
              <Card
                key={card._id}
                handleOnCards={this.available}
                card={card}
              />
            );
          })}
        </div>
        <div>
          <h1>Favorites</h1>
          <p>{this.state.favorites.length}</p>
          <hr></hr>
          <div className={styles.container}>
            {this.state.favorites.map((favorites,_id) => {
               return <Favorite key={favorites._id} favorites={favorites}   handleOnCards={this.favoritesMovie} />;
            
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
