import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
	return (
		<Fragment>
			<section className="movie-layout page-container pb-20">
				<h2 className="mb-10 text-3xl font-bold text-white capitalize">
					Now Playing
				</h2>
				<MovieList></MovieList>
			</section>
			<section className="movie-layout page-container pb-20">
				<h2 className="mb-10 text-3xl font-bold text-white capitalize">
					Top Rated
				</h2>
				<MovieList type="top_rated"></MovieList>
			</section>
			<section className="movie-layout page-container pb-20">
				<h2 className="mb-10 text-3xl font-bold text-white capitalize">
					Trending
				</h2>
				<MovieList type="popular"></MovieList>
			</section>
		</Fragment>
	);
};

export default HomePage;
