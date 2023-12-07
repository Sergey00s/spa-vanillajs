

addRoute('/', 
	div(h1('Home', a("about").att$("href", "/about").att$("data-link", ""), a("contact").att$("href", "/contact").att$("data-link", ""))),
);


addRoute('/about',

	div(h1('About', a("home").att$("href", "/"))),
);


addRoute('/contact',

	div(h1('Contact', a("home").att$("href", "/"))),
);


