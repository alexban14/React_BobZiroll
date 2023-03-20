import React from 'react';

export default function Meme() {
	
	const [meme, changeMeme] = React.useState({
		topText: '',
		bottomText: '',
		memePic: '../images/memeimg.png'
	});

	const [allMemeImages, changeMemes] = React.useState([]);
	React.useEffect( () => {
		fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => changeMemes(data.data.memes))
	}, []);

	const [memeForm, changeMemeForm] = React.useState({
		topText: "",
		bottomText: ""
	});
 
	function newMemeImage() {
		const rand = Math.floor(Math.random() * allMemeImages.length);
		const url = allMemeImages[rand].url;
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

	return (
		<main>
			<div className="meme-form" /*onSubmit={handleSubmit} */>
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
			</div>
			<div className="meme">
				<img src={meme.memePic} alt="a random meme" className="meme-image"></img>
				<h2 className='meme-text top'>{memeForm.topText}</h2>
				<h2 className='meme-text bottom'>{memeForm.bottomText}</h2>
			</div>
		</main>
	);
}