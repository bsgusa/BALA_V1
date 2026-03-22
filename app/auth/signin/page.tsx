import React from 'react';
import { signIn } from 'next-auth/react';

const SignInPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      // Handle error
      console.error('Failed to sign in', result.error);
    } else {
      // Handle success (e.g., navigate to the home page)
      window.location.href = '/';
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
        <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default SignInPage;