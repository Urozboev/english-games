import "video-react/dist/video-react.css";
import { useParams } from 'react-router-dom'
import { BigPlayButton, ControlBar, ForwardControl, LoadingSpinner, PlaybackRateMenuButton, Player, ReplayControl, VolumeMenuButton } from 'video-react'
import "./style.css"
import { Data1 } from "../../utils/Data";

function ContentVideo() {
    const params = useParams()
    return (
        <section className="videos">
            <div className="videos-container">
                <iframe
                    width="800"
                    height="450"
                    src="https://www.youtube-nocookie.com/embed/SMdNBKp4m6A?si=VxQ0s3yaxUgS0TP5"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
                {/* <Player
                    autoPlay={false}
                    playsInline
                    aspectRatio="16:9"
                    poster={Data1[params.contentName]?.poster}
                    src={Data1[params.contentName]?.videoLink}
                    style={{ boxShadow: "0 0 40px #000" }}
                >
                    <LoadingSpinner />
                    <BigPlayButton position="center" />
                    <ControlBar autoHide={true}>
                        <ReplayControl seconds={10} order={2.1} />
                        <ForwardControl seconds={10} order={3.1} />
                        <VolumeMenuButton />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={6.1} />
                    </ControlBar>
                </Player> */}
            </div>
        </section>
    )
}

export default ContentVideo
