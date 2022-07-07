import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<h1 className="fw-lighter">Todos</h1>
			<ul class="list-group">
				<li class="list-group-item "><button type="button" class="btn-close" disabled aria-label="Close" onClick={(e) =>{ e.target.remove()}}></button>An active item</li>
				<li class="list-group-item">A second item</li>
				<li class="list-group-item">A third item</li>
				<li class="list-group-item">A fourth item</li>
				<li class="list-group-item">And a fifth one</li>
			</ul>

		</div>
	);
};


export default Home;
