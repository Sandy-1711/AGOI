import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { auth } from "../../firebase/firebase";
import Intro from "./Intro/Intro";
import Nav from "./Nav/Nav";
import Footer from "../Footer/Footer";
import NavMobile from "./Nav/NavMobile";
import NavLater from "./Nav/NavLater";

let Home = () => {
  return (
    <>
      {/* <Nav /> */}

      {window.innerWidth <= 800 && <NavLater />}
      <Intro />
      <Footer />
      {/* {window.innerWidth<=800 && <NavMobile/>} */}
    </>
  );
};

export default Home;
