import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import * as styles from "./Rating.module.scss"

const Rating = ({rating}) => {
  const fullStars = parseInt(rating);
  const emptyStars = 5 - rating;
  return (
  <div className={styles['rating-container']}>
    {Array.from(Array(fullStars)).map((_,index) => <FaStar key={index} className={styles.star}/>)}
    {fullStars < 5 && Array.from(Array(emptyStars)).map((_,index) => <FaRegStar className={styles.star} key={index}/>)}
  </div>)
}

export default Rating;