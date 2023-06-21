import vish from "/vish.jpg"

export default function Info() {
    return (
        <>
            <img src={vish} alt="Vish Singh" />
            <h1>Vish Singh</h1>
            <p>Web Developer</p>
            <p>Portfolio</p>
            <div>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </>
    )
}