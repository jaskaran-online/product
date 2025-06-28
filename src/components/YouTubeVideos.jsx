import React from "react";
import { useState, useEffect } from "react";

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

export default function YouTubeVideos() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYoutubeVideos().then((data) => {
      setVideos(data.data.data);
    });
  }, []);

  useEffect(() => {
    getYoutubeVideos(page).then((data) => {
      setVideos(data.data.data);
    });
  }, [page]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Page: {page}</h2>
      <div>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
        <button onClick={() => setPage(page - 1)}>Previous Page</button>
      </div>

      <div>
        {videos?.map((video, index) => (
          <div key={index}>
            <p>{video.items.snippet.title}</p>
            <img src={video.items.snippet.thumbnails.default.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
