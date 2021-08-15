import * as React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import RestaurantBody from "../../components/RestaurantBody/RestaurantBody";
import { useGetRestaurants } from "../../lib/swr/restaurants";
// import { RestaurantBody } from "../../views/RestaurantBody/RestaurantBody";

import styles from "../../styles/RestaurantList.module.scss";

export const RestaurantList = () => {
  const [filter, setFilter] = useState("");
  const [start, setStart] = useState(0);
  const { data, isLoading } = useGetRestaurants({});

  //   useEffect(() => {
  //     dispatch(searchRestaurant(searchParam, start));
  //   }, [searchParam, start]);

  const searchHeaderTitle = isLoading
    ? "searching..."
    : `${data?.results_found} restaurants found `;

  const handleChange = (toFilter: string) => {
    setFilter(toFilter);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // navigate(`/restaurants?search=${filter}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_search}>
        <h1 className={styles.container_search_header}>{searchHeaderTitle}</h1>
        <form
          className={styles.container_search_searchBox}
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            className={styles.container_search_searchBox_input}
            value={filter}
            type="input"
            placeholder="Search restaurants"
            onChange={(e) => handleChange(e.target.value)}
          />
          <BsSearch className={styles.container_search_searchBox_icon} />
        </form>
      </div>
      <div className={styles.container_restaurants}>
        <h2 className={styles.container_restaurants_header}>Our restaurants</h2>
        <div className={styles.container_restaurants_container}>
          {isLoading ? (
            <BeatLoader size={25} color={"#ff6000"} />
          ) : (
            data?.restaurants.map((r, i) => (
              <RestaurantBody key={i} restaurant={r.restaurant} />
            ))
          )}
          {/* //  */}
        </div>
        <button
          onClick={(e) => {
            setStart(start + 20);

            // dispatch(searchRestaurant(searchParam, start));
          }}
          className={styles.container_restaurants_button}
        >
          show more
        </button>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default RestaurantList;
