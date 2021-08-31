import React, { useRef } from 'react';
import '../css/login.css';

const URL_LOGIN = 'http://127.0.0.1/proyectos/Ejercicios-api/ws-login/login.php';

const sendDates = async ( url, data ) => {

	const resp = await fetch (url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type' : 'application/json',
			'Accept': 'application/json'
		}
	})
	console.log(resp);
	const json = await resp.json();
	console.log(json);
}


export default function Login(props){

	const refUser = useRef(null);
	const refPass = useRef(null);

	const handleLogin=()=>{
		const data = {
			"user" : refUser.current.value,
			"pass" : refPass.current.value
		}
		console.log(data);
		sendDates(URL_LOGIN, data);
	}

	return(
		<div className="login">
			<div className="row">
				<div className="col-sm-4 offset-4 mt-5">
					<div className="card pt-5">
						<div className="card-header text-center">
							<h3>Hola nuelsito</h3>
						</div>
						<div className="card-body text-center">
							<div className="input-group mb-3">
							  <span className="input-group-text" id="basic-addon2">
							    📧
							  </span>
							  <input
							    type="email"
							    className="form-control"
							    placeholder="email"
							    aria-label="Username"
							    aria-describedby="basic-addon2"
							    ref={refUser}
							  />
							</div>
							<div className="input-group mb-3">
							  <span className="input-group-text" id="basic-addon2">
							    🔐
							  </span>
							  <input
							    type="password"
							    className="form-control"
							    placeholder="password"
							    aria-label="Username"
							    aria-describedby="basic-addon1"
							    ref={refPass}
							  />
							</div>
							<button 
							onClick={handleLogin}
							className="btn btn-info btn-lg btn-block"> Ingresar </button>
							<div className="card-footer mt-5">
								<span>¿Olvidó su contraseña?</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}