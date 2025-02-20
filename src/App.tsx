import { SignIn } from './pages/SignIn';
import { SignUpForm } from './pages/SignUp';
import './Styles/global.scss';
import { useState } from 'react';

export default function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      {isSignUp ? (
        <SignUpForm />
      ) : (
        <SignIn />
      )}
      <button className='button2'
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Ir para o Login com e-mail ou sua conta google' : 'Ir para Cadastrar o seu e-mail'}
      </button>
    </>
  );
}
