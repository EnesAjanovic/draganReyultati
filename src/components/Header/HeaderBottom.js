import React, {useState} from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import {MdSportsSoccer} from 'react-icons/md'
import {FaBasketballBall} from 'react-icons/fa'
import {BiTennisBall} from 'react-icons/bi'
import {MdSportsHandball} from 'react-icons/md'
import classes from './HeaderBottom.module.css'
import { useDispatch } from 'react-redux'
import { getCategory } from '../../features/footballSlice'

const HeaderBottom = () => {

  const [activeCategory,setActiveCategory] = useState('football')

  const dispatch = useDispatch()

  const handleClick = (category) => {
    setActiveCategory(category)
    dispatch(getCategory(category))
  }

  return (
    <div className={classes.wrapper}>
      
      <div className={classes['left-content']}>
        <p className={`${activeCategory === 'favorites' && classes['active'] }`} onClick={() => handleClick('favorites')}><AiTwotoneStar/> FAVORITES</p>
        <p className={`${activeCategory === 'football' && classes['active'] }`} onClick={() => handleClick('football')}><MdSportsSoccer/> FOOTBALL</p>
        <p className={`${activeCategory === 'basketball' && classes['active'] }`} onClick={() => handleClick('basketball')}><FaBasketballBall/> BASKETBALL</p>
        <p className={`${activeCategory === 'tennis' && classes['active'] }`} onClick={() => handleClick('tennis')}><BiTennisBall/> TENNIS</p>
        <p className={`${activeCategory === 'hanball' && classes['active'] }`} onClick={() => handleClick('hanball')}><MdSportsHandball/> HANDBALL</p>
        <p className={`${activeCategory === 'hockey' && classes['active'] }`} onClick={() => handleClick('hockey')}><MdSportsHandball/> HOCKEY</p>
        <p className={`${activeCategory === 'volleyball' && classes['active'] }`} onClick={() => handleClick('volleyball')}><MdSportsHandball/> VOLLEYBALL</p>
      </div>
         
      <div>MORE</div>
    
   </div>
  )
}

export default HeaderBottom