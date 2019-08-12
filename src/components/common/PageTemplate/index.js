
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
const cx = classNames.bind(styles)

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <Header/>
    <main className='main'>
      {children}
    </main>
    <Footer/>
  </div>
);

export default PageTemplate
