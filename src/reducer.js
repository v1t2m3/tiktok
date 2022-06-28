let initialState = { login: false };
function reducer(state = initialState, action) {
	console.log(action);
	if (action.type === 'LOGIN') {
		return {
			login: true
		};
	}
	if (action.type === 'LOGOUT') {
		return {
			login: false
		};
	}
	return state;
}
export default reducer;
