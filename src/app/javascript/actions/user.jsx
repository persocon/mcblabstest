const setUser = (email, password) => ({
  type: 'SET_USER',
  user_info: {
    email,
    password,
  },
});

export { setUser };
