import { Navbar } from "../utilsComponent/Navbar";
import Footer from "../utilsComponent/Footer";
import HomePage from "./HomePage";


export const PokeWikiFrame = () => {
  return (
    <div className="container-fluid mx-auto position-relative p-0 m-0" style={{ minWidth: '200px' }}>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};
