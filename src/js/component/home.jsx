import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const[history,setHistory]=useState([])

	return (
		<div className="container text-center shadow p-3 mb-5 bg-body rounded rounded-bottom">
			<h1 className="fw-lighter">Todos</h1>
			<input type="text" placeholder=" Introduce tu texto aqui" onKeyDown={
				(e) => {
					if(e.key === 'Enter'){
					setHistory([...history,e.target.value])}
				}
			}/>
			<ul className="list-group ">
				{ history.map( h => {return<li className="list-group-item" > {h}<button type="button" class="btn-close" aria-label="Close"onClick={
					(e) =>{e.target.parentElement.style.display ="none"}}></button></li> })}
				
			</ul>

		</div>
	);
};


export default Home;
