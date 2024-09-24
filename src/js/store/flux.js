const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			updateContact: {},
			
		},
		actions: {
			
			getAllContacts: () => {
				const store = getStore();
				fetch('https://playground.4geeks.com/contact/agendas/AngeRenf/contacts')
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
		
				.then(responseAsJson => {
					setStore({contacts: responseAsJson.contacts})
					
								
				})
		
				.catch(error => {
					console.log('Looks like there was a problem: \n', error);
				});
			},

			updateContact: (newName, newPhone, newEmail,newAddress, id) =>{
				const store = getStore();
				var updatedContactInfo = 
				{
				   "name": newName,
				   "phone": newPhone,
				   "email": newEmail,
				   "address": newAddress,
				   "id" : id
				 };
				 

					fetch(`https://playground.4geeks.com/contact/agendas/AngeRenf/contacts/${id}`, {
					method: 'PUT', 
					body: JSON.stringify(updatedContactInfo), // data can be a 'string' or an {object} which comes from somewhere further above in our application
					headers: {
						'Content-Type': 'application/json'
					}
					})

					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => console.log('Success:', response))
					.catch(error => console.error(error));			
								
		   },


		   deleteContact: (id) => {

			fetch(`https://playground.4geeks.com/contact/agendas/AngeRenf/contacts/${id}`, {
				method: 'DELETE', 
				headers: {
					'Content-Type': 'application/json'
				}
				})

				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => console.log('Success:', response))
				.catch(error => console.error(error));	
		
		},


			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
