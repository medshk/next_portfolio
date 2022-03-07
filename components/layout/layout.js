import Head from 'next/head';
import React, { useState } from 'react';
import Burger from '../buttons/burger';
import SideBar from './sideBar';

const Layout = ({children}) => {
    const [toggleMenuBar, setToggleMenuBar] = useState(false)
    return (
        <>
        <Head>
            <title>MB | Web Developer | Freelancer</title>
            <meta name="description" content="Hire  Freelancer. Building animations and interactive experiences, back-end developement"></meta>
            <meta name="robot" content="index, follow"></meta>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        </Head>
        <div className='flex overflow-x-hidden'>
            <SideBar toggleMenuBar={toggleMenuBar}/>
            <Burger setToggleMenuBar={setToggleMenuBar}/>
            <main className='lg:ml-36 w-full bg-bground '>
                {children}
            </main>
        </div>
        </>
    );
}

export default Layout;
