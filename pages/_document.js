import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
        {/* poppins font */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:wght@300;400;500;700&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"></link>
        {/* redressed font  */}
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lobster&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Caslon+Text:wght@700&family=Lobster&family=Lora:wght@700&family=Poppins:wght@500;600;700&family=Quicksand:wght@300;400;500;600;700&family=Redressed&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Work+Sans:ital,wght@0,200;0,500;0,600;0,800;1,200;1,600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Head>   
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}