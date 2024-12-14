import React from 'react';
import ListItem from "../ListItem/ListItem";
import * as styles from './List.module.scss';

const List = ({jokes, removeJoke}) => {
  return (
    <div className={styles['list-container']}>
      {jokes.map(joke => <ListItem key={joke.id} joke={joke} removeJoke={removeJoke}/>)}
    </div>
  )
}

export default List;