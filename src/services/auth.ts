'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export interface AuthCredentials {
  email: string;
  password: string;
}

async function getClient() {
  return await createClient();
}

export async function login(credentials: AuthCredentials) {
  const supabase = await getClient();

  const { error } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(credentials: AuthCredentials) {
  const supabase = await getClient();

  const { error } = await supabase.auth.signUp(credentials);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function logout() {
  const supabase = await getClient();
  await supabase.auth.signOut();
  redirect('/');
}
