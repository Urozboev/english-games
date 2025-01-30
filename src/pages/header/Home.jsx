
import { Link } from "react-router-dom"
import "./style.css"

function Home() {
    return (
        <header className="header">
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-12 col-xl-6 offset-md-3">
                        <div className="board">
                            <h1 className="title">English dictionary</h1>
                            <div className="paragraphs">
                                <Link to="/games/seasons" className="category">
                                    Seasons
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Animals
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Family and Friends
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Fairy tales
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Weather
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Plants and Natures
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Transportation
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Holidays and Celebration
                                </Link>
                                <Link to="/games/seasons" className="category">
                                    Insects
                                </Link>
                                <Link to="/games/seasons" className="category">
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
