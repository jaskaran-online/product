import React from "react";
import useYoutubeVideos from "../hooks/useYoutubeVideos";

export default function YouTubeVideos() {
  const { videos, page, setPage } = useYoutubeVideos();

  return (
    <div>
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
