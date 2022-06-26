import useVideo from "../hook/useVideo";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
import { Link } from "react-router-dom";

function Videos() {
  const { video, loading, error } = useVideo();
  console.log(video);
  return (
    <div className={classes.videos}>
      {video.length > 0 &&
        video.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loading && video.length === 0 && (
        <div className="b"> No Data Found</div>
      )}
      {loading && <div> There was an loading </div>}
      {error && <div> There was an error </div>}
    </div>
  );
}
export default Videos;
