import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Competencies from "./components/Competencies";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import BusinessPortfolio from "./components/BusinessPortfolio";
import Leadership from "./components/Leadership";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <Dashboard />
        <Competencies />
        <Experience />
        <Timeline />
        <BusinessPortfolio />
        <Leadership />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
