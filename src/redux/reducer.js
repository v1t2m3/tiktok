const initState = {
	login: false
};
const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				login: !state.login
			};
		default:
			return state;
	}
};
export default rootReducer;
