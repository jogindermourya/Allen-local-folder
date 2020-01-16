// DOM Tutorails Document


/**

document.createElement(tagname) - return 1 element node
document.createTextNode(text) - returns 1 text node
parent.appendChild(node) - adds child  to parent
parent.removeChild(node) - remove  node from parent
element.innerHTML
element.textContent


**/


let main = document.querySelector('.main');
let h2 = main.querySelector('h2');
h2.textContent = 'Loading Movies';

let p = main.querySelector('.some');
p.textContent = 'Thanki Ji ji Ko';

p.innerHTML = 'This is first method to explore <strong>Pawan Rathore</strong>'

/*    Now we create an new element in Main Parent-------------*/


	let ul = document.createElement('ul');
	main.appendChild(ul); 

/*--------Remove-------------*/
	//main.removeChild(ul); 
