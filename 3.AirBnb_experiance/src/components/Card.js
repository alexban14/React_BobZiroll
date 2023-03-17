export default function Card(props) {
	const { img, rating, reviewCount, country, title, price, openSpots, location } = props.instructor;
	let badgeText;
	if (openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if ( location === 'online' ) {
		badgeText = 'ONLINE';
	}

	return (
		<div className="card">
			{/* conditional rendering */}
			{ badgeText && <div className="card-badge">{badgeText}</div> }

			<img src={`../images/${img}`} alt="swimmer" className="card-img" />
			<div className="card-stats">
				<img src="../images/star 1.png" alt="star rating" className="card-star" />
				<span>{rating}</span>
				<span className="grey">({reviewCount}) * </span>
				<span className="grey">{country}</span>
			</div>
			<p className="card-title">{title}</p>
			<p><span className="bold">${price}</span> / person</p>
		</div>
	);
}