import Image from 'next/image';
import Link from 'next/link';

export function HeaderLogo() {
  return (
    <Link
      href="/"
      title="This.Web Logo"
      className="animate-in fade-in-0 slide-in-from-bottom-20 duration-1000 ease-in-out"
    >
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
          className="-translate-y-[1px]"
          title="This.Web Logo Image"
        />
        <p className="font-mono font-semibold">This.Web</p>
      </div>
    </Link>
  );
}
