import fb from "../public/fb.png"
import gh from "../public/gh.png"
import ig from "../public/ig.png"
import tw from "../public/tw.png"

export default function Footer() {
    return (
        <footer>
            <img className="icon" src={tw} alt="Twitter icon" />
            <img className="icon" src={fb} alt="Facebook icon" />
            <img className="icon" src={ig} alt="Instagram icon" />
            <img className="icon" src={gh} alt="GitHub icon" />
        </footer>
    )
}