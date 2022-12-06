import NavBar from "./Components/Nav/NavBar.js";
import Rarity from "./Components/Rarity/Rarity";
import Text from "./Components/Text/Text";
import Video from "./Components/Video/Video";
import About from "./Components/About/About";
import Spot from "./Components/SpotLight/Spot";
import Team from "./Components/Team/Team";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Timeline from "./Components/Roadmap/Timeline";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Rarity />
      </div>
      <div>
        <Text />
      </div>

      <div>
        <Video />
      </div>
      <div>
        <About />
      </div>
      <div className="mt-5">
        <Timeline />
      </div>
      <div className="mt-5">
        <Team />
      </div>
      <div className="mt-5">
        <Faq />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
