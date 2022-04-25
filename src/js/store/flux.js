import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://swapi.dev/api",
			people: [],
			vehicles: [],
			starships: [],
			favorites: []
		},
		actions: {
			peopleInfo: () => {
				const characterEndPoint = getStore().apiURL + "/people/";
				fetch(characterEndPoint)
					.then(response => response.json())
					.then(data => {
						setStore({
							people: data.results
						});
					})
					.then(() => console.log(getStore().people));
			},
			vehiclesInfo: () => {
				const vehicleEndPoint = getStore().apiURL + "/vehicles/";
				fetch(vehicleEndPoint)
					.then(response => response.json())
					.then(data => {
						setStore({
							vehicles: data.results
						});
					})
					.then(() => console.log(getStore().vehicles));
			},
			starshipsInfo: () => {
				const starshipsEndPoint = getStore().apiURL + "/starships/";
				fetch(starshipsEndPoint)
					.then(response => response.json())
					.then(data => {
						setStore({
							starships: data.results
						});
					})
					.then(() => console.log(getStore().starships));
			},
			favoritesInfo: item => {
				let myFavorites = getStore().favorites;
				let selected = myFavorites.find(element => element === item);
				if (selected) {
					myFavorites = myFavorites.filter(element => item !== element);
					setStore({ favorites: myFavorites });
				} else {
					myFavorites = [...myFavorites, item];
					setStore({ favorites: myFavorites });
				}
			}
		}
	};
};

export default getState;

// // Use getActions to call a function within a fuction
// exampleFunction: () => {
// 	getActions().changeColor(0, "green");
// },
// loadSomeData: () => {
// 	/**
// 		fetch().then().then(data => setStore({ "foo": data.bar }))
// 	*/
// },
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.demo.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// reset the global store
// setStore({ demo: demo });
