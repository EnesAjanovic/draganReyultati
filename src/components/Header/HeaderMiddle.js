import React from 'react'
import classes from './HeaderMiddle.module.css'
import SearchModal from '../BootStrap/SearchModal'
import SignInModal from '../BootStrap/SignInModal'

const HeaderMiddle = () => {
  return (
    <div className={classes.wrapper}>
         
            <h3 >FLASHSCORE</h3>

            <div className={classes.order}>
                <SearchModal />
                <SignInModal />
            </div>
          
    </div>
  )
}

export default HeaderMiddle