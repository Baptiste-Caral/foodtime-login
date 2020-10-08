import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext"

function LoggedIn() {
  const [user, setUser] = useContext(UserContext)
  

  const logout = () => {

    var auth2 = window.gapi.auth2.getAuthInstance()
    if (auth2) {

      auth2.signOut().then(function () {
        console.log('User signed out.')
      setUser(false)
      localStorage.removeItem("user")
      })
    }
    else {
      console.log("disconnect");
      setUser(false)

    }

  }
  return (

  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-9 col-lg-12 col-xl-10">
        <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-lg-flex">
                  <div className="flex-grow-1 foodtime_mockup bg-password-image">
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center text-success">
                      {!user.avatar && <i className="fa fa-smile-o fa-4x"></i>}
                      {user.avatar && <img alt="avatar utilisateur" src={user.avatar} className="circle-img rounded-circle sm"></img>}
                      <h4 className="text-dark mb-2">Bonjour {user.login}</h4>
                      <h5 className="text-dark mb-2">Vous êtes connecté !</h5>
                    </div>
                    <div className="text-center">
                      <hr></hr>
                      <button type="button" className="btn btn-link" onClick={logout}>Se déconnecter</button>
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

export default LoggedIn;