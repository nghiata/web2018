var database = [
	{
		'username': 'nghiata',
		'password': '123456'
	},
	{
		'username': 'John',
		'password': '123'
	},
	{
		'username': 'Peter',
		'password': '13579'
	}
];

var newsfeed = [
	{
		'username': 'John',
		'timeline': 'Javascript is so crazy'
	},
	{
		'username': 'Peter',
		'timeline': 'I love javascript'
	},
];

var usernamePrompt = prompt("What\'s your name?");
var passwordPrompt = prompt("What\'s your password?");

function isUserValid(username, password) {
	for (var i=0; i<database.length; i++) {
		if (username == database[i].username && password == database[i].password) {
			return true;
		}		
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed)
	}
	else {
		alert('Sorry, wrong username and password');
	}	
}

signIn(usernamePrompt, passwordPrompt);