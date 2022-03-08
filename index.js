const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=50");
xhr.setRequestHeader("x-rapidapi-host", "google-news1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "bd51732174mshc70568bd3c36d87p1a05c5jsn7482e2a05e9f");

xhr.send(data);

