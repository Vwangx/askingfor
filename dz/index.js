let loginp = document.getElementById("loginp");
let logpas = document.getElementById("logpas");

let reginp = document.getElementById("reginp");
let regpas = document.getElementById("regpas");

let logbtn = document.getElementById("logbtn");
let regbut = document.getElementById("regbut");

logbtn.onsubmit = event => {
  event.preventDefault();
  let login = loginp.vlaue;
  let password = logpas.vlaue;

  fetch("http://shop-roles.asmer.fs.a-level.com.ua/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': "application/json"
    },
    body: JSON.stringify({
      query: `query login($login: String , $password: String){
		login(login:$login , password: $password)
	}`,
      variables: { login, password }
    })
  })
    .then(res => (console.log("res = ", res), res.json()))
    .then(data => console.log("data returned:", data))
    .catch(err => console.log("err app.post login findOne = ", err));
};
