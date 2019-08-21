
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import HeaderContainer from 'containers/common/HeaderContainer.js'
import Footer from '../Footer'
const cx = classNames.bind(styles)

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <HeaderContainer/>
    <main className='main'>
      {children}
    </main>
    <Footer/>
  </div>
);

export default PageTemplate
