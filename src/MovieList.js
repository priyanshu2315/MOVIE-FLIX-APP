import { Component } from "react";
import MovieCard from "./moviecard";

class MovieList extends Component{
    

    render(){
        const  { movies , addStars , decreaseStars , handleFav , handleCart } = this.props
        // console.log(this.props);
        return(
            <>
          {movies.map((movie , index)=>(
              <MovieCard key={movie.id} movies={movie}  addStars={addStars} decreaseStars={decreaseStars}
              handleFav={handleFav} handleCart={handleCart}
              />
              ))}
              </>
        )
    }
}

export default MovieList;