export const ADD_ME = 'ADD_ME';
export const ADD_TOKEN = 'ADD_TOKEN';
export const LOGOUT = 'LOGOUT';

export function addToken(token) {
  return {
    type: ADD_TOKEN,
    payload: token,
  };
}

export function addMe(me) {
  return {
    type: ADD_ME,
    payload: me
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

