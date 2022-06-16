import { auth, provider } from './firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// Other import
import { signOut } from 'firebase/auth';

const refs = {
  myLibraryItem: document.querySelector('.nav_my-library'),
  loginItem: document.querySelector('.nav__login'),
  logoutItem: document.querySelector('.nav__logout'),
};

const { myLibraryItem, loginItem, logoutItem } = refs;

// LOGIN
const singInClick = e => {
  e.preventDefault();

  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(result);
      onLogoutShow();
      console.log('Sign-in successful');
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// LOGOUT
const singOutClick = e => {
  e.preventDefault();

  //   const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      onLoginShow();
      console.log('Sign-out successful');
    })
    .catch(error => {
      // An error happened.
      console.log(error.message);
    });
};

function onLogoutShow() {
  myLibraryItem.classList.remove('is-hidden');
  logoutItem.classList.remove('is-hidden');
  loginItem.classList.add('is-hidden');
}

function onLoginShow() {
  myLibraryItem.classList.add('is-hidden');
  logoutItem.classList.add('is-hidden');
  loginItem.classList.remove('is-hidden');
}

export { singInClick, singOutClick, onLogoutShow, onLoginShow };
