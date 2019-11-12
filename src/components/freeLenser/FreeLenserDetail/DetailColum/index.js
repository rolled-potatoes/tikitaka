
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {format} from 'lib/functions.js'
const cx = classnames.bind(styles)

const DetailColum = ({ list ,visible}) => {
  let List = list == null ?<div></div>:list.map(item => {
    const { getDate, things } = item;
    return (
      <div className={cx('Detail-colum-wrapper',visible)}>
        <div className={cx('date')}>{format(new Date(getDate))}</div>
        <div className={cx('content')}>{things}</div>
      </div>
    )
  })
  return (
    List
  )
}

export default DetailColum
