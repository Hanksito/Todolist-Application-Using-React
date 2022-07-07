import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const[history,setHistory]=useState([])
	return (
		<div className="container text-center">
			<h1 className="fw-lighter">Todos</h1>
			<input type="text" placeholder=" Introduce tu texto aqui" onKeyDown={
				(e) => {
					if(e.key === 'Enter'){
					
					setHistory([...history,e.target.value])}
				}
			}/>
			<ul class="list-group">
				{history.map( h =>{return<li class="list-group-item">{h}<span><i class="fa fa-trash"></i></span></li>})}
				
			</ul>

		</div>
	);
};


export default Home;
