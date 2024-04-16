import Song from "../Song";
import "./index.css";

export default function SongList({ list }) {
	return (
		<div className="SongList">
			{list.map((song) => {
				return <Song key={song.no} {...song} />; // 리액트는 고유한 key를 가지고 있어야함
			})}
		</div>
	);
}
