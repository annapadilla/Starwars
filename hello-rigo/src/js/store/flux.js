const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorite: [],
			elementId: []
		},

		actions: {
			getCharacters: () => {
				fetch("https://swapi.co/api/people/")
					.then(response => response.json())
					.then(data => {
						this.setStore(characters);
					})
					.catch(err => console.log(error));
				//here you fetch the characters and put them into store
			},
			getPlanets: () => {
				fetch("https://swapi.co/api/planets/")
					.then(response => response.json())
					.then(data => {
						this.setStore(planets);
					})
					.catch(err => console.log(error));
				//here you fetch the planets and put them in to store
			},
			markAsFavorite: name => {
				//here you add the character or planet to favorite list
				console.log("Name: ", name);
				const store = getStore();
				setStore({ favorite: store.favorite.concat(name) });
			},
			removeFavorites: name => {
				console.log("X", name);
				const store = getStore();
				debugger;
				setStore({ favorite: store.favorite.filter(favorite => favorite !== name) });
			}
			//here you remove character or planet to favoritre list
		}
	};
};
export default getState;
