import { auth } from "./firebase";
import {onLogoutShow, onLoginShow } from "./login"; 

export function authState() {
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      onLogoutShow();
      console.log('User is signed in');

      return;
    }

    onLoginShow()
    console.log('User is logged out');
  });
}

export default authState;