import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <Button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Sign in with Google
      </Button>
    </form>
  );
}