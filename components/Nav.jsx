"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className='flex-between w-full pb-1.5 pt-1.5 bg-gray-900'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/favicon.ico'
          alt='logo'
          width={40}
          height={40}
          className='object-contain ml-1.5 border-blue-500 '
        />
        {/* <p className='logo_text'>Isetricity Energy</p> */}
      </Link>
      <div className='text-gray-100'> A </div>
    </nav>
  );
};

export default Nav;
