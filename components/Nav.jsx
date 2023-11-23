"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/favicon.ico'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Isetricity Energy</p>
      </Link>
    </nav>
  );
};

export default Nav;
