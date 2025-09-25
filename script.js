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
		
		if(cat==product.category||(cat=="first"&&product.category==categories[0].name)||cat=="«·ﬂ·")
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
			p.style="font-size: clamp(0.8rem, 1.5vw, 1.5rem);";
			
			var small= document.createElement("small");
			
			if(product.pngExist)img.src="./assets/images/products/"+product.id+".png";
			else img.src="./assets/images/products/0.png";
			
			h3.innerHTML=product.name;
			if(product.price<10000)p.innerHTML=product.price+" $ <small>Special price</small>";
			else p.innerHTML=product.price+" L.L. <small>Special price</small>";

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
{ name: '»—Ê ÌÌ‰'},
{ name: '”ﬂ«ﬂ—'},
{ name: '„‘—Ê»« '},
{ name: '»—Ê ÌÌ‰ »«—'},
{ name: '«·ﬂ·'}
];
const products=
[
{ id: 1,name:'Protein 200 mg',category:'»—Ê ÌÌ‰',price:80000,pngExist:0},
{ id: 2,name:'»—Ê ÌÌ‰ 1 ·Ì —',category:'»—Ê ÌÌ‰',price:12,pngExist:1},
{ id: 3,name:'Whey Protein 2 kg',category:'»—Ê ÌÌ‰',price:15.5,pngExist:1},
{ id: 4,name:'Protein Bar 30 mg',category:'”ﬂ«ﬂ—',price:80000,pngExist:1}
];