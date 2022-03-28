import React from 'react';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';

export default function App() {
  return (
	<PageWrapper>
    	<Movie 
		title="Spider-Man: No Way Home" year="2021" 
		imdb="8.5" cover="images/uploads/NoWayHome.png"
		resume="With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man"
		time="2h 28m" mmpa="PG-13" 
		director="Jon Watts" 
		actor0="Tom Holland, " 
		actor1="Zendaya, " 
		actor2="Benedict Cumberbatch"/>
		
		<Movie 
		title="oblivion" year="2012" 
		imdb="8.1" cover="images/uploads/mv1.jpg"
		resume="Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity"
		time="2h 21m" mmpa="PG-13" 
		director="Joss Whedon" 
		actor0="Robert Downey Jr., " 
		actor1="Chris Evans, " 
		actor2="Chris Hemsworth"/>
	</PageWrapper>
  );
}
