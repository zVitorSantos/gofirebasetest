import { getAuth, signInWithEmailAndPassword, getIdToken } from "firebase/auth";

class AuthService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  getIdToken() {
    return getIdToken(this.auth.currentUser);
  }
}

export default AuthService;