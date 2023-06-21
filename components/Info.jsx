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
                <p className="portfolio">Portfolio</p>
                <div className="buttons">
                    <button className="em-btn"><img src={email}/>Email</button>
                    <button className="li-btn"><img src={linkedin}/>LinkedIn</button>
                </div>
            </div>
        </>
    )
}