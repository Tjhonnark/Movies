import React, {useState} from 'react';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesjson from './movies.json';
import Paginacion from './paginacion';

export default function App() {

	const [pageActual, setPageActual] = useState(1);

	const num = 3;

	let movies = moviesjson;

	const cargarMovies = () => {
		movies = movies.slice(
			(pageActual - 1) * num, pageActual * num
		);
	}

	const getTotalPages = () => {
		let totalPages = moviesjson.length;
		return Math.ceil(totalPages / num);
	}

	cargarMovies();

	return (
		<PageWrapper>

			{movies.map(movie => 
				<Movie 
					title={movie.title} 
					year={movie.year} 
					imdb={movie.imdb} 
					cover={movie.cover}
					resume={movie.resume}
					time={movie.time} 
					mmpa={movie.mmpa} 
					director={movie.director} 
					actor0={movie.actor0} 
					actor1={movie.actor1}
					actor2={movie.actor2}
				/>
			)}

			<Paginacion page={pageActual} total={getTotalPages()} onChange={(page)=>{
				setPageActual(page)
			}}/>

		</PageWrapper>
	);
}
