import { useEffect, useState } from "react";

async function getYoutubeVideos(page = 1) {
  let data = [];
  let response = await fetch(
    `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}`
  );

  if (response.ok) {
    data = await response.json();
  }

  return data;
}

export default function useYoutubeVideos() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getYoutubeVideos(page);
        setVideos(data.data.data);
      } catch (err) {
        setError({
          message: "Error fetching videos",
          error: err,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return { videos, page, setPage, isLoading, error };
}
