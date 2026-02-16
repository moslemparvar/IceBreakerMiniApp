// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDCw8uSRVNTymjz8OiT6hfbeuEfnBBoZXs",
  authDomain: "icebreakerminiapp.firebaseapp.com",
  projectId: "icebreakerminiapp",
  storageBucket: "icebreakerminiapp.firebasestorage.app",
  messagingSenderId: "721330393424",
  appId: "1:721330393424:web:a28ae1b59830e2cd431c55"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// وقتی فرم Submit میشه
document.getElementById("profileForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    city: document.getElementById("city").value,
    interests: document.getElementById("interests").value,
    ice_points: 0,
    created_at: new Date()
  };

  await db.collection("users").add(user);
  alert("Profile saved 🎉");
});
