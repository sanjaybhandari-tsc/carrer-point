import Head from "next/head";
import GetInTouchView from "@/components/GetInTouch/index";

export default function GetInTouchPage() {
  const title = "Get In Touch | Career Point Placement Services";

  const description =
    "Connect with Career Point Placement Services for recruitment solutions, hiring support, staffing services, and business inquiries across India.";

  const url =
    "https://career-point-placement-services.vercel.app/getIn-Touch";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          name="keywords"
          content="contact recruitment agency, hiring support India, staffing solutions, placement consultancy contact, career point placement services"
        />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:site_name"
          content="Career Point Placement Services"
        />

        {/* Theme */}
        <meta name="theme-color" content="#0f172a" />
      </Head>

      <GetInTouchView />
    </>
  );
}