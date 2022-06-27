import useVideo from "../hook/useVideo";

import Video from "./Video";
import { Link } from "react-router-dom";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Videos() {
  const { video, loading, error, hasMore } = useVideo(0);
  const [page, setPage] = useState(1);
  console.log(video);
  return (
    <div>
      {video.length > 0 && (
        <InfiniteScroll
          dataLength={video.length}
          hasMore={hasMore}
          next={() => setPage + 8}
        >
          {video.map((video) => (
            <Link to="/quiz" key={video.youtubeID}>
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>
          ))}
          }
        </InfiniteScroll>
      )}

      {!loading && video.length === 0 && (
        <div className="b"> No Data Found</div>
      )}
      {loading && <div> There was an loading </div>}
      {error && <div> There was an error </div>}
    </div>
  );
}
export default Videos;
