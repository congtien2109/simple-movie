import React from "react";

const MovieCard = ({ item }) => {
	const { title, poster_path, vote_average, release_date } = item;
	return (
		<div className="movie-card bg-slate-800 flex flex-col h-full p-3 text-white rounded-lg select-none">
			<img
				src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
				alt=""
				className="object-top w-full h-[300px] mb-5 rounded-lg"
			/>
			<div className="flex flex-col flex-1">
				<h3 className="mb-3 text-xl font-bold">{title}</h3>
				<div className="flex items-center justify-between mb-10 text-sm opacity-50">
					<span>{new Date(release_date).getFullYear()}</span>
					<span>{vote_average}</span>
				</div>
				<button className="bg-primary w-full px-6 py-3 mt-auto capitalize rounded-lg">
					Watch Now
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
