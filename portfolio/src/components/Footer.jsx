import styles from '../style'
import {BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => (
    <section className="w-full z-[1] overflow-hidden border-t-[1px] border-t-[#3F3E45] mt-10">
        <div className="flex md:flex-row flex-col justify-between items-center mx-2 sm:my-1 my-2">
            <div className="justify-center font-poppins font-normal text-center text-[14px] leading-[27px] text-dimWhite">
                 Copyright &copy; 2022 Krzysztof Kołodziej. All Rights Reserved. 
            </div>
            <div className={`${styles.socialIcons} flex flex-row`}>
                <a href="https://www.linkedin.com/in/krzysztof-kolodziej/" target="_blank"> 
                    <BsLinkedin className="m-2" title="LinkedIn"/> 
                </a>
                <a href="https://www.facebook.com/KrzysiekKolodz/" target="_blank"> 
                    <BsFacebook className="m-2" title="Facebook"/> 
                </a>                
                <a href="https://github.com/krzysiekkolodziej" target="_blank"> 
                    <BsGithub className="m-2" title="Github"/> 
                </a>
            </div>
        </div>
    </section>
);

export default Footer