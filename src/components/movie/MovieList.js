import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
const MovieList = ({ type = "now_playing" }) => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${type}?api_key=bcc1b384d158a95d901a22b8cdeef18d`,
		fetcher
	);
	const movies = data?.results || [];
	return (
		<div className="movie-list">
			<Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
				{movies.length > 0 &&
					movies.map((item) => (
						<SwiperSlide key={item.id}>
							<MovieCard item={item}></MovieCard>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MovieList;
