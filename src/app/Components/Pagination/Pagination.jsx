import React from 'react';
import { DOTS, usePagination } from '@/app/Hooks/usePagination';
import * as styles from './Pagination.module.scss';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={styles['pagination-container']} >
      <li className={`${styles['pagination-item']} ${currentPage === 1 ? styles.disabled : ''}`} onClick={onPrevious}>
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber} className={`${styles['pagination-item']} ${styles.dots}`}>&#8230;</li>;
        }

        return (
          <li
          className={`${styles['pagination-item']} ${currentPage === pageNumber ? styles.selected : ''}`}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li 
        className={`${styles['pagination-item']} ${currentPage === lastPage ? styles.disabled : ''}`} 
        onClick={onNext}
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
