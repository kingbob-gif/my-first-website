const button = document.getElementById("submit");

button.addEventListener("click", function() {
	const res = document.getElementById("res").value
	if (res === "y") {
		alert("good I won't leak your IP")
	} else {
		alert("I have your IP")
		console.log("IP collected\n100.550.361.999")
		alert("Go ahead and push ctrl+shift+j")
	}
});
