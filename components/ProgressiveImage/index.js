import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { useProgressiveImage } from 'hooks'
import styles from './ProgressiveImage.module.css'

const ProgressiveImage = ({ src, ratio }) => {
  const loadedSrc = useProgressiveImage(src)
  const width = '100%'
  const height = `${100 / ratio}%`
  const style = {
    width,
    paddingTop: height,
    background: `url(${loadedSrc}) no-repeat center center / cover `,
    backgroundSize: 'cover'
  }

  return (
    <div className={styles.wrapper} style={style}>
      {!loadedSrc && <Skeleton width='100%' height='100%' />}
    </div>
  )
}

export default ProgressiveImage
