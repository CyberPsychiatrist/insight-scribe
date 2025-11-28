import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-background p-4'>
      <div className='absolute top-4 right-4'>
        <ThemeToggle />
      </div>
      <Card className='mx-auto max-w-sm w-full'>
        <CardHeader>
          <div className='flex justify-center mb-4'>
             <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/03ebbed2-8ce6-43b7-a1d5-e3d7d802c70d/logo-zusldcd-1764310604835.webp' alt='AkiliDocs Logo' className='w-24 h-24' />
          </div>
          <CardTitle className='text-2xl text-center'>Login to AkiliDocs</CardTitle>
          <CardDescription className='text-center'>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <Link to='#' className='ml-auto inline-block text-sm underline'>
                  Forgot your password?
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full' onClick={() => window.location.href='/'}>
              Login
            </Button>
            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link to='/signup' className='underline'>
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}