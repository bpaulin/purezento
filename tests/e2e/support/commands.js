// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
  apiKey: "AIzaSyCVhv_oXVs59nApoiMkLloT7517weYNyAk",
  authDomain: "purezento-8c10f.firebaseapp.com",
  databaseURL: "https://purezento-8c10f.firebaseio.com",
  projectId: "purezento-8c10f",
  storageBucket: "purezento-8c10f.appspot.com",
  messagingSenderId: "572834651357",
  appId: "1:572834651357:web:80aaa22ca63b398bbf8f34",
  measurementId: "G-PR66H8VCEV",
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
