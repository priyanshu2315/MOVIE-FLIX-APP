import React from 'react';

import MovieList from './MovieList';
import Navbar from './navbar';
import { movies } from './moviesdata';


class App extends React.Component {

  constructor(){
    super();
    this.state={
        movies:movies,
        cartCount: 0
    }
}


handleaddStars =(movie)=> {
    console.log("added star" , movie);
    const {movies} = this.state;
    const mid =movies.indexOf(movie);
    
    if(movies[mid].stars >= 5){
        return;
    }
    movies[mid].stars+=0.5;

    this.setState((prevState)=>{
        return{
            movies: movies
        }
    })
}

handledecreaseStars =(movie)=> {
    console.log("added star" , movie);
    const {movies} = this.state;
    const mid =movies.indexOf(movie);
    
    if(movies[mid].stars <=0){
        return;
    }
    movies[mid].stars-=0.5;

    this.setState((prevState)=>{
        return{
            movies: movies
        }
    })
}


handleFavbtn = (movie) =>{
    const {movies } = this.state;
    const mid =movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
        movies: movies
    })
}

handlecartbtn = (movie) =>{
    const {movies } = this.state;
    let {cartCount } = this.state;
    const mid =movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    // console.log(movies[mid].cart);
    if(movies[mid].cart){
      cartCount+=1;
    }else{
      cartCount-=1;
    }
    console.log(cartCount);
    this.setState({
        movies: movies,
        cartCount: cartCount
    })
}

  render(){
    const {movies , cartCount} = this.state;
    return (
      <>

   <Navbar cartCount={cartCount}/>

   <MovieList key={movies.id} movies={movies} addStars={this.handleaddStars}
              decreaseStars={this.handledecreaseStars} handleFav={this.handleFavbtn}
              handleCart={this.handlecartbtn} />
    </>
  )
}
}

export default App;
