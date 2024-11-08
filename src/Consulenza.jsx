import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif"
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif"
import Gestione from "./assets/gestione-delle-risorse-umane.avif"
import Cards from "./CardLists.jsx";
import Corpo from "./CorpoPaghe.jsx";
import Scelta from "./Scelta.jsx";
import CorpoConsulenza from "./CorpoConsulenza.jsx";


function ConsulenzaPage() {
  return (
    <>
    <NavbarFirst />
    <Slider title="CONSULENZA CONTRATTUALE E DEL LAVORO" subtitle="consulente del lavoro" imgUrl={Consulenza} />
    <CorpoConsulenza />
    <Scelta />
    </>
  )
}


export default ConsulenzaPage;
