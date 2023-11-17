import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Bounce Insights',
    description: 'Software Engineer Intern coding challenge!'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <Provider>
            <body>
                <div className="main">
                    <div className="gradiante"/>
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                    <Footer/>

                </main>
            </body>
        </Provider>
    </html>
  )
}

export default RootLayout