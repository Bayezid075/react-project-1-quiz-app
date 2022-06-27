import { useEffect } from "react";
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  get,
  startAt,
  limitToFirst,
} from "firebase/database";
import { useState } from "react";
export default function useVideo(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [video, setVideo] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    // database releted work
    async function fetchVideos() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        setLoading(true);
        // request firbase
        const sanpshot = await get(videoQuery);
        setLoading(false);
        if (sanpshot.exists()) {
          setVideo((prevVideos) => {
            return [...prevVideos, ...Object.values(sanpshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, []);

  return { loading, error, video };
}
