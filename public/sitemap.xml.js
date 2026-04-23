const links = [
  { href: "/hiring-solutions" },
  { href: "/about-us" },
  { href: "/industries" },
  { href: "/services/permanent-hirings" },
  { href: "/services/contract-hiring" },
  { href: "/services/executive-search" },
  { href: "/services/rpo" },
];

function generateSiteMap(baseUrl) {
  const date = new Date().toISOString().split("T")[0];

  const urls = links
    .map((link) => {
      return `
        <url>
          <loc>${baseUrl}${link.href}</loc>
          <lastmod>${date}</lastmod>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      
      <url>
        <loc>${baseUrl}/</loc>
        <lastmod>${date}</lastmod>
        <priority>1.0</priority>
      </url>

      ${urls}

    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const baseUrl = "https://career-point.vercel.app";

  const sitemap = generateSiteMap(baseUrl);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}