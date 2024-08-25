import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.scss';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta gerekli'),
  password: Yup.string().required('Şifre gerekli'),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <h1>Giriş Yap</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          try {
            const response = await login(values);
            console.log('Giriş başarılı:', response.data);
            // Burada token'ı localStorage'a kaydedebilirsiniz
            localStorage.setItem('token', response.data.token);
            navigate('/'); // Ana sayfaya yönlendir
          } catch (error) {
            console.error('Giriş hatası:', error);
            setFieldError('email', 'Geçersiz e-posta veya şifre');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Şifre</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;