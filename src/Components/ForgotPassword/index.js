import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function ForgotPassword() {
const [resetPassword, setResetPassword] = useState(false)
const [mail, setMail] = useState('')

  const onChange = (e) => {
    setMail(e.target.value)
    
  }
    const submit = (e) => {
    e.preventDefault()
    setMail(mail)
    setResetPassword(true)
  }
  return (
   
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div className="flex-grow-1 foodtime_mockup bg-password-image">
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-2">Mot de passe oublié ?</h4>
                        {!resetPassword &&
                        <p className="mb-4">Aucun problème, ce sont des choses qui arrivent. Remplissez votre adresse mail afin de recevoir un lien de ré-initialisation</p>}
                        {resetPassword &&
                        <p className="mb-4">Veuillez vérifier votre boite mail. Un lien de ré-initialisation à été envoyé à l'adresse {mail}</p>}
                      </div>
                      {!resetPassword &&
                      <form onSubmit={submit} className="user">
                        <div className="form-group">
                          <input
                            onChange={onChange} 
                            className="form-control form-control-user"
                            type="email" id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Email" name="email">
                          </input>
                        </div>
                        <button className="btn btn-primary btn-block text-white btn-user" type="submit">Ré-initialiser</button>
                      </form>
                      }
                      <div className="text-center">
                        <hr></hr>
                        <Link to="/">
                          {!resetPassword &&<div className="text-center"><button  type="button" className="btn btn-link btn-sm">Vous l'avez retrouvé ? Connectez vous</button></div>}
                          {resetPassword &&<div className="text-center"><button  type="button" className="btn btn-link btn-sm">Mot de passe rénitialisé ? Connectez vous</button></div>}
                        </Link>
                      </div>
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

export default ForgotPassword;


