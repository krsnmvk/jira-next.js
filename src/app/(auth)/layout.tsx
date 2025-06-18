import AuthNavbar from '@/modules/auth/components/auth-navbar';

export default function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="bg-neutral-100 min-h-svh">
      <div className="max-w-screen-2xl mx-auto p-4">
        <AuthNavbar />
        <div className="flex flex-col items-center justify-center p-4 md:p-14">
          {children}
        </div>
      </div>
    </div>
  );
}
