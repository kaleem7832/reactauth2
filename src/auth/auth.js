const Auth = {
  isAuthenticated: false,
  authenticate() {
    var token  = sessionStorage.getItem('token');
    if(token){
     this.isAuthenticated = true;
    }
  },
  signout() {
    sessionStorage.removeItem('token');
    this.isAuthenticated = false;
  },
  getAuth() {
    var token  = sessionStorage.getItem('token');
    if(token){
     this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
};
export default Auth;
