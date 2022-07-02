const initState = {
	login: false
};
const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				login: action.payload
			};
		default:
			return state;
	}
};
export default rootReducer;
