var firebaseConfig = {
  apiKey: "AIzaSyBjyAnNTsngbQNpCTxoORlfmtHQKkMzl0M",
  authDomain: "kwitter-b4efd.firebaseapp.com",
  databaseURL: "https://kwitter-b4efd-default-rtdb.firebaseio.com",
  projectId: "kwitter-b4efd",
  storageBucket: "kwitter-b4efd.appspot.com",
  messagingSenderId: "862254667668",
  appId: "1:862254667668:web:687a81bfebc0b66d8d6181",
  measurementId: "G-18TCR57EVN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login(){
    var username= document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        fruit:"happy"
    });
}