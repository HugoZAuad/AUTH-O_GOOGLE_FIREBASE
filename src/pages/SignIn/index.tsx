import { useState } from 'react';

import {GoogleLogo} from '@phosphor-icons/react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../Services/firebase';

import './Styles.scss';

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error);
        });
        }
    

  return (
    <div className="container">
        <div className='user'>
            {user.photoURL && <img src={user.photoURL} alt="Foto do usuario"/>}
            <strong>{user.displayName}</strong>
            <small>{user.email}</small>
        </div>

      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, autenticação com a google você <br />
        facilita a vida do usuario permitindo utilizar sua aplicação sem fazer cadastro.
      </span>
      <button type="button" className="button" onClick={handGoogleSignIn}>
        <GoogleLogo />
        Entrar com google
      </button>
    </div>
  );
}
