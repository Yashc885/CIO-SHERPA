import "./globals.css";
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const metadata = {
  title: "CIO Sherpa Council",
  description: "Community That works together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
       <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      </Head>
      <body className="font-merriweather">
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>
            AOS.init();
          </script>
      </body>
    </html>
  );
}
