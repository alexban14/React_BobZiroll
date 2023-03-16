import swimmer from "../images/image 12.png";
import star from "../images/Star 1.png";

export default function Card() {
	<div className="card">
		<img src={swimmer} alt="swimmer" />
		<div className="card-stats">
			<img src={star} alt="star rating" />
			<span>5.0</span>
			<span>(6) * </span>
			<span>USA</span>
		</div>
		<p>Life lessons with Katie Zaferes</p>
		<p>From $136 / person</p>
	</div>
}