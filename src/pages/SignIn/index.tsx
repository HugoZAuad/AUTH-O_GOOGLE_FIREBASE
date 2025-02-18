import { useState, useEffect } from 'react';
import { GoogleLogo } from '@phosphor-icons/react';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../../Services/firebase';
import './Styles.scss';

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ?? {} as User);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function handleGoogleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Por favor, tente novamente.');
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      setUser({} as User);
      alert('Logout realizado com sucesso!');
      window.location.href = '/'; // Redireciona para a página inicial
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      alert('Erro ao fazer logout. Por favor, tente novamente.');
    }
  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && (
          <img src={user.photoURL} alt="Foto do usuário" className="user-photo" />
        )}
        <strong className="user-name">{user.displayName || 'Visitante'}</strong>
        <small className="user-email">{user.email || ''}</small>
      </div>

      <h1>Acesse sua conta</h1>
      <button
        type="button"
        className="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
      >
        <GoogleLogo className="icon" />
        {loading ? 'Carregando...' : 'Entrar com Google'}
      </button>

      {user.email && (
        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Sair
        </button>
      )}
    </div>
  );
}
