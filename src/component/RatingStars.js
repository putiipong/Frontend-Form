import Star from "../icons/star.svg";
import StarFull from "../icons/starFull.svg";

export function RatingStars(prop) {
  const starIcon = <img src={Star} alt="star" width="12px" height="12px" />;
  const starfull = <img src={StarFull} alt="star" width="12px" height="12px" />;
  const array = [starIcon, starIcon, starIcon, starIcon, starIcon];
  return array.fill(starfull, 0, prop.rating);
}
