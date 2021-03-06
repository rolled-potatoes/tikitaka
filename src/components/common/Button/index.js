
import React from 'react'
import styles from './styles.scss'
import {Link} from 'react-router-dom'
import className from 'classnames'

const cx = className.bind(styles)
const Div =({children,...rest}) =><div {...rest}>{children}</div>

const Button = ({children,to, onClick, theme='default',id}) =>{
  const Element = (to )? Link :Div
  return(
    <Element
      to={to}
      id={id}
      className = {cx('button',theme)}
      onClick =  {onClick}
      >
      {children}
    </Element>

  )
}

export default Button
