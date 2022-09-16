import { useEffect, useState } from "react";
import GetAPI, { requests, urlImage } from "../GetAPI/index";
import "./App.css";
function Banner({ data }) {
  return (
    <div className="banner row">
      <div className="col-md-5">
        <h2>{data.name || ""}</h2>
        <button>Play</button>
        <button>My list</button>
        <p>{data.overview || ""}</p>
      </div>
    </div>
  );
}
export default Banner;
