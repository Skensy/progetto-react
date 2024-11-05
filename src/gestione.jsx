import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Navbar.css"
import Navbar from "./Navbar.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif"
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif"
import Gestione from "./assets/gestione-delle-risorse-umane.avif"
import Cards from "./CardLists.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Slider title="GESTIONE DELLE RISORSE UMANE" subtitle="consulente del lavoro" gradient="bg-gradient-to-r from-violet-500 to-purple-500" />
    <Midcontent />
    <Cards />
  </StrictMode>
);