import React from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
	const { data, error, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=bcc1b384d158a95d901a22b8cdeef18d`,
		fetcher
	);
	const movies = data?.results || [];
	return (
		<section className="banner page-container h-[500px] mb-20 overflow-hidden">
			<Swiper grabCursor={"true"} slidesPerView={"auto"}>
				{movies.length > 0 &&
					movies.map((item) => (
						<SwiperSlide key={item.id}>
							<BannerItem item={item}></BannerItem>
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	);
};
function BannerItem({ item }) {
	const { title, poster_path } = item;
	return (
		<div className="relative w-full h-full rounded-lg">
			<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
			<img
				src={`https://image.tmdb.org/t/p/original/${poster_path}`}
				alt=""
				className="object-cover w-full h-full rounded-lg"
			/>
			<div className="bottom-5 left-5 absolute w-full text-white">
				<h2 className="mb-5 text-3xl font-bold">{title}</h2>
				<div className="gap-x-3 flex items-center mb-8">
					<span className="px-4 py-2 border border-white rounded-md">
						Adventure
					</span>
					<span className="px-4 py-2 border border-white rounded-md">
						Action
					</span>
					<span className="px-4 py-2 border border-white rounded-md">
						Drama
					</span>
				</div>
				<button className="bg-primary px-6 py-3 font-medium text-white rounded-lg">
					Watch Now
				</button>
			</div>
		</div>
	);
}

export default Banner;
