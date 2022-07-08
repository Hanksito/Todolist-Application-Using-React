import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const[history,setHistory]=useState([])
	const deleteItem =()=>{
		let borrar = document.querySelectorAll(".btn-close");
		
		for (let x of borrar) {
		  x.addEventListener("click", function (e) { 
			let item = e.target.parentElement; 
		   
			let item2 = item.parentElement;  
			
			//child[5].removeChild(item2);
			item2.style.display = "none"; })
			 }
	  
	  }
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
				{ history.map( h => {return<li class="list-group-item" ><button type="button" class="btn-close" aria-label="Close" onClick={deleteItem}></button> {h}</li> })}
				
			</ul>

		</div>
	);
};


export default Home;
