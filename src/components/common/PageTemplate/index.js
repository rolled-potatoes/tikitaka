
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'

const cx = classNames.bind(styles)

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <main>
      {children}
    </main>
  </div>
);

export default PageTemplate
