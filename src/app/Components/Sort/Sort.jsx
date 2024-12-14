import * as styles from './Sort.module.scss';

const Sort = ({sortJokes}) => {
  return (
    <div className={styles['sort-container']}>
      <label>Sort by: </label>
      <select onChange={sortJokes}>
        <option value="random">Random</option>
        <option value="type">Type</option>
        <option value="id">Id</option>
      </select>
    </div>
  )
}

export default Sort;