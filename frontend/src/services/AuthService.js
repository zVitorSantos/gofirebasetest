import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, getIdToken } from "firebase/auth";

class AuthService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('O e-mail fornecido já está em uso.');
      } else {
        throw error;
      }
    }
  }

  getIdToken() {
    return getIdToken(this.auth.currentUser);
  }
}

export default AuthService;
