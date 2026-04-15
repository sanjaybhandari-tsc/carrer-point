import Navbar from "./Navbar"; 
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <main className="min-h-screen p-0 -mt-20"> */}
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}