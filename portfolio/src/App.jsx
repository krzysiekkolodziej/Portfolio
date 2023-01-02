import {styles, layout} from './style';
import {Navbar, Hero, Experience, About, Skills, Contact} from './components';

const App = () => (
    <div className="bg-black w-full overflow-hidden">
        <Navbar />
        <Hero />
        <section className={`${layout.section}`}>
            <About />
            <Skills />
        </section>
        <Experience /> 
        <Contact />  
    </div> 
)

export default App;