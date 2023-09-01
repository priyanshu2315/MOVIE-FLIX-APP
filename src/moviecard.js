import {Component} from "react";
import avengerimg from './img/avengerposter.jpg'

class MovieCard extends Component{
    


    render(){

        const {title , plot , price , rating ,stars , fav , cart , img} = this.props.movies;
        // console.log(this.props);
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="movie-img">
                        <img src={img} alt="Poster" />
                    </div>
                    <div className="movie-detail">
                        <h2>{title}</h2>
                        <p>{plot}</p>
                        <h3>Rs. 199</h3>
                        <footer className="movie-card-description">
                            <h2>{rating}</h2>
                            <div className="star">
                                <img src="https://cdn-icons-png.flaticon.com/128/56/56889.png"  className="decrease-btn"   onClick={()=>{this.props.decreaseStars(this.props.movies)}} alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"  className="star-img"  alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"  className="increase-btn"  onClick={()=>{this.props.addStars(this.props.movies)}} alt="" />
                               <h2 className="startcount">{stars}</h2>
                               
                            </div>
                            <div>
                            {fav ? <button className="unfavorite-button" onClick={()=>{this.props.handleFav(this.props.movies)}} >UnFavourite</button>:
                            <button className="favorite-button" onClick={()=>{this.props.handleFav(this.props.movies)}} >Favourite</button> }
                            

                            {cart ? 
                            <button className="remove-add-to-cart-button" onClick={()=>{this.props.handleCart(this.props.movies)}} >Remove From Cart</button> 
                            :
                        <button className="add-to-cart-button" onClick={()=>{this.props.handleCart(this.props.movies)}} >Add to Cart</button>
                        }

                         
                            </div>

                        </footer>
                    </div>
                </div>

            
            </div>
        )

    }
}

export default MovieCard;