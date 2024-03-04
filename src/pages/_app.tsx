import '../styles/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';
import Head from 'next/head';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any; 
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" />
      </Head>
      <Header />
      <div className="flex-grow">
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
