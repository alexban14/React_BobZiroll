import memesData from '../memesData';
import React from 'react';

export default function Meme() {
	const [meme, changeMeme] = React.useState({
		topText: '',
		bottomText: '',
		memePic: '../images/memeimg.png'
	});

	const [allMemeImages, changeMemes] = React.useState(memesData);
 
	function newMemeImage(props) {
		const memesArray = memesData.data.memes;
		const rand = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[rand].url;
		changeMeme( (oldMeme) => {
			return {
				...oldMeme,
				memePic: url
			};
		});
	}

	return (
		<main>
			<div className="meme-form">
				<input type="text" placeholder="Top text" className="meme-input" />
				<input type="text" placeholder="Bottom text" className="meme-input" />
				{/* react event listener */}
				<button onClick={newMemeImage} className="meme-button">Get new meme image</button>
			</div>
			<img src={meme.memePic} alt="a random meme" className="meme-image"></img>
		</main>
	);
}