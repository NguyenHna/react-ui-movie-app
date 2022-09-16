import { useState, useEffect } from "react";
import Banner from "../Banner";
import NavBar from "../NavBar";
import { requests, urlImage } from "../GetAPI/index";
import "./App.css";

function Header() {
  //state save data  display
  const [dataAPI, setDataAPI] = useState({});
  //sate save background banner
  const [linkBG, setLinkBG] = useState("");

  //Hook useEffect thuc hien lenh requests API
  useEffect(() => {
    // ham async get API.
    async function getAPI() {
      const datas = await fetch(requests.fetchNetflixOriginals)
        .then((res) => res.json())
        .then((data) => data.results)
        .then((data) => data[Math.floor(Math.random() * (data.length - 1))])
        .then((data) => {
          //set du lieu hien thi
          setDataAPI(data);
          //set Background
          setLinkBG(`url("${urlImage}${data.backdrop_path}")`);
        });
    }
    // Goi API
    getAPI();
  }, []);
  return (
    <>
      <div className=" header row" style={{ backgroundImage: linkBG }}>
        <NavBar />
        <Banner data={dataAPI} />
      </div>
    </>
  );
}

export default Header;
