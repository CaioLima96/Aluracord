function GlobalStyle() {
	return (
		<style global jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&display=swap');

            *, *::after, *::before  {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Roboto', sans-serif;
                list-style: none;
            }

            body {
                background-color: #e5e4e4;
            }
            

            /* App fit Height */ 

            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next {
                flex: 1;
            }
            #__next > * {
                flex: 1;
            }
             
        `}</style>
	)
}

export default function MyApp({ Component, pageProps }) {
    
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />     
        </>
    )
}   