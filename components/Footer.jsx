import fb from "../public/fb.png"
import gh from "../public/gh.png"
import ig from "../public/ig.png"
import tw from "../public/tw.png"

export default function Footer() {
    return (
        <footer>
            <a target="blank" href="https://twitter.com/vishalicious213">
                <img className="icon" src={tw} alt="Twitter icon" />
            </a>
            <a target="blank" href="https://www.facebook.com/vish213/">
                <img className="icon" src={fb} alt="Facebook icon" />
            </a>
            <a target="blank" href="https://www.instagram.com/vishalicious213/">
                <img className="icon" src={ig} alt="Instagram icon" />
            </a>
            <a target="blank" href="https://github.com/vishalicious213">
                <img className="icon" src={gh} alt="GitHub icon" />
            </a>
        </footer>
    )
}