// const h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// h1.className = "header";
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>;
// ReactDom.render(element, document.getElementById("root"));


// JSX

// you need to make sure that you return only one parent element

const page = (
	<div>
		<h1 className="header">This is JSX</h1>
		<p>This is a paragraph</p>
	</div>
);

ReactDom.render(
	page,
	document.getElementById("root")
);

const navbar = (
	<nav>
		<h1>Alex's Bistro</h1>
		<ul>
			<li>Menu</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

ReactDOM.render(navbar, document.getElementById("root"));