const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			showModal: false,
			contactID: 0,
			
		},
		actions: {
			setShowModal: (value) => {setStore({showModal: value})},
			setContactID: (newID) => {setStore({contactID: newID})},
			
			
			makeAgends: () => {
				fetch('https://playground.4geeks.com/contact/agendas/angerenf',{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
		
				.then(responseAsJson => {
					response => console.log('Success:', response);
				
				})
		
				.catch(error => (error => console.error(error)));	 
			},


			getAllContacts: () => {
				const store = getStore();
				const actions = getActions();
				fetch('https://playground.4geeks.com/contact/agendas/angerenf/contacts')
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
					console.log(error.statusText);
					
						actions.makeAgends();
						actions.getAllContacts();
					
				});
			},

			

			updateContact: (newName, newPhone, newEmail,newAddress, id) =>{
				const actions = getActions();

				var updatedContactInfo = 
				{
				   "name": newName,
				   "phone": newPhone,
				   "email": newEmail,
				   "address": newAddress,
				   "id" : id
				 };
				 

					fetch(`https://playground.4geeks.com/contact/agendas/angerenf/contacts/${id}`, {
					method: 'PUT', 
					body: JSON.stringify(updatedContactInfo), // data can be a 'string' or an {object} which comes from somewhere further above in our application
					headers: {
						'Content-Type': 'application/json'
					}
					})

					.then(res => {
						if (!res.ok){ throw Error(res.statusText);}
						actions.getAllContacts();
						return res.json();
					})
					.then(response => console.log('Success:', response))
					.catch(error => console.log("err"+error));			
					
					
		   },

		   addNewContact: (newName, newPhone, newEmail,newAddress) =>{
				
			var newContactInfo = 
			{
			   "name": newName,
			   "phone": newPhone,
			   "email": newEmail,
			   "address": newAddress,
			 };
			 

				fetch(`https://playground.4geeks.com/contact/agendas/angerenf/contacts`, {
				method: 'POST', 
				body: JSON.stringify(newContactInfo), // data can be a 'string' or an {object} which comes from somewhere further above in our application
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
			const store = getStore();
			const actions = getActions();
			
			fetch(`https://playground.4geeks.com/contact/agendas/angerenf/contacts/${id}`, {
				method: 'DELETE', 
				headers: {
					'Content-Type': 'application/json'
				}
				})
				.then(res => {
					if (!res.ok) {throw Error(res.statusText);}
					actions.getAllContacts();
					return res.json();
				})
				.then(response => 
					{
						console.log('Success:', response);
						
					})
				.catch(error => console.log("delete fail" +error))	
			
				
		},

		findContact(id){
			const store = getStore();
			return store.contacts.find((element) => element.id == id);
		}


		}
	};
};

export default getState;
