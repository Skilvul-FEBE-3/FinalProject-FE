import { ADD_TOKEN, ADD_ME, LOGOUT } from '../action/authAction';

const initialState = {
  token: '',
  me: null,
  isAuthenticated: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN:
      console.log(action.payload);
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        isAuthenticate: true
      };
    case ADD_ME:
      const id = action.payload.id;
      const name = action.payload.name;
      const email = action.payload.email;
      const role = action.payload.role;
      localStorage.setItem('me', JSON.stringify(action.payload.data))
      return {
        me: { id, name, email, role },
      };
    case LOGOUT:
      localStorage.clear()
      return {
        ...state,
        isAuthenticate: false,
        user: action.payload.user
      }
    default:
      return state;
  }
}

export default authReducer;
