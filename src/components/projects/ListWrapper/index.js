import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
const cx = classnames.bind(styles)
const ListWrapper = ({children}) => (
  <div className={cx('list-wrapper')}>
    {children}
  </div>
);

export default ListWrapper
