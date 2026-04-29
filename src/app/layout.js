import Navbar from "@/components/layout/navber";
import "./globals.css";
import Footer from "@/components/layout/footer";




export const metadata = {
  title: "Accredian Enterprise | Upskill Your Team",
  description: "Official Accredian Enterprise Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900 selection:bg-blue-100">
        <Navbar />
        {/* The 'min-h-screen' ensures the footer stays down on short pages */}
        <main className="min-h-screen">
          {children}
        </main>
       <Footer/>       
      </body>
    </html>
  );
}