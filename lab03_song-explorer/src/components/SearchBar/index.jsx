import { useRef } from "react";
import "./index.css";
import axios from "axios";

export default function SearchBar({ setSongList }) {
	const inputRef = useRef();

	const handleSearch = () => {
		axios.get(`https://api.manana.kr/karaoke/song/${inputRef.current.value}.json`).then((res) => {
			setSongList(res.data);
		});
	};

	return (
		<div className="SearchBar">
			<input type="text" className="SearchBar__input" ref={inputRef} />
			<button className="SearchBar__button" onClick={handleSearch}>
				검색
			</button>
		</div>
	);
}
