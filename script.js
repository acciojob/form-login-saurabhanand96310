function getFormvalue(e) {
    //Write your code here
	e.preventDefault();
     let first=document.querySelectorAll("input");
	let f=first[0].value;
	let last=first[1].value;

		alert(f+" "+last);
}
