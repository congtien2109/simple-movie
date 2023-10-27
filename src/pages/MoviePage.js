import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/popular?api_key=bcc1b384d158a95d901a22b8cdeef18d`,
		fetcher
	);
	const movies = data?.results || [];
	return (
		<div className="page-container py-10">
			<div className="flex mb-10">
				<div className="flex-1">
					<input
						className="bg-slate-800 w-full p-4 text-white outline-none"
						type="text"
						placeholder="Type here to search..."
					/>
				</div>
				<button className="bg-primary p-4 text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</button>
			</div>
			<div className="grid grid-cols-4 gap-10">
				{movies.length > 0 &&
					movies.map((item) => (
						<MovieCard key={item.id} item={item}></MovieCard>
					))}
			</div>
		</div>
	);
};

export default MoviePage;
