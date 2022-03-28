import React from "react"

export default function Movie(props) {
    return (
        <div className="movie-item-style-2">
            <img src={props.cover} alt="" />
            <div className="mv-item-infor">
                <h6>
                    <a href="moviesingle.html">
                        {props.title} <span>{props.year}</span>
                    </a>
                </h6>
                <p className="rate">
                    <i className="ion-android-star"></i><span>{props.imdb}</span> /10
                </p>
                <p className="describe">
                    {props.resume}...
                </p>
                <p className="run-time"> 
                Run Time: {props.time}   
                <span>MMPA: {props.mmpa} </span>   
                {/* <span>Release: 1 May 2015</span> */}
                </p>
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Actors: 
                    <a href="#">{props.actor0}</a> 
                    <a href="#">{props.actor1}</a> 
                    <a href="#">{props.actor2}</a>
                </p>
            </div>
        </div>
    )
}