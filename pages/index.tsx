import {
  NavBar,
  About,
  Contact,
  Features,
  Footer,
  Landing,
  Portfolio,
  Services,
} from "@/layouts";

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Landing />
        <Features />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
