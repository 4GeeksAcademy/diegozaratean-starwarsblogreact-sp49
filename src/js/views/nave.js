import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    const [starship, setStarship] = useState({})

    useEffect( ()=>{
        console.log('se cargo vista de nave')
        fetch('https://www.swapi.tech/api/starships/' + params.nave_id)
        .then( (response)=> response.json())
        .then( (data)=> setStarship(data.result.properties))

    },[])

	console.log(params)
	return (
		<div className="jumbotron">
			<h1 className="display-4">Nave This will show the demo element: {params.nave_id}</h1>

			<hr className="my-4" />

            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            
            <p>manufacturer: {starship.manufacturer}</p>


			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Nave.propTypes = {
	match: PropTypes.object
};
