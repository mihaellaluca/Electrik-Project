class RegisterComponent extends HTMLElement {
	registerUser() {
		console.log('registerUser');
		const firstName = document.querySelector('#firstName').value;
		const lastName = document.querySelector('#lastName').value;
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#pass').value;
		console.log(firstName);
		console.log(lastName);
		console.log(email);
		console.log(password);
		fetch('http://localhost:3000/users/register', {
			method: 'POST',
			headers: {'content-type':'application/json'},
			body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
      .catch((err) => console.log(err));
      window.location.replace("http://127.0.0.1:5500/frontend/index.html");
	}

	connectedCallback() {
		this.innerHTML = `
            <link rel="stylesheet" href="register/register-style.css">
            <div class="register-comp">
              <img src = "./logo_transparent.png" alt="logo">
              <div class="form-container">
              
              <form>
                  <label for="firstName">First Name:</label> <br>
                  <input name="firstName" id="firstName" />
                  <br>
                  <br>
                  <label for="lastName">Last Name:</label> <br>
                  <input name="lastName" id="lastName" />
                  <br>
                  <br>
                  <label for="email">Email:</label> <br>
                  <input name="email" id="email" />
                  <br>
                  <br>
                  <label for="pass">Password:</label><br>
                  <input name="pass" id="pass" type="password"/>
                  <br>
                  <br>
                  <br>
              </form>
              <button onclick="this.parentElement.parentElement.parentElement.registerUser()">Register</button>
              <p> <a href='/frontend/index.html'>Already have an account.</a></p>
              </div>
            </div>
          `;
	}
}

customElements.define('register-component', RegisterComponent);
