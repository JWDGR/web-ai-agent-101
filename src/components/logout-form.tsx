'use client';

import { Button } from '@/components/ui/button';
import { logout } from '@/app/login/actions';

export function LogoutForm() {
  return (
    <form action={logout}>
      <Button variant="outline" type="submit">
        Logout
      </Button>
    </form>
  );
}
