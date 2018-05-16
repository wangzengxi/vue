const user = {
	state: {
		name: '',
		token: ''
	},
	mutations: {
		SET_NAME: (state, name) => {
			state.name = name;
		},
		SET_TOKEM: (state, token) => {
			state.token = token;
		}
	},
	action: {
		Login({commit}, userInfo) {
			// const username = userInfo.username;
			// const password = userInfo.password;
			console.log(userInfo)
			return new Promise((resolve, reject) => {
				axios.post('/login').then((response) => {
					console.log(response)
					// const data = response.data;
					// commit('SET_NAME', data.name);
					// commit('SET_TOKEM', data.token);
				}).catch((error) => {
					console.log(error)
				})
			})
		}
	},
	getter: {
		name:state => state.user.name
	}
}
