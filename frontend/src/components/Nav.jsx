"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);  
    const [providers, setProviders] = useState(null);

    useEffect(() =>{
        const setProviders = async () =>{
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
    },[])

    return (
       <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image
                src="/assets/logo.svg"
                alt="logo"
                width={150}
                height={150}
                className='object-contain'
            />            
        </Link>

        {/*Desktop Navigation*/}
        <div className='sm:flex hidden'>
            {isLogged ? (
            <div className='flex gap-3 md:gap-5'> 
                <Link href='/' className='pink_btn'>
                    Find a Country
                </Link>
                <button type="button" onClick={() => setIsLogged((prev) => !prev)} className='outline_btn'>
                    Sign Out
                </button>           
            </div> 
            ) : (
            <>
              <button
                type='button'
                onClick={() => setIsLogged((prev) => !prev)}
                className='pink_btn'
              >
                Sign in
              </button>
            </>
            )}
        </div>
        {/* Mobile Navigation */}

      <div className='sm:hidden flex relative'>
        {isLogged ? (
          <div className='flex'>
            <Image
              src="/assets/sandwich.jpg"          
              width={37}
              height={37}
              className='rounded-full'
              alt='menu'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown((prev) => !prev)}
                >
                  My Profile
                </Link>
                <Link
                  href='/'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown((prev) => !prev)}
                >
                  Find Country
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown((prev) => !prev);
                    setIsLogged((prev) => !prev)
                  }}
                  className='mt-5 w-full pink_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (          
          <>
  
            <button
              type='button'
              onClick={() => {setIsLogged((prev) => !prev)}}
              className='pink_btn'
            >
              Sign in
            </button>

          </>
        )}
      </div>
    </nav>
  )
}

export default Nav