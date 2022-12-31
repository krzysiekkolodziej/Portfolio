import styles from '../style'
import Button from "./Button";
import {CV} from '../assets'

const Hero = () => (
    <section className="md:m-40 sm:m-32 m-16">
        <div className={`text-gradient ${styles.paragraph}`}>
            Hi, my name is
        </div>
        <div className={styles.heading2}>
            Krzysztof Kolodziej. <br/>
            <span className="text-dimWhite">I'm software engineer</span>
        </div>
        <div className={`${styles.paragraph} max-w-[60%]`}>
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
        </div>
        
        <a href={CV} title="CV" target="_blank">
            <Button text="Download my CV!"/> 
        </a>
    </section>
);

export default Hero