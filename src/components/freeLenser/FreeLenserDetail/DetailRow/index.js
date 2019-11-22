
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const cx = classnames.bind(styles)

const DetailRow = ({ data ,visible='visible-false' }) => {
  let temp = data==null? <div></div>:data.map(cat => {
    return (
      <div className={cx('item')} title={cat}>
        {cat}
      </div>
    )
  })
  return (
    <div className={cx('row-wrapper',visible)}>
      {temp}
    </div>
  )
}

export default DetailRow
