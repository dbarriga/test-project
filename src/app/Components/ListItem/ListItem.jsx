import Rating from '../Rating/Rating';
import { FaTrashAlt } from "react-icons/fa";
import * as styles from './ListItem.module.scss';

const ListItem = ({joke, removeJoke}) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
      <p>Type: {joke.type}</p>
        <p>Id: {joke.id}</p>
      </div>
      <div className={styles['card-body']}>
        <p>Q: {joke.setup}</p>
        <p>R: {joke.punchline}</p>
      </div>
      <div className={styles['card-footer']}>
        <Rating rating={joke.rating} />
        <FaTrashAlt className={styles.trash} onClick={() => removeJoke(joke.id)}/>
      </div>
    </div>
  )

}

export default ListItem;