import styles from '../style'
import {DiPython, DiPhp, DiCss3, DiSass, DiHtml5, DiGithubBadge, DiReact, DiJsBadge, DiBootstrap, DiMagento,} from 'react-icons/di'
import {SiCplusplus, SiC, SiTailwindcss, SiMicrosoftsqlserver, SiMysql, SiTypescript } from 'react-icons/si'

const Skills = () => (
    <section className="md:mx-40 sm:mx-32 mx-16">
        <div className={`${styles.heading2} my-5`}>
            Skills:
        </div>
        <div className={`flex flex-wrap justify-center ${styles.icons} `}>    
            <DiPython className="sm:mx-5 sm:mb-5 m-1" title="Python"/> 
            <SiC className="sm:mx-5 sm:mb-5 m-1" title="C"/>
            <SiCplusplus className="sm:mx-5 sm:mb-5 m-1" title="C++"/>
            <DiHtml5 className="sm:mx-5 sm:mb-5 m-1" title="HTML5"/>
            <DiCss3 className="sm:mx-5 sm:mb-5 m-1" title="CSS3"/>
            <DiSass className="sm:mx-5 sm:mb-5 m-1" title="Sass"/>
            <DiBootstrap className="sm:mx-5 sm:mb-5 m-1" title="Bootstrap 5"/>
            <SiTailwindcss className="sm:mx-5 sm:mb-5 m-1" title="Tailwind CSS"/>
            <DiJsBadge className="sm:mx-5 sm:mb-5 m-1" title="JavaScript"/>
            <SiTypescript className="sm:mx-5 sm:mb-5 m-1" title="TypeScript"/> 
            <DiReact className="sm:mx-5 sm:mb-5 m-1" title="React.js"/>            
            <DiPhp className="sm:mx-5 sm:mb-5 m-1" title="PHP"/> 
            <DiMagento className="sm:mx-5 sm:mb-5 m-1" title="Magento"/>                       
            <DiGithubBadge className="sm:mx-5 sm:mb-5 m-1" title="Github"/>                     
            <SiMicrosoftsqlserver className="sm:mx-5 sm:mb-5 m-1" title="Microsoft SQL Server"/>
            <SiMysql className="sm:mx-5 sm:mb-5 m-1" title="MySQL"/>            
        </div>
    </section>
);

export default Skills