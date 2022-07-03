importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyCwC6nEqWFgZVYPUs-qXkyy5Z4_gw3bOF4",
    authDomain: "select-84f0d.firebaseapp.com",
    projectId: "select-84f0d",
    storageBucket: "select-84f0d.appspot.com",
    messagingSenderId: "305409325499",
    appId: "1:305409325499:web:e6deee31582b3550bd2c9e",
    measurementId: "G-8689EDPPEB"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});