import React, { useEffect, useState, useContext} from "react";
import { Nave } from "../component/nave";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);



	return (
		<div className="text-center mt-5">
			<h1>Home</h1>

			<h1>Desde Flux</h1>
			{store.naves.map( (item, index)=> <Nave key={item.url} uid={item.url} model={item.model} name={item.name} /> )}

		</div>
	);
	
} 