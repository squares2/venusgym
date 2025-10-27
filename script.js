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
		
	function loginUser(user,pass)
	{
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
					if(item.username==user&&item.password==pass)
					{
						localStorage.setItem('username', item.username);
						localStorage.setItem('password', item.password);
						localStorage.setItem('userowner', item.userowner);
						localStorage.setItem('dob', item.dob);
						localStorage.setItem('subscriptiontype', item.subscriptiontype);
						localStorage.setItem('payment', item.payment);
						localStorage.setItem('sport', item.sport);
						localStorage.setItem('paydate', item.paydate);
						localStorage.setItem('expirydate', item.expdate);
						window.location.href = 'login.html';
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
	}
function storeValue() 
{
	var user=document.getElementById("username").value.toLowerCase();
	localStorage.setItem('username', user);
		get(child(dbref,"users")).then((snapshot) => 
		{
	alert("");
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					if(item.username==username)
					{
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
}
function printLogin() 
{
	const username = localStorage.getItem('username');
	if(username!=null&&username!='')document.getElementById("login_name").innerHTML = username;
}
function openForm() 
{
	const username = localStorage.getItem('username');
	if(username==null||username=='')document.getElementById("myForm").style.display = "block";
	else 
	{
		window.location.href = 'login.html';
	}	
}
function closeForm() 
{
  document.getElementById("myForm").style.display = "none";
}
function checkLogin()
{
	var username=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	loginUser(username,pass);
	/*for (let i = 0; i < users.length; i++)
	{
		const user = users[i];
		if(pass==user.password && username.toLowerCase()==user.username.toLowerCase())storeValue();
	}*/
}
function logout() 
{
	localStorage.setItem('username','');
	window.location.href = 'index.html';
}
function numberComma(number)
{
	var result="";
	var count=0;
	if(number.length<=3)result=""+number;
	else
	{
		result="";
		var txt=""+number;
		for(let i=txt.length-1;i>=0;i--)
		{
			if(count==3)
			{
				result=","+result;
				count=0;
			}
			result=txt.charAt(i)+result;
			count++;
		}
	}
	return result;
}
function getFirstCategory()
{
	get(child(dbref,"categories")).then((snapshot) => 
	{
		if (snapshot.exists()) 
		{
			const data = snapshot.val();
			const keys = Object.keys(data);
			const key = keys[0];
			const item = data[key];
			loadProducts(""+item.category); 
		}
	}).catch((error) => 
	{
		console.error(error);
	});
}
function loadCategories()
{
	var topnav=document.getElementById("category");
	if(topnav!=null)
	{
		topnav.innerHTML="";
		get(child(dbref,"categories")).then((snapshot) => 
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
					var a= document.createElement("a");
					var li= document.createElement("li");
					a.id=""+key;
					a.setAttribute('category-name',""+item.category);
					a.href="#";
					a.style="margin:5px;"
					if(i==0)a.classList.add('active');
					a.innerHTML=item.category;
					li.append(a);
					topnav.append(li);
					i++;
				}
			} else {
				console.log("No data available");
			}
		}).catch((error) => 
		{
			console.error(error);
		});
	}
}
function clickCategory(catName) 
{
	loadProducts(catName);
}

// --- Event Delegation Setup ---
document.addEventListener('DOMContentLoaded', () => 
{
  const categoryUL = document.getElementById('category');
  // Attach a single listener to the parent container
  if(categoryUL!=null)
  {
	  categoryUL.addEventListener('click', (event) => 
	  {
	    // Check if the clicked element (event.target) or one of its parents is a `.block`
	    const clickedCategory = event.target.closest('a[category-name]');
	    
	    if (clickedCategory) 
		{
			event.preventDefault(); 
	      const catName = clickedCategory.getAttribute('category-name');
		 // event.preventDefault()
	      clickCategory(catName);
	    }
	  });
	}
  // Fetch and display the data on page load
  //loadCategories();
});
function getTextWidth(text, font) 
{
  // Use a cache for performance if you need to measure a lot of text
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}
/*function adjustFontSize(element) 
{
  let fontSize = parseFloat(window.getComputedStyle(element).fontSize);
  const computedStyle = window.getComputedStyle(element);
  const elementFont = '${computedStyle.fontSize} ${computedStyle.fontFamily}';
  while (element.offsetWidth < getTextWidth(element.innerHTML,elementFont) && fontSize > 0) 
  {
    fontSize -= 1; 
    element.style.fontSize = fontSize + 'px';
  }
  console.log(element.style.fontSize+":"+getTextWidth(element.innerHTML,elementFont));
 // console.log(element.innerHTML.length+":"+element.innerHTML+":"+fontSize);
}*/
export function loadProducts(cat)
{
	var page=document.getElementById("product");
	if(page!=null)
	{
		page.innerHTML="";

		const cats=document.querySelectorAll("#category a[href]");
		for(let j=0;j<cats.length;j++)
		{
			if(cat==cats[j].innerHTML||(cat instanceof Event&&j==0))cats[j].className="active";
			else cats[j].className="";
		}	
		if(cat instanceof Event)getFirstCategory();
		else
		{
			get(child(dbref,"products")).then((snapshot) => 
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
						
						if(item.category==cat||cat=="الكل")
						{
							var article= document.createElement("article");
							article.classList.add('product-card');
							
							var img= document.createElement("img");
							img.classList.add('prod-image');
							
							var div= document.createElement("div");
							div.classList.add('content');
							
							var h3= document.createElement("h3");
							h3.classList.add('product-name');
							
							var p= document.createElement("p");
							p.classList.add('product-price');
							
							var small= document.createElement("small");
					
							if(item.pngExist)img.src="./assets/images/products/"+key+".png";
							else img.src="./assets/images/products/0.png";
							
							h3.innerHTML=item.name;
							if(item.price<10000)p.innerHTML=(""+item.price)+" $ <small>Special price</small>";
							else p.innerHTML=numberComma(""+item.price)+" L.L. <small>Special price</small>";

							div.append(h3);
							div.append(p);
							article.append(img);
							article.append(div);
							page.append(article);
							//adjustFontSize(h3);
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
		}
	}
}

const login_name = document.getElementById('login_name');
if (login_name) 
{
	login_name.addEventListener('click', () => 
	{
		openForm();
	});
}
const login_form = document.getElementById('login_form');
if (login_form) 
{
	login_form.addEventListener('click', () => 
	{
		checkLogin();
	});
}
const close_form = document.getElementById('close_form');
if (close_form) 
{
	close_form.addEventListener('click', () => 
	{
		closeForm();
	});
}
const logout_form = document.getElementById('logout_form');
if (logout_form) 
{
	logout_form.addEventListener('click', () => 
	{
		event.preventDefault();
		logout();
	});
}
document.addEventListener('DOMContentLoaded',loadCategories);
document.addEventListener('DOMContentLoaded',loadProducts);

