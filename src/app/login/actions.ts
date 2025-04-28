'use server';

import { login as authLogin, signup as authSignup, logout as authLogout } from '@/services/auth';

export async function login(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  await authLogin(data);
}

export async function signup(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  await authSignup(data);
}

export async function logout() {
  await authLogout();
}
