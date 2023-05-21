'use client'
import '../globals.css';
import React from 'react'
export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)

        const memeImage = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeImage
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Insert top text"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Insert bottom text"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <button
                    type="button"
                    className="form--button"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <div className="imageCenter"><img src={meme.randomImage} className="meme--image" /></div>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}