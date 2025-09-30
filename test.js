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
  
	set(ref(db,"users/05"),
	{
		username:"user5",password:"pass5",age:"22"
	});
	
	set(ref(db,"users/06"),
	{
		username:"user6",password:"pass6",age:"31"
	});
	const dbref=ref(db);
	get(child(dbref,"users/04")).then((snapshot)=>{
		if(snapshot.exists()){ alert(snapshot.val().password);}}).catch((error)=>{
			alert(error);})
  
  alert("gd5");

