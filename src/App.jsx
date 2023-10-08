import Experience from "./Experience";
import { SectionOne } from "./Sections/SectionOne";
import { SectionThree } from "./Sections/SectionThree";
import { SectionTwo } from "./Sections/SectionTwo";

function App() {
    return (
        <div>
            <div  className="experience">
                <Experience />
            </div>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            
        </div>
    )
}

export default App;