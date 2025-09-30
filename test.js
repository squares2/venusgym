import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAVz09X6t6h4AnIUyl8CSpHNWgsLwjAqRk",
    authDomain: "venusgym-5c509.firebaseapp.com",
    databaseURL: "https://venusgym-5c509-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "venusgym-5c509",
    storageBucket: "venusgym-5c509.firebasestorage.app",
    messagingSenderId: "694873396897",
    appId: "1:694873396897:web:ea68b2d124070a09ac42e0"
  };
  const app = initializeApp(firebaseConfig);
  import {getDatabase, set, get,update,remove,ref,child}
  from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
  const db=getDatabase();
  
	set(ref(db,"users/03"),
	{
		username:"user1",password:"pass1",age:"25"
	});
	
	set(ref(db,"users/04"),
	{
		username:"user2",password:"pass2",age:"29"
	});
	const dbref=ref(db);
	
	val snapshot=get(child(dbref,"users/04"));
	alert(snapshot.password);
  
  alert("gd4");
