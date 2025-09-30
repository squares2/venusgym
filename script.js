function printLogin() 
{
	const username = localStorage.getItem('username');
	if(username!="")document.getElementById("login_name").innerHTML = username;
}
function openForm() 
{
	const username = localStorage.getItem('username');
	if(username=="")document.getElementById("myForm").style.display = "block";
	else window.location.href = 'login.html';
}
function closeForm() 
{
  document.getElementById("myForm").style.display = "none";
}
function checkLogin()
{
	var username=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	for (let i = 0; i < users.length; i++)
	{
		const user = users[i];
		if(pass==user.password && username==user.username)storeValue();
	}
}
function logout() 
{
	login[0].username="";
	login[0].password="";
	login[0].userowner="";
	localStorage.setItem('username', "");
	window.location.href = 'index.html';
}
function storeValue() 
{
	var user=document.getElementById("username").value;
	localStorage.setItem('username', user);
	window.location.href = 'login.html';
}
function retrieveValue() 
{
	const username = localStorage.getItem('username');
	if(username!="")
	{
		for (let i = 0; i < users.length; i++)
		{
			const user = users[i];
			if(username==user.username)
			{
				login[0].username=user.username;
				login[0].password=user.password;
				login[0].userowner=user.userowner;
				login[0].dob=user.dob;
				login[0].subscriptiontype=user.subscriptiontype;
				login[0].payment=user.payment;
				login[0].sport=user.sport;
				login[0].paydate=user.paydate;
				login[0].expirydate=user.expdate;
			}
		}
		var userowner=document.getElementById("userowner");
		var dob=document.getElementById("dob");
		var subscriptiontype=document.getElementById("subscriptiontype");
		var payment=document.getElementById("payment")+" $";
		var sport=document.getElementById("sport");
		var paydate=document.getElementById("paydate");
		var expirydate=document.getElementById("expirydate");
		var monthly;
		
		if(login[0].subscriptiontype==1)monthly="يومي";
		else if(login[0].subscriptiontype==2)monthly="شهري";
		else monthly="3 أشهر";
		
		userowner.innerHTML=login[0].userowner;
		dob.innerHTML=login[0].dob;
		subscriptiontype.innerHTML=monthly;
		payment.innerHTML=login[0].payment;
		sport.innerHTML=login[0].sport;
		paydate.innerHTML=login[0].paydate;
		expirydate.innerHTML=login[0].expirydate;
	}
	else window.location.href = 'error.html';
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
function distributeCategories()
{
	var topnav=document.getElementById("category");
	topnav.innerHTML="";
	for (let i = 0; i < categories.length; i++)
	{
		const category = categories[i];
		var a= document.createElement("a");
		var li= document.createElement("li");
		a.id=""+category.name;
		a.onclick="distribute('"+category.name+"')";
		a.href="javascript:distribute('"+category.name+"');";
		a.style="margin:5px;"
		if(i==0)a.classList.add('active');
		a.innerHTML=category.name;
		li.append(a);
		topnav.append(li);
	}
}
function distribute(cat)
{
	var page=document.getElementById("product");
	page.innerHTML="";
	
	const cats=document.querySelectorAll("#category a[href]");
	for(let j=0;j<cats.length;j++)
	{
		if(cat==cats[j].innerHTML||(cat=="first"&&j==0))cats[j].className="active";
		else cats[j].className="";
	}	

	for (let i = 0; i < products.length; i++) 
	{
		const product = products[i];
		
		if(cat==product.category||(cat=="first"&&product.category==categories[0].name)||cat=="الكل")
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
			p.style="margin:0 0 0px;font-size: clamp(0.8rem, 1.5vw, 1.5rem);";
			
			var small= document.createElement("small");
			
			if(product.pngExist)img.src="./assets/images/products/"+product.id+".png";
			else img.src="./assets/images/products/0.png";
			
			h3.innerHTML=product.name;
			if(product.price<10000)p.innerHTML=numberComma(product.price)+" $ <small>Special price</small>";
			else p.innerHTML=numberComma(product.price)+" L.L. <small>Special price</small>";

			div.append(h3);
			div.append(p);
			article.append(img);
			article.append(div);
			page.append(article);
		}
	}
}
const login=
[
{ username: '',password:'',userowner:'',dob: '',subscriptiontype: '',payment: '',sport: '',paydate: '',expirydate: ''}
];

const categories=
[
{ name: 'بروتيين'},
{ name: 'سكاكر'},
{ name: 'مشروبات'},
{ name: 'الكل'}
];
const products=
[
{ id: 1,name:'whey',category:'بروتيين',price:5.0,pngExist:1},
{ id: 2,name:'Mass Gainer',category:'بروتيين',price:420000.0,pngExist:1},
{ id: 3,name:'protein choc',category:'سكاكر',price:3.0,pngExist:1},
{ id: 4,name:'مياه',category:'مشروبات',price:20000.0,pngExist:1}
];
const users=
[
{ username: 'user3',password:'u',userowner:'t3',dob: '1999-01-01',subscriptiontype: '2',payment: '20',sport: 'sport3',paydate: '2025-10-01',expdate: '2026-10-01'},
{ username: 'تي4',password:'a2345',userowner:'t4',dob: 'null',subscriptiontype: '1',payment: '10',sport: 'sport1',paydate: '2025-09-01',expdate: '2026-09-01'},
{ username: 'z1',password:'z1',userowner:'zboon',dob: 'null',subscriptiontype: '2',payment: '20',sport: 'sport1',paydate: '2025-10-01',expdate: '2026-10-01'},
{ username: 'z4',password:'b3711',userowner:'z44',dob: '2000-01-01',subscriptiontype: '1',payment: '22',sport: 'sport2',paydate: '2025-10-01',expdate: '2026-01-01'},
{ username: 't5',password:'r4444',userowner:'t5',dob: '1984-08-20',subscriptiontype: '2',payment: '20',sport: 'sport1',paydate: '2026-01-01',expdate: '2027-01-01'},
{ username: 'user5',password:'v9736',userowner:'dgdffj',dob: '1980-05-12',subscriptiontype: '2',payment: '15',sport: 'sport1',paydate: '2001-01-01',expdate: '2002-01-01'}
];
