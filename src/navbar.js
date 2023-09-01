import React from "react";
import styled from "styled-components";
import navStyle from "./navbar.module.css"

class Navbar extends React.Component{
    render(){
        return(

            <>
            <div className={navStyle.nav}>
            <div className={navStyle.main}>
            
            <h1 className={navStyle.appname}> MOVIE FLIX</h1>


            <div className={navStyle.cart}>
            <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="" />

                <span> {this.props.cartCount} </span>
            </div>
                 </div>
           </div>
            </>

)
        
    }
}

export default Navbar;