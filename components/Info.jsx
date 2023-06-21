import vish from "/vish.jpg"
import email from "/email.png"
import linkedin from "/linkedin.png"

export default function Info() {
    return (
        <>
            <img className="profile-pic" src={vish} alt="Vish Singh" />
            <div className="info-container">
                <h1>Vish Singh</h1>
                <p className="role">Web Developer</p>
                <a className="portfolio-link" target="blank" href="https://vish213-portfolio-v3.netlify.app/">
                    <p className="portfolio">Portfolio</p>
                </a>
                <div className="buttons">
                    <a href="mailto:vishalicious213@gmail.com">
                        <button className="em-btn"><img src={email}/>Email</button>
                    </a>
                    <a target="blank" href="https://www.linkedin.com/in/vish213/">
                        <button className="li-btn"><img src={linkedin}/>LinkedIn</button>
                    </a>
                </div>
            </div>
        </>
    )
}