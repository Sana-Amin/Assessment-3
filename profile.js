
 let favColor = document.querySelector('#color');

function handleSubmit(evt) {
    	evt.preventDefault();
 	{
		alert('My favorite color is Blue.');
	  };
     }


favColor.addEventListener('click', handleSubmit);


let favPlace = document.querySelector('#place');

function Place(evt) {
    	evt.preventDefault();
 	{
		alert('My favorite place is the Beach.');
	  };
      
     }

favPlace.addEventListener('click',Place );

let favRitual = document.querySelector('#ritual');

function Ritual(evt) {
    	evt.preventDefault();
 	{
		alert('My favorite ritual is praying.');
	  };
      
     }


favRitual.addEventListener('click',Ritual);