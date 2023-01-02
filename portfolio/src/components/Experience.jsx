import styles from '../style'
import { expLinks } from '../constants';
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Experience = () => {
    return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>   
        <section className="flex flex-col m-20">
            <div className={`${styles.heading2} text-center`}>
                Experience 
            </div>
            <div className="flex flex-row justify-center">
                <div className={`flex flex-col ${styles.paragraph}`}>
                    {expLinks.map((exp, index) => (
                        <ul className="text-white m-6 p-4 gradient__border">
                            <li key={exp.id} className="flex flex-row"> 
                                <div className="sm:min-w-[20%] min-w-[25%]">
                                    {exp.title} 
                                </div>
                                <ul className="text-dimWhite sm:m-0 ml-10">
                                    <li> {exp.duration} </li>
                                    <li> {exp.content1} </li>
                                    <li> {exp.content2} </li>
                                    <li> {exp.content3} </li>
                                    <li> {exp.content4} </li>
                                </ul>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>  

        </section>
    </AnimationOnScroll>
    );
};

export default Experience