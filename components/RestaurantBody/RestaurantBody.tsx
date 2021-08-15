import Image from "next/image";
import food from "../../public/food.png";
import restaurantLogo from "../../public/restaurant.png";
import { Restaurant } from "../../lib/models/Restaurant";
// import { setDetail } from '../../../redux/action/restaurantActionCreators'

import styles from "../../styles/RestaurantBody.module.scss";

type Props = {
  restaurant: Restaurant;
  key: number;
};

export const RestaurantBody = (props: Props) => {
  const imageUrl = props.restaurant.featured_image;
  console.log("location", props.restaurant.location);
  console.log("image", imageUrl);
  console.log("restaurant", props.restaurant);
  return (
    <div
      onClick={(e) => {
        // dispatch(setDetail(props.restaurant))
        // navigate(`/restaurants/detail?id=${props.restaurant.id}`)
      }}
      className={styles.body}
    >
      <div className={styles.body_food}>
        <Image alt="image of food" src={food} />
      </div>
      <div className={styles.body_info}>
        <div className={styles.body_info_restaurantLogo}>
          <Image alt="restaurant logo" src={restaurantLogo} />
        </div>
        <p className={styles.body_info_restaurantName}>
          {props.restaurant.name}
        </p>
        <div className={styles.body_info_bottom}>
          <p className={styles.body_info_bottom_currency}>
            {props.restaurant.currency}
          </p>
          <span className={styles.body_info_bottom_divider}> - </span>
          <p className={styles.body_info_bottom_location}>
            {props.restaurant.location?.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBody;
