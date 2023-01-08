import React from "react";
import "../styles/Home.module.css";
import Carrusel from "./carrusel";

const home = () => {
    return (
        <div id="Home"className="container m-auto bg-dark text-light">
            <h1 className="text-center mt-2">Comité ambiental comunal</h1>
            <Carrusel />
        </div>
    )
}
export default home;