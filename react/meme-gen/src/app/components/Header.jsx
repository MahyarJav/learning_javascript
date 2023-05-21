import '../../../public/troll-face.png';
import '../globals.css'
export default function Header() {
    return (
        <header className="header">
            <img src="troll-face.png" className="header--img" alt="troll meme face" />
            <h1 className="header--title">Meme Generator</h1>
            <p className="header--project">React course - Project 3</p>
        </header >
    )
}