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
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getYoutubeVideos(page).then((data) => {
      setVideos(data.data.data);
    });
  }, [page]);

  return { videos, page, setPage };
}
