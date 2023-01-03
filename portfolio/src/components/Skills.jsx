import styles from '../style'
import {DiPython, DiPhp, DiCss3, DiSass, DiHtml5, DiGithubBadge, DiReact, DiJsBadge, DiBootstrap,} from 'react-icons/di'
import {SiCplusplus, SiC, SiTailwindcss, SiMicrosoftsqlserver, SiMysql, SiTypescript } from 'react-icons/si'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Skills = () => (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>   
        <section className={`overflow-hidden md:mt-0 mt-20 ${styles.marginX}`}>
            <div className={`${styles.heading2} text-center  my-5`}>
                Skills:
            </div>
            <div className={`flex flex-wrap justify-center ${styles.icons} `}>    
                <div className="absolute z-[0] w-[40%] h-[40%] rounded-full top-auto blue__gradient" />

                <DiPython className={`${styles.marginXIcons}`} title="Python"/> 
                <SiC className={`${styles.marginXIcons}`} title="C"/>
                <SiCplusplus className={`${styles.marginXIcons}`} title="C++"/>
                <DiHtml5 className={`${styles.marginXIcons}`} title="HTML5"/>
                <DiCss3 className={`${styles.marginXIcons}`} title="CSS3"/>
                <DiSass className={`${styles.marginXIcons}`} title="Sass"/>
                <DiBootstrap className={`${styles.marginXIcons}`} title="Bootstrap 5"/>
                <SiTailwindcss className={`${styles.marginXIcons}`} title="Tailwind CSS"/>
                <DiJsBadge className={`${styles.marginXIcons}`} title="JavaScript"/>
                <SiTypescript className={`${styles.marginXIcons}`} title="TypeScript"/> 
                <DiReact className={`${styles.marginXIcons}`} title="React.js"/>            
                <DiPhp className={`${styles.marginXIcons}`} title="PHP"/> 
                <DiGithubBadge className={`${styles.marginXIcons}`} title="Github"/>                     
                <SiMicrosoftsqlserver className={`${styles.marginXIcons}`} title="Microsoft SQL Server"/>
                <SiMysql className={`${styles.marginXIcons}`} title="MySQL"/>            
            </div>
        </section>
    </AnimationOnScroll>
);

export default Skills