const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			naves:[],
			message: 'incializada desde flux',
			naves_clickeadas: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeMessage: (nombreNave) => {
				console.log('changeMessage' + nombreNave)
				
				setStore({ message: nombreNave });
				const store = getStore();
				if( store.naves_clickeadas.includes(nombreNave) ){
					console.log('Ya esta en la lista')
					// eliminar el elemento
					setStore({ naves_clickeadas: store.naves_clickeadas.filter( (repetido)=> repetido != nombreNave )});
				}else {
					console.log('No esta en la lista')
					setStore({ naves_clickeadas: [...store.naves_clickeadas , nombreNave  ]});
				}

				
				
				console.log(store.naves_clickeadas)

				

			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('se cargo desde flux')
				fetch('https://swapi.dev/api/starships')
				.then( (response)=> response.json())
				.then( (data)=> setStore({ naves: data.results }))
				//.then( (data)=> console.log(data.results))
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
