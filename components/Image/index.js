import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import classnames from 'classnames'

import styles from './Image.module.css'

const Image = props => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef()
  const handleLoaded = () => {
    if (!loaded) {
      setLoaded(true)
    }
  }

  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete) {
      handleLoaded()
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      {!loaded && <Skeleton className={props.className} />}
      <img
        {...props}
        className={classnames('fade-in', ...props.className)}
        onLoad={handleLoaded}
        ref={imgRef}
        style={loaded ? {} : { display: 'none' }}
      />
    </div>
  )
}

export default Image
