
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const cx = classnames.bind(styles)

const DetailRow = ({ data }) => {
  let temp = data.map(cat => {
    return (
      <div className={cx('item')}>
        {cat}
      </div>
    )
  })
  return (
    <div className={cx('row-wrapper')}>
      {temp}
    </div>
  )
}

export default DetailRow
