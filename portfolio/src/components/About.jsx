import styles from '../style'

const About = () => (
    <section className="md:mx-40 sm:mx-32 mx-16">
        <div className={`${styles.heading2} my-5`}>
            Get to know me!
        </div>
        <div className={`${styles.paragraph}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu placerat tellus, a faucibus nisi. Aenean tristique, mauris sit amet finibus vestibulum, dolor arcu ullamcorper magna, rutrum placerat diam nisl at lectus. <br /> Duis id diam eu neque condimentum sagittis. Etiam vestibulum vel felis a facilisis. Aliquam in orci vitae est sollicitudin tincidunt vel vitae augue. Vestibulum mollis pulvinar tellus, ut accumsan felis sagittis eget.<br /> Donec varius aliquet arcu at egestas. Vivamus sit amet ex iaculis, tincidunt tortor quis, tempus ligula. Cras congue lobortis neque a commodo. Donec sollicitudin molestie orci, sit amet facilisis tortor gravida non. In consectetur commodo massa id mattis. 
        </div>
    </section>
);

export default About