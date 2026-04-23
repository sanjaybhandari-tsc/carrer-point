import Head from "next/head";
import PermanentHirings from "@/components/PermanentHirings/index";

export default function PermanentHiringsPage() {
  return (
    <>
      <Head>
        <title>
          Permanent Hiring Services | Long-Term Talent Recruitment | Career Point
        </title>

        <meta
          name="description"
          content="Permanent hiring solutions for long-term talent acquisition. We help organizations find skilled professionals who align with company culture and contribute to sustainable growth."
        />

        <meta
          name="keywords"
          content="permanent hiring, long-term recruitment, full-time staffing, talent acquisition, executive recruitment, skilled professionals hiring, career point placement"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://carrer-point.vercel.app/services/permanent-hirings"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Permanent Hiring Services | Long-Term Talent Recruitment"
        />

        <meta
          property="og:description"
          content="Hire the right professionals for long-term roles with structured evaluation and industry-focused recruitment solutions."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://carrer-point.vercel.app/services/permanenthirings"
        />

        {/* IMPORTANT: use PNG/JPG instead of SVG */}
        {/* <meta
          property="og:image"
          content="https://carrer-point.vercel.app/images/permanentHiring/permanent-hiring-1200x630.png"
        /> */}
        
      </Head>

      <PermanentHirings />
    </>
  );
}