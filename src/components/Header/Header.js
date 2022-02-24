import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
    </div>
  )
}

export default Header