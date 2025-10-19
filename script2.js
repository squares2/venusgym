function retrieveValue() 
{
	const username = localStorage.getItem('username');
	if(username!="")
	{
		var userowner=document.getElementById("userowner");
		var dob=document.getElementById("dob");
		var subscriptiontype=document.getElementById("subscriptiontype");
		var payment=document.getElementById("payment");
		var sport=document.getElementById("sport");
		var paydate=document.getElementById("paydate");
		var expirydate=document.getElementById("expirydate");
		var monthly;
		
		if(localStorage.getItem('subscriptiontype')==1)monthly="ÌÊ„Ì";
		else if(localStorage.getItem('subscriptiontype')==2)monthly="‘Â—Ì";
		else monthly="3 √‘Â—";
		userowner.innerHTML=localStorage.getItem('userowner');
		dob.innerHTML=localStorage.getItem('dob');
		subscriptiontype.innerHTML=monthly;
		payment.innerHTML=localStorage.getItem('payment')+" $";
		sport.innerHTML=localStorage.getItem('sport');
		paydate.innerHTML=localStorage.getItem('paydate');
		expirydate.innerHTML=localStorage.getItem('expirydate');
	}
	else window.location.href = 'error.html';
}
