import React from 'react'
import {useSelector} from 'react-redux'
import DisplayItem from './DisplayItem'
import classes from './Football.module.css'

const Football = () => {
    const category = useSelector(state => state.creator.selectedCategory)
    const matches = useSelector(state => state.creator.matches)
    let matchesLocal = matches;

    const prepareMatches = () => {
        let leagues = matches.map(match => match.league)
        let distinctLeagues = [...new Set(leagues)]
        return distinctLeagues.map(liga => {
            let match = matchesLocal.filter(match => match.league === liga)
            return {
                league: liga,
                matches: match
            }
        })
    }

    let previewData = prepareMatches();


    const filteredMatches = matches.filter(item => item.category === category)
    return (
        <div className={classes.content}>
            {previewData.map((item, index) => <DisplayItem key={index} item={item}/>)}
        </div>
    )
}

export default Football