
import React, { Fragment } from 'react'
import styles from './styles.scss'
import Button from '../../common/Button'
import DetailColum from 'components/freeLenser/FreeLenserDetail/DetailColum'
import DetailRow from 'components/freeLenser/FreeLenserDetail/DetailRow'
import classnames from 'classnames'

const cx = classnames.bind(styles)

const mypageContent = ({
  onClickMenuitem,
  visibles,
  categoryList,
  educationList,
  careeList,
  licenseList
}) => (
    <Fragment>
      <div className={cx('FreeLenserDetail-info')}>
        <div className={cx('FreeLenserDetail-menu')}>
          <Button id='1' onClick={onClickMenuitem} theme={`isOn-${visibles[0]}`}>보유기술</Button>
          <Button id='2' onClick={onClickMenuitem} theme={`isOn-${visibles[1]}`}>자격증</Button>
          <Button id='3' onClick={onClickMenuitem} theme={`isOn-${visibles[2]}`}>학력</Button>
          <Button id='4' onClick={onClickMenuitem} theme={`isOn-${visibles[3]}`}>경력</Button>
        </div>
        <div className={cx('FreeLenserDetail-content')}>
          <DetailRow data={categoryList} visible={`visible-${visibles[0]}`} />
          <DetailRow data={licenseList} visible={`visible-${visibles[1]}`} />
          <DetailColum list={careeList} visible={`visible-${visibles[2]}`} />
          <DetailColum list={educationList} visible={`visible-${visibles[3]}`} />
        </div>
      </div>
    </Fragment>
  );

export default mypageContent
