import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './styles.module.scss';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      // Substitua 'https://sua-api.com/signup' pelo seu endpoint real
      const response = await axios.post('https://sua-api.com/signup', {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (response.data.success) {
        alert('Cadastro realizado com sucesso!');
       
        window.location.href = '/login';
      } else {
        alert('Erro ao cadastrar. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'O nome é obrigatório',
              minLength: { value: 3, message: 'O nome deve ter pelo menos 3 caracteres' }
            })}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            aria-required="true"
          />
          {errors.name && (
            <span className={styles.errorMessage} role="alert">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'O e-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Por favor, insira um e-mail válido'
              }
            })}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            aria-required="true"
          />
          {errors.email && (
            <span className={styles.errorMessage} role="alert">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'A senha é obrigatória',
              minLength: { value: 6, message: 'A senha deve ter pelo menos 6 caracteres' }
            })}
            className={`${styles.input} ${errors.password ? styles.error : ''}`}
            aria-required="true"
          />
          {errors.password && (
            <span className={styles.errorMessage} role="alert">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`${styles.button} ${loading ? styles.loading : ''}`}
          aria-disabled={loading}
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};
