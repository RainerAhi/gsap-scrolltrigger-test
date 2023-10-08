import Experience from "./Experience";
import { SectionOne } from "./Sections/SectionOne";
import { SectionThree } from "./Sections/SectionThree";
import { SectionTwo } from "./Sections/SectionTwo";

function App() {
    return (
        <main className="main" >
            <div  className="experience">
                <Experience />
            </div>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            
        </main>
    )
}

export default App;