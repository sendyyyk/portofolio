const HeroVideo = (props) => {
    const { src } = props;
    return (
        <>
            <div className='hero-vid-phn h-full absolute right-0 rounded-3xl overflow-hidden' style={{ width: "25%", marginRight: "1%"}}>
                <video className="w-full h-full object-cover" loop autoPlay muted >
                    <source src="img-vid/video/hero-video/video1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='hero-vid-lap h-5/6 absolute left-0 rounded-xl overflow-hidden' style={{ width: "69%", marginLeft: "2%"}}>
                <video className="w-full h-full object-cover" loop autoPlay muted >
                    <source src="img-vid/video/hero-video/video1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='hero-vid-tab absolute overflow-hidden z-10' style={{ width: "37.5%", height: "53%", left: "45.2%", bottom: "3.5%"}}>
                <video className="w-full h-full object-cover" loop autoPlay muted >
                    <source src="img-vid/video/hero-video/video1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='hero-vid-wat absolute rounded-lg overflow-hidden z-10' style={{ width: "10.5%", height: "22.5%", left: "30.5%", bottom: "10%"}}>
                <video className="w-full h-full object-cover" loop autoPlay muted >
                    <source src="img-vid/video/hero-video/video1.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default HeroVideo;