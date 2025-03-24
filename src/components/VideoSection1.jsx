const VideoSection1 = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            {/* <video 
                className="absolute w-full h-full object-cover z-0"
                autoPlay 
                loop 
                controls
                // muted
            >
                <source src="src/assets/videos/intro 3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <iframe className="absolute w-full h-full object-cover z-0" width="560" height="315" src="https://www.youtube.com/embed/J1TU86aGrcg?si=iOLP7SCbMhIAohX1&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            {/* Animated Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 animate-fade z-10"></div> */}

            {/* Optional: Additional Overlay (If Needed) */}
            {/* <div className="absolute inset-0 bg-black/10 z-20"></div> */}
        </div>
    );
}


export default VideoSection1