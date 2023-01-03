import {styles, layout} from './style';
import {Navbar, Hero, Experience, About, Skills, Contact, Footer, Sidebar} from './components';

const App = () => (
    <div id="home" className="bg-black w-full sm:overflow-visible overflow-hidden">
        <Sidebar />
        <Navbar />
        <Hero/>
        <div id="about_me" className={`${layout.section}`}>
            <About />
            <Skills />
        </div>
        <div id="experience">
            <Experience/> 
        </div>
        <div id="contact">
            <Contact/>  
        </div>
        <Footer />
    </div> 
)

export default App;