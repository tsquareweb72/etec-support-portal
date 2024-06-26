'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState (null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    }, [])

    return (
        <nav className='flex-between w-full mb-16 bg-blue-950 rounded-b-lg p-3'>
     {  /* <nav className=' navbar navbar-expand-lg z-index-3 py-3 bg-gradient-primary navbar-primary'> */}
          <Link href='/' className='flex gap-2 flex-center'>
            <Image
              src='/assets/images/ETECServicesLogoNoBoxwhitesm.png'
              alt='logo'
              width={150}
              height={68}
              className='object-contain'
            />
          </Link>
{/*        {alert(session?.user)}  
{alert(providers)}*/}
          {/* Desktop Navigation */}
          <div className='sm:flex hidden'>
            <div className='px-8 flex gap-3 md:gap-5'>
                <Link href='https://my.splashtop.com/sos/packages/download/KK37JYX52AL5' className='blue_btn'>
                    Remote Support
                </Link>
            </div>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />
                    {toggleDropdown && (
                        <div className='dropdown_full'>
                            <Link
                                href='/profile'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown (false)}
                                >
                                {session?.user.name}'s Profile
                                <br/> {session?.user.email}
                            </Link>
                            <Link
                                href='/create-ticket'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown (false)}
                                >
                                Create Ticket
                            </Link>
                            <Link
                                href='/create-prompt'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown (false)}
                                >
                                Create Prompt
                            </Link>
                            <Link
                                href='/create-contact'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown (false)}
                                >
                                Create Contact
                            </Link>
                            <Link
                                href='/tickets'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown (false)}
                                >
                                My Tickets
                            </Link>
                            <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className='mt-5 w-full black_btn'
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ): (
                <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                  }}
                                className='black_btn'
                            >
                                Sign In
                            </button>
                        ))}
                </>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className='sm:hidden flex relative'>
            {session?.user ? (
                <div className='flex'>
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link
                                href='/profile'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown (false)}
                                >
                                {session?.user.name}'s Profile
                                <br/> {session?.user.email}
                            </Link>
                            <Link
                                href='/create-prompt'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown (false)}
                                >
                                Create Prompt
                            </Link>
                            <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className='mt-5 w-full black_btn'
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
           ): (
            <>
                {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                            type='button'
                            key={provider.name}
                            onClick={() => {
                                signIn(provider.id);
                              }}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    ))}
            </>
        )}
          </div>
        </nav>
  )
}

export default Nav