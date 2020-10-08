import React, {useContext}from 'react';
import { useGoogleLogin } from 'react-google-login'
import { UserContext } from "../../context/UserContext"

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '719928412877-br49om6oaaj3f99gij46045nqghkrori.apps.googleusercontent.com'

function GoogleAuth() {
  const [user, setUser] = useContext(UserContext)
  const onSuccess = (res) => {
    console.log('Login Success')
    setUser({ 
      email: res.profileObj.email,
      login: res.profileObj.name,
      isAuth: true,
      avatar: res.profileObj.imageUrl
    })

    
    // refreshTokenSetup(res)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
    
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="btn btn-primary btn-block text-white btn-google btn-user">
      <i className="fab fa-google"></i>&nbsp; Se connecter avec Google
    </button>
  );
}

export default GoogleAuth;