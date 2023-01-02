import styles from './style';
import {Navbar, Hero, Experience} from './components';

const App = () => (
    <div className="bg-black w-full overflow-hidden">
        <Navbar />
        <Hero />
        <Experience />
    </div> 
)

export default App;