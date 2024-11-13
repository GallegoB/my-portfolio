import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    Je suis passionné par les nouvelles technologies, récemment diplômé d'un Titre Professionnel de Développeur Web, avec un BTS avec spécialisation en solutions logicielles et applications métiers (SLAM). Après une solide expérience de cinq ans dans le secteur industriel, où il a perfectionné ses compétences en maintenance et résolution de problèmes, il a décidé de se reconvertir dans le développement informatique. Fort de mon expertise en développement backend et frontend, Je maîtrise des technologies telles que JavaScript, PHP, Symfony, et SQL. Autonome, curieux et doté d'un fort esprit d'équipe, Je suis prêt relever de nouveaux défis techniques tout en apportant des solutions innovantes.
                    </p>
                      </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Baptiste and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;