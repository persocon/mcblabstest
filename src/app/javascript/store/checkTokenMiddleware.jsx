import jwt_decode from 'jwt-decode';
const validateToken = store => next => action => {
  const { token }  = store.getState().user;
  let result = next(action)
  if(token){
    const jwt = jwt_decode(token);
    const exp_date = new Date(jwt.exp * 1000).getTime();
    const today = new Date().getTime();
    if(exp_date <= today) {
      console.log(action)
      store.dispatch({type: 'RESET_USER'});
      store.dispatch({type: 'RESET_APP'});
    }
  }
  return result
}
export default validateToken;
