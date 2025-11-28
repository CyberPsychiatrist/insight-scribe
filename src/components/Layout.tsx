import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { BarChart2, Upload, MessageSquare, Settings, Users, LogOut, File, Menu, X } from 'lucide-react';

const NavContent = () => (
  <>
    <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
      <Link
        to='/'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <BarChart2 className='h-4 w-4' />
        Dashboard
      </Link>
      <Link
        to='/upload'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <Upload className='h-4 w-4' />
        Upload Document
      </Link>
      <Link
        to='/chat'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <MessageSquare className='h-4 w-4' />
        Chat with Docs
      </Link>
      <Link
        to='/admin'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <Users className='h-4 w-4' />
        Admin Panel
      </Link>
    </nav>
    <div className='mt-auto p-4'>
      <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
        <Link
          to='/settings'
          className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
        >
          <Settings className='h-4 w-4' />
          Settings
        </Link>
        <Link
          to='/login'
          className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
        >
          <LogOut className='h-4 w-4' />
          Logout
        </Link>
      </nav>
    </div>
  </>
);

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-muted/40 md:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <Link to='/' className='flex items-center gap-2 font-semibold'>
              <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/03ebbed2-8ce6-43b7-a1d5-e3d7d802c70d/logo-zusldcd-1764310604835.webp' alt='AkiliDocs Logo' className='w-8 h-8' />
              <span className=''>AkiliDocs</span>
            </Link>
          </div>
          <div className='flex-1'>
            <NavContent />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='md:hidden p-2 text-muted-foreground'>
            {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
          <div className='w-full flex-1'>
            {/* Can be dynamic based on route */}
          </div>
          <ThemeToggle />
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <Outlet />
        </main>
      </div>
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-40 bg-black/50 md:hidden' onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      <div className={`fixed top-0 left-0 h-full w-[220px] bg-muted/40 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className='flex h-full max-h-screen flex-col gap-2'>
            <div className='flex h-14 items-center border-b px-4'>
                <Link to='/' className='flex items-center gap-2 font-semibold'>
                <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/03ebbed2-8ce6-43b7-a1d5-e3d7d802c70d/logo-zusldcd-1764310604835.webp' alt='AkiliDocs Logo' className='w-8 h-8' />
                <span className=''>AkiliDocs</span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className='ml-auto p-2 text-muted-foreground'>
                    <X className='h-6 w-6' />
                </button>
            </div>
            <div className='flex-1 py-2'>
                <NavContent />
            </div>
        </div>
      </div>
    </div>
  );
}