import { useState, useEffect } from "react";
import { GoogleLogo } from "@phosphor-icons/react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../../Services/firebase";
import axios from "axios"; 
import "./Styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function SignIn() {
  const [user, setUser ] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser ) => {
      setUser (currentUser  ?? ({} as User));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function handleGoogleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser (result.user);
      console.log("Usuário autenticado:", result.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Por favor, tente novamente.");
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      setUser ({} as User);
      alert("Logout realizado com sucesso!");
      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      alert("Erro ao fazer logout. Por favor, tente novamente.");
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://sua-api.com/login', {
        email,
        password,
      });

      if (response.data.success) {
        alert('Login realizado com sucesso!');
      } else {
        alert('Erro ao fazer login. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {user.photoURL && (
        <div className="user">
          <img
            src={user.photoURL}
            alt="Foto do usuário"
            className="user-photo"
          />
          <strong className="user-name">
            {user.displayName || "Olá visitante,"}
          </strong>
          <small className="user-email">{user.email || ""}</small>
        </div>
      )}

      {loading ? (
        <h1>Carregando...</h1>
      ) : user.email ? (
        <button type="button" className="logout-button" onClick={handleLogout}>
          Sair
        </button>
      ) : (
        <>
          <h1>Acesse sua conta</h1>

          <div className="formGroup">
            <label htmlFor="email" className="label">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="password" className="label">
              Senha:
            </label>
            <div className="passwordContainer">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="togglePassword"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="buttonE"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <div>
            <h1 className="ou">OU</h1>
          </div>

          <button
            type="button"
            className="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <GoogleLogo className="icon" />
            {loading ? "Carregando..." : "Entrar com Google"}
          </button>
        </>
      )}
    </div>
  );
}