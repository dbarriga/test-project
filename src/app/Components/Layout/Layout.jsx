'use client';
import React from 'react';
import List from "../List/List";
import Pagination from '../Pagination/Pagination';
import Sort from '../Sort/Sort';
import * as styles from './Layout.module.scss';
import { removeJokeById } from '../../../../api/getJokes';

const Layout = ({jokes}) => {
  const [sortedJokes, setSortedJokes] = React.useState(jokes);
  const PageSize = 24;
  const [currentPage, setCurrentPage] = React.useState(1);

  const itemsToShow = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return sortedJokes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sortedJokes]);

  const sortJokes = ({target}) => {
    switch (target.value) {
      case 'type':
        setSortedJokes(data => {
          const dataTosort = [...data];
          dataTosort.sort((a,b) => a.type.localeCompare(b.type))
          return dataTosort;
        });
        break;
      case 'id':
        setSortedJokes(data => {
          const dataTosort = [...data];
          dataTosort.sort((a,b) => a.id - b.id);
          return dataTosort;
        });
        break;
      default:
        setSortedJokes(jokes);
    }
  }

  const removeJoke = (joke) => {
    const newJokes = removeJokeById(joke, sortedJokes);
    setSortedJokes([...newJokes]);
  }

  return (
    <div className={styles.layout}>
      <div className={styles.sort}>
        <Sort sortJokes={sortJokes}/>
      </div>
      <List jokes={itemsToShow} removeJoke={removeJoke}/>
      <Pagination
        currentPage={currentPage}
        totalCount={jokes.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

export default Layout;