import classes from './DisplayItem.module.css'
import MatchPreview from "../MatchPreview/MatchPreview";

const DisplayItem = ({item}) => {
    console.log(item)

    return (
        <div className={classes.live}>
            <div className={classes.title}>
                <p>{item.league}</p>
            </div>
            {item.matches.map((match,index) => <MatchPreview match={match} key={index}/>)}
        </div>

    )
}

export default DisplayItem