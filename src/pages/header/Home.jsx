
import { Link } from "react-router-dom"
import "./style.css"

function Home() {
    return (
        <header className="header">
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-12 col-xl-6 offset-md-3">
                        <div className="board">
                            <h1 className="title">SkillUp!</h1>
                            <div className="paragraphs">
                                <Link to="/games/seasons" className="category">
                                    Seasons
                                </Link>
                                <Link to="/games/animals" className="category">
                                    Animals
                                </Link>
                                <Link to="/games/familyAndFriends" className="category">
                                    Family and Friends
                                </Link>
                                <Link to="/games/fairyTales" className="category">
                                    Fairy tales
                                </Link>
                                <Link to="/games/weather" className="category">
                                    Weather
                                </Link>
                                <Link to="/games/plantsAndNatures" className="category">
                                    Plants and Natures
                                </Link>
                                <Link to="/games/transportation" className="category">
                                    Transportation
                                </Link>
                                <Link to="/games/holidaysAndCelebration" className="category">
                                    Holidays and Celebration
                                </Link>
                                <Link to="/games/insects" className="category">
                                    Insects
                                </Link>
                                <Link to="/games/artsAndCrafts" className="category">
                                    Arts and Crafts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Home
