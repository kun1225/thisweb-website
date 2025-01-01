import Link from 'next/link';
import Image from 'next/image';

export function HeaderLogo() {
  return (
    <Link href="/" title="This.Web Logo">
      <div className="g-header__logo">
        <Image
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
          className="g-header__logo__img"
          title="This.Web Logo Image"
        />
        <p className="g-header__logo__text">This.Web</p>
      </div>
    </Link>
  );
}
