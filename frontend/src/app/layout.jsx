import '@styles/globals.css';
import Nav from '@components/Nav';
import Head from 'next/head';



export const metadata = {
    title: 'Bounce Insights',
    description: 'Software Engineer Intern coding challenge!'
}
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9" />
      </Head>
      <body >
        <div className="main">
          <div className="gradiante" />
        </div>
        <main className="app mb-10">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;