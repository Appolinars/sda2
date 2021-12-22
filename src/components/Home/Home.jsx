import Intro from "@components/HomeSections/Intro/Intro";
import Showreel from "@components/HomeSections/Showreel/Showreel";
import Problems from "@components/HomeSections/Problems/Problems";
import Projects from "@components/HomeSections/Projects/Projects";
import Work from "@components/HomeSections/Work/Work";
import Clients from "@components/HomeSections/Clients/Clients";
import Download from "@components/HomeSections/Download/Download";
import Sign from "@components/HomeSections/Sign/Sign";
import Contact from "@components/HomeSections/Contact/Contact";

const Home = () => {
  return (
    <>
      <Intro />
      <Showreel />
      <Clients />
      <Projects />
      <Work />
      <Download />
      <Problems />
      <Sign />
      <Contact />
    </>
  );
};

export default Home;
