import {Html, Main, Head, NextScript} from 'next/document'

function _document() {
  return (
    <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&family=Poppins:wght@400;500;600;700&family=STIX+Two+Text:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600&f[]=satoshi@700,500,400&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}

export default _document
