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
		
		if(cat==product.category||(cat=="first"&&product.category==categories[0].name)||cat=="����")
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

const categories=
[
{ name: '�������'},
{ name: '�����'},
{ name: '�������'},
{ name: '����'}
];
const products=
[
{ id: 1,name:'whey',category:'�������',price:5.0,pngExist:1},
{ id: 2,name:'Mass Gainer',category:'�������',price:420000.0,pngExist:1},
{ id: 3,name:'protein choc',category:'�����',price:3.0,pngExist:1},
{ id: 4,name:'����',category:'�������',price:20000.0,pngExist:1}
];