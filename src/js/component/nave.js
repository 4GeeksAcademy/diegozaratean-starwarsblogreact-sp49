import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = (props) => {

	const { store, actions } = useContext(Context);

	return (
		<div className="card mx-3" style={{width: "18rem"}}>
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
                <h5 className="card-title">{props.model}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <Link className="btn btn-primary" to={"/nave_info/" + props.uid }>
                    <span>Ver mas</span>
                </Link>
				<button onClick={()=>actions.changeMessage(props.name)}>Cambiar texto</button>
			</div>
		</div>
	);
};
