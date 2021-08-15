import type { NextPage } from "next";
import { Fragment } from "react";
import Search from "../components/Search/Search";
import { RestaurantCarousel } from "../components/RestaurantCaroursel/RestaurantCarousel";
import { Tutorial } from "../components/Tutorial/Tutorial";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Search />
      <RestaurantCarousel />
      <Tutorial />
      <Footer />
      <Contact />
    </Fragment>
  );
};

export default Home;
