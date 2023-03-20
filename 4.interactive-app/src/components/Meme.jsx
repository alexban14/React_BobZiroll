import memesData from '../memesData';
import React from 'react';

export default function Meme() {
	const [meme, changeMeme] = React.useState({
		topText: '',
		bottomText: '',
		memePic: '../images/memeimg.png'
	});

	const [allMemeImages, changeMemes] = React.useState(memesData);

	const [memeForm, changeMemeForm] = React.useState({
		topText: "",
		bottomText: ""
	});
 
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

	function handleChange(event) {
		const { name, value } = event.target;
		changeMemeForm( (prevFormData) => {
			return {
				...prevFormData,
				[name]: value
			}
		});
	}

	// let topTextMeme;
	// let bottomTextMeme;
	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	console.log("top text: ",memeForm.topText, "bottom text: ",memeForm.bottomText);
	// 	topTextMeme = memeForm.topText;
	// 	bottomTextMeme = memeForm.bottomText;
	// }

	return (
		<main>
			<form className="meme-form" /*onSubmit={handleSubmit} */>
				<input 
					type="text"
					placeholder="Top text"
					className="meme-input"
					onChange={handleChange}
					name="topText"
					value={memeForm.topText}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="meme-input"
					onChange={handleChange}
					name="bottomText"
					value={memeForm.bottomText}
				/>
				{/* react event listener */}
				<button onClick={newMemeImage} className="meme-button">Get new meme image</button>
			</form>
			<div className="meme">
				<img src={meme.memePic} alt="a random meme" className="meme-image"></img>
				<h2 className='meme-text top'>{memeForm.topText}</h2>
				<h2 className='meme-text bottom'>{memeForm.bottomText}</h2>
			</div>
		</main>
	);
}