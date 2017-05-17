//importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-auth.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    //apiKey: "AIzaSyBnpUoRO0jeYspTiFaNklR5hpsWgCmS-_Q",
    authDomain: "nzproject-ee70d.firebaseapp.com",
    databaseURL: "https://nzproject-ee70d.firebaseio.com",
    projectId: "nzproject-ee70d",
    storageBucket: "nzproject-ee70d.appspot.com",
    messagingSenderId: "932318795709"    ,
    apiKey: "AAAA2RKH170:APA91bGanYW7gkhdTHRCnkNfToM8XYQn--GA3LGR3KBOoC7uYgGYSHTJmVPxNuSpdkrcCt1FW0t1C9iFHdIemUDOG5fK-894MhhCujls67w_bNm-bcPFbs_q-wMq5onUH3WjaKW6zEYk"
};


firebase.initializeApp(config);
// Retrieve Firebase Messaging object.
const messaging = firebase.messaging(

//firebase.initializeApp({
//    'messagingSenderId': '932318795709'
//});

//firebase.messaging();

self.addEventListener('notificationclick', function(event) {
    const target = event.notification.data.click_action || '/';
    event.notification.close();

    // This looks to see if the current is already open and focuses if it is
    event.waitUntil(clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then(function(clientList) {
        // clientList always is empty?!
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == target && 'focus' in client) {
                return client.focus();
            }
        }
    
        return clients.openWindow(target);
    }));
});
