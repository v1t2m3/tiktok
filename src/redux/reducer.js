const initState = {
	login: false
};
const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'loginTiktok':
			return {
				login: !state.login
			};
		default:
			return state;
	}
};
export default rootReducer;
