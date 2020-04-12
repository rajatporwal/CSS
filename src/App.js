import React, { Fragment } from "react";
import Header from "./component/Header";
import "./sass/main.scss";
import Footer from "./component/Footer";
import Popup from "./component/Popup";
import Navigation from "./component/Navigation";
import About from "./component/About";
import Features from "./component/Features";
import Tours from "./component/Tours";
import Books from "./component/Book";

export default function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Books />
      </main>
      <Footer />
      <Popup />
    </Fragment>
  );
}
