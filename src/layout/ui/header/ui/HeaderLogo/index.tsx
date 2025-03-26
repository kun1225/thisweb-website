import Image from 'next/image';
import Link from 'next/link';

export function HeaderLogo() {
  return (
    <Link href="/" title="This.Web Logo">
      <div className="g-header__logo flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
          className="g-header__logo__img origin-left -translate-y-[1px] scale-100 transition duration-[0.4s]"
          title="This.Web Logo Image"
        />
        <p className="g-header__logo__text translate-x-0 font-mono font-semibold transition-transform duration-[0.4s]">
          This.Web
        </p>
      </div>
    </Link>
  );
}
