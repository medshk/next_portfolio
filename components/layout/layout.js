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

            {/* poppins font */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:wght@300;400;500;700&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"></link>
            {/* redressed font  */}
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lobster&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lobster&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
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
