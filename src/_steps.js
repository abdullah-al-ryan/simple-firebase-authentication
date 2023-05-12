/*
---------------
Initial Setup
----------------
1. visit: console.firebase.google.com
2. create a new firebase project 
3. visit doc (go to docs): Build > Authentication > Web
4. register web app > firebase project home > click web > give name and register
5. install firebase for your project: npm install firebase
6. Dangerous: Get firebase config and put it in firebase.init.js
7. export app from firebase.init.js 
--------------------
Setup the Provider
--------------------
8. create auth using getauth from firebase by using app from firebase.init.js
9. create a google auth provider with new
10. go to firebase > Build > Authentication > Sign in method 
11. Enable google sign in method
12. create a button with google sign in method with a click handler
13. inside the event handler, call signInWIthPopup with auth, provider
14. after signInWIthPopup .then result , error
---------------------
Display Data
---------------------
15.
*/