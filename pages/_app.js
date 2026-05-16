// import "@/styles/globals.css";
// import Head from "next/head";
// import Layout from "@/components/Layout/Layout";

// import { Inter, Montserrat, Roboto } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   display: "swap",
//   variable: "--font-inter",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-montserrat",
// });
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-roboto",
//   display: "swap",
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>Career Point Placement Services</title>
//         <meta
//           name="description"
//           content="Recruitment agency in India with 17+ years experience. Career Point offers placement, staffing, and hiring solutions with 15,000+ successful placements."
//         />
//         <meta
//           name="keywords"
//           content="recruitment agency India, placement services, staffing solutions, hiring services, job consultancy, jobs in India, recruitment company"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="robots" content="index, follow" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//       </Head>

//       <Layout>
//         <main
//           className={`${inter.variable} ${montserrat.variable} ${roboto.variable}`}
//         >
//           <Component {...pageProps} />
//         </main>
//       </Layout>
//     </>
//   );
// }

import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";

import { Inter, Montserrat, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const title = "Career Point Placement Services";
  const description =
    "Recruitment agency in India with 17+ years experience. Career Point offers placement, staffing, and hiring solutions with 15,000+ successful placements.";
  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";
  const url = "https://career-point-placement-services.vercel.app/";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="recruitment agency India, placement services, staffing solutions, hiring services, job consultancy, jobs in India, recruitment company"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-64.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta
          property="og:site_name"
          content="Career Point Placement Services"
        />

        <meta name="theme-color" content="#0f172a" />
      </Head>

      <Layout>
        <main
          className={`${inter.variable} ${montserrat.variable} ${roboto.variable}`}
        >
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
