import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="bg-neutral-100 min-h-svh">
      <div className="max-w-screen-2xl mx-auto p-4">
        <nav className="flex items-center justify-between">
          <Image src="/logo.svg" alt="Logo" width={152} height={50} />
          <Button type="button" variant="outline">
            Sign up
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center p-4 md:p-14">
          {children}
        </div>
      </div>
    </div>
  );
}
