import { useEffect } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";
import { useState } from "react";
export default function useVideo(params) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    // database releted work
    async function fetchVideos() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey());
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
