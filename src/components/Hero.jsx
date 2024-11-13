import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/photo-CV.jpg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Baptiste 👋</h1>
                <p>
                Je suis un développeur Web.  Je me spécialise dans la création (et parfois la conception) de sites Web.   </p>
                <div className="social-icons">
                
                    <a
                        href="https://github.com/GallegoB"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/baptiste-gallego/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;