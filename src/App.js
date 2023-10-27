import { Fragment } from "react";
import "./index.scss";
import Banner from "./components/banner/Banner";
//https://api.themoviedb.org/3/movie/now_playing
import "swiper/scss";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import MoviePage from "./pages/MoviePage";
function App() {
	return (
		<Fragment>
			<Routes>
				<Route element={<Main></Main>}>
					<Route
						path="/"
						element={
							<>
								<Banner></Banner>
								<HomePage></HomePage>
							</>
						}
					></Route>
					<Route path="/movies" element={<MoviePage></MoviePage>}></Route>
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
