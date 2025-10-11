	import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

	const firebaseConfig = 
	{
		apiKey: "AIzaSyAVz09X6t6h4AnIUyl8CSpHNWgsLwjAqRk",
		authDomain: "venusgym-5c509.firebaseapp.com",
		databaseURL: "https://venusgym-5c509-default-rtdb.asia-southeast1.firebasedatabase.app",
		projectId: "venusgym-5c509",
		storageBucket: "venusgym-5c509.firebasestorage.app",
		messagingSenderId: "694873396897",
		appId: "1:694873396897:web:ea68b2d124070a09ac42e0"
	};
	const app = initializeApp(firebaseConfig);
	import {getDatabase, set, get,update,remove,ref,child,onValue}
	from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

	const db=getDatabase();
	const dbref=ref(db);
	const productRef = ref(db,'products');
	//remove(productRef);	//success
	
	//set(ref(db,"users/3"),{username:"مستخدم",password:"pass5",age:"22"});
	
	//set(dbProd, null);
	/*update(ref(db,"products/1"),
	{
		id: 1,name:'whey',category:'�����',price:5.0,pngExist:1
	});*/
	/*set(ref(db,"categories/3"),
	{
		name:"cat 3"
	});*/
	const dbRef = ref(db,'users');
	function goodLogin(user,pass)
	{
		var state="not match";
		get(child(dbref,"users")).then((snapshot) => 
		{
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					console.log(item.username+":"+user+":"+item.password+":"+pass);
					if(item.username==user&&item.password==pass)
					{
						console.log("match");
						state="match";
					}	
					i++;
				}
			} else {
				console.log("No data available");
			}
		}).catch((error) => 
		{
			console.error(error);
		});
		return state;
	}

	function removeAllProducts()
	{
		const productRef = ref(db,'products');
		remove(productRef);
	}
	function removeAllCategories()
	{
		const categoryRef = ref(db,'categories');
		remove(categoryRef);
	}
	//removeAllCategories();
	alert(goodLogin("user","pass5"));