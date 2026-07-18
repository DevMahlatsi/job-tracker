import AddApplication from "../components/AddApplication";
import Applications from "../components/Applications";
import NavBar from "../components/Nav-Bar";
import Stats from "../components/Stats";


export default function Home() {
  return <>   
    <NavBar/>
    <Stats/>
    <AddApplication/>
    <Applications/>
    {/* do I see something here? yes i did */}
  </>
};
