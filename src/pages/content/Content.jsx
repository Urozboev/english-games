import { Link } from "react-router-dom"
import "./style.css"
import { Data } from "../../utils/Data"
import { useEffect, useRef, useState } from "react"

function Content() {
    const [musicName, setMusicName] = useState('')
    const musicEl = useRef()
    function handleMusicPlay(music) {
        setMusicName(music)
    }
    function handleMusicClear() {
        setMusicName('')
    }
    return (
        <section className="videos">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    {
                        Data.map(content => {
                            return <div
                                className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3 p-lg-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                key={content.title}
                            >
                                <Link
                                    onMouseOver={() => handleMusicPlay(content.music)}
                                    onMouseLeave={handleMusicClear}
                                    to={`/contents/${content.routeName}`}
                                    className="content-title"
                                >
                                    <img className="image-fluid w-100" src={content.image} alt={content.title} />
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="videos-monkey--box" data-aos="zoom-in-up">
                <img src="/assets/images/monkey-down-up.png" alt="Monkey down up" className="videos-monkey--image" />
            </div>
        </section>
    )
}

export default Content
