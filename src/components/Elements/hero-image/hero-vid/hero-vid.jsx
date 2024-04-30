const HeroVideo = (props) => {
    const { src } = props;
    return (
        <>
            <div className='hero-vid-phn w-2/4 h-full absolute right-0 bg-blue-300 rounded-3xl overflow-hidden' style={{ width: "25%", marginRight: "1%"}}>
                <video className="w-full h-full object-cover" loop autoPlay muted >
                    <source src="img-vid/video/hero-video/video1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='hero-vid-lap w-5/6 h-5/6 absolute left-0 secondary-color-bg rounded-xl overflow-hidden' style={{ width: "69%", marginLeft: "2%"}}>
                <video className="w-full h-full object-cover" loop autoPlay muted >
                    <source src="img-vid/video/hero-video/video1.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default HeroVideo;