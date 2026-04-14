import Navbar from "./Navbar"; 
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-0 [&>*]:pt-0 [&>*]:mt-0">
        {children}
      </main>
      <Footer />
    </>
  );
}