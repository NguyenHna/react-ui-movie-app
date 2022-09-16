import { useEffect, useMemo, useState } from "react";
import YouTube from "react-youtube";
import { API_KEY, urlImage } from "../GetAPI/index";
import "./App.css";

function MovieDetail({ movieData }) {
  // luu
  const [isVideo, setIsVideo] = useState(false);
  const [keyVideo, setKeyVideo] = useState("");
  console.log(keyVideo);

  useEffect(() => {
    const urlMovieSever = `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=${API_KEY}`;
    // const urlMovieSever = `https://api.themoviedb.org/3/movie/616037/videos?api_key=${API_KEY}`;
    async function CallAPI() {
      try {
        await fetch(urlMovieSever)
          .then((res) => res.json())
          .then((data) => {
            if (data.results.length === 0) {
              setIsVideo(false);
            } else {
              setIsVideo(true);
              const videos = data.results.filter((item) => {
                return (
                  (item.site === "YouTube" && item.type === "Teaser") ||
                  item.type === "Trailer"
                );
              });
              const isTrailer = videos.filter(
                (item) => item.type === "Trailer"
              );
              if (isTrailer.length === 0) {
                setKeyVideo(videos[0].key);
              } else {
                setKeyVideo(isTrailer[0].key);
              }
            }
          });
      } catch (error) {}
    }
    // goi API
    CallAPI();
  });

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="row movie-detail ">
        <div key={movieData.name} className="detail-description col-md=6">
          <h3>{movieData.name}</h3>
          <p>
            <strong>{`Release Date: ${movieData.first_air_date}`}</strong>
          </p>
          <p>
            <strong>{`Vote: ${movieData.vote_average}/10`}</strong>
          </p>
          <p style={{ fontSize: "14px" }}>{movieData.overview}</p>
        </div>
        <div className="video-trailer col-md=6">
          {isVideo ? (
            <YouTube videoId={keyVideo} opts={opts} />
          ) : (
            <img src={urlImage + movieData.backdrop_path || "#"} />
          )}
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
