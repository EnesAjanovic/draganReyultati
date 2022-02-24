import classes from "../pages/DisplayItem.module.css";

const MatchPreview = ({match}) => <div className={classes.info}>
    <div className={classes.time}>
        <p>
            {match.matchStart}
        </p>
    </div>

    <div className={classes.team}>
        <p>{match.homeTeam}</p>
        <p>{match.awayTeam}</p>
    </div>

    <div className={classes.score}>
        <p>{match.homeScore}</p>
        <p>{match.awayScore}</p>
    </div>

</div>

export default MatchPreview