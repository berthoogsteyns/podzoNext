import { Restaurant } from "./models/Restaurant";
import { Location } from "./models/Location";

export const parseToRestaurant = (toParse: any): Restaurant => {
  let restaurant: Restaurant = {
    id: toParse.id,
    name: toParse.name,
    url: toParse.url,
    location: toParse.location as Location,
    currency: toParse.currency,
    online_delivery: toParse.has_online_delivery,
    table_booking: toParse.has_table_booking,
    cuisines: toParse.cuisines,
    price_range: toParse.price_range,
    phone_numbers: toParse.phone_numbers,
    all_reviews: toParse.all_reviews,
    featured_image: toParse.featured_image,
  };
  return restaurant;
};
export const parseToRestaurants = (json: any): Restaurant[] => {
  const restaurants = json.map((r: any) => parseToRestaurant(r.restaurant));
  return restaurants;
};
