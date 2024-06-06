import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import 'react-toastify/dist/ReactToastify.css';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6gnVoFoW6d4eegkw2PZCgjXTGHt6OdSw",
    authDomain: "ecommerce-coder-345b3.firebaseapp.com",
    projectId: "ecommerce-coder-345b3",
    storageBucket: "ecommerce-coder-345b3.appspot.com",
    messagingSenderId: "103506089283",
    appId: "1:103506089283:web:6da61c53d3b991c510cbf6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
