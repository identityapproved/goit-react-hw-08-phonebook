export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsCurrent = state => state.auth.isCurrent;

export const getUserName = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getError = state => state.contacts.error;
