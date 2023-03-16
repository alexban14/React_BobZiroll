import imgsGroup from "../images/Group 77.png";

export default function Hero() {
	return (
		<section className="hero">
			<img src={imgsGroup} alt="group of images" className="imgsGroup" />
			<h2 className="hero-heading">Online Experiences</h2>
			<p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
		</section>
	)
}