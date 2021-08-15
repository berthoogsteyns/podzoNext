import * as React from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../../styles/RestaurantCarousel.module.scss";
import { RestaurantBody } from "../RestaurantBody/RestaurantBody";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetRestaurants } from "../../lib/swr/restaurants";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.arrow_next}`} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};

const PreviousArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.arrow_prev}`} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};

export const RestaurantCarousel = () => {
  const { data, isLoading } = useGetRestaurants({});
  const router = useRouter();
  console.log("data", data?.restaurants);
  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className={styles.carousel_container}>
      <h1 className={styles.carousel_container_header}>Our restaurants</h1>
      <div className={styles.carousel_container_slider}>
        <Slider {...config}>
          {data &&
            data.restaurants.map((r, i) => {
              return <RestaurantBody key={i} restaurant={r.restaurant} />;
            })}
        </Slider>
      </div>
      <button
        onClick={(_e) => router.push("/restaurants")}
        className={styles.carousel_container_button}
      >
        Explore more
      </button>
    </div>
  );
};
