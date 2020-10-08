import React, {useState, useContext} from 'react'
import { users } from '../../helpers/users'
import { UserContext } from "../../context/UserContext"
import { Link } from 'react-router-dom'
import GoogleAuth from '../Auth/GoogleAuth'

function Login() {
  
  const [user, setUser] = useContext(UserContext)
  const [formValues, setFormValues] = useState([])
  const [stayConnected, setStayConnected] = useState(false)
  const [invalidMail, setInvalidMail] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)
  
const isChecked = (e) => {
 
  setStayConnected(e.target.checked)
}
  const handleChangeFormValues = (event) => {
    const name = event.target.name  
    setFormValues({
      ...formValues,
      [name]: event.target.value  
    }) 
    
  }
  const submit = (event) => {
    event.preventDefault()
    const userdata = users.find(o => o.email === formValues.email)
    if (!userdata) {
      setInvalidMail(true)
    } else {
      setInvalidMail(false)
    }if (userdata && userdata.password !== formValues.password) {
      setInvalidPassword(true)
    } else {
      setInvalidPassword(false)
    }
    if (userdata && userdata.password === formValues.password) {
      const handleUserDatas = { 
        email: userdata.email,
        login: userdata.login,
        isAuth: true,
        avatar: userdata.avatar
      }
      setUser(handleUserDatas)
      if (stayConnected === true) {

        localStorage.setItem("user", JSON.stringify(handleUserDatas))
      }
    }
  }
  
  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-flex">
                  <div className="flex-grow-1 foodtime_mockup bg-login-image"></div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="text-dark mb-4">Connexion</h4>
                    </div>
                    <form className="user" onChange={handleChangeFormValues} onSubmit={submit}>
                      <div className="form-group">
                        <input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" name="email"></input>
                        {invalidMail && <small id="passwordHelp" class="text-danger">Cet email n'existe pas !</small>}
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Mot de Passe" name="password"></input>
                        {invalidPassword && <small id="passwordHelp" class="text-danger">Mauvais mot de passe !</small>}
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <div className="form-check">
                            <input onChange={isChecked} type="checkbox" className="custom-control-input" id="customCheck" name="example1"></input>
                            <label className="custom-control-label" htmlFor="customCheck">Rester connecté</label>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary btn-block text-white btn-user" type="submit">Se connecter</button>
                      <hr></hr>
                      <GoogleAuth />
                      <hr></hr>
                    </form>
                    <Link to="/forgot">
                      <div className="text-center"><button  type="button" className="btn btn-link btn-sm">Mot de passe oublié ?</button></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Login;