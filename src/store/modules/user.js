// const user = {
// 	state: {
// 		name: '',
// 		token: ''
// 	},
// 	mutations: {
// 		SET_NAME: (state, name) => {
// 			state.name = name;
// 		},
// 		SET_TOKEM: (state, token) => {
// 			state.token = token;
// 		}
// 	},
// 	action: {
// 		Login({commit},userInfo) {
// 			const name = userInfo.name.trim();
// 			const password = userInfo.password.trim();
// 			return new Promise((resolve, reject) => {
// 				axios.post('/').then((response) => {
// 					const data = response.data;
// 					commit('SET_NAME', data.name);
// 					commit('SET_TOKEM', data.token);
// 				}).catch((error) => {

// 				})
// 			})
// 		}
// 	},
// 	getter: {
// 		name:state => state.user.name
// 	}
// }
