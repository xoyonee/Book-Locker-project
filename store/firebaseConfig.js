import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAYhzz5PygsY5Htlf4KjfhHSlisS1QVX-M",
  authDomain: "booklocker-981a5.firebaseapp.com",
  databaseURL: "https://booklocker-981a5-default-rtdb.firebaseio.com",
  projectId: "booklocker-981a5",
  storageBucket: "booklocker-981a5.appspot.com",
  messagingSenderId: "542862874888",
  appId: "1:542862874888:web:33f26ca8b72fec64dc34bd"
};

const app = initializeApp(firebaseConfig);

export default app;
