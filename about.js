let contact = document.querySelector('#contact');
function submitted(event) {
	event.preventDefault();
	{
		alert('The form has been submitted successfully.');
	  };
	
}

contact.addEventListener('submit', submitted);


function compliment(event){
	event.preventDefault(); 
	{
		alert('You are doing great!');
	}
	
}
let img = document.querySelector('#img');
img.addEventListener('mouseover', compliment);