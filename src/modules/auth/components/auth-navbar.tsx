'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthNavbar() {
  const pathname = usePathname();
  const isSignIn = pathname === '/sign-in';

  return (
    <nav className="flex items-center justify-between">
      <Image src="/logo.svg" alt="Logo" width={152} height={50} />
      <Link
        href={isSignIn ? '/sign-up' : 'sign-in'}
        className={cn(buttonVariants({ variant: 'outline' }))}
      >
        {isSignIn ? 'Sign up' : 'Login'}
      </Link>
    </nav>
  );
}
