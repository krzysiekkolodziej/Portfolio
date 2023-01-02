import styles from '../style'
import { useState } from 'react';
import { send } from '@emailjs/browser';
import { AnimationOnScroll } from 'react-animation-on-scroll'


const Contact = () => {
        
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
    });
    
    const onSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Submit”
        
        send(
            'service_q0dx4na',
            'template_i1k6uhn',
            toSend,
            'qKsxjt3xGcQZkfiT1'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
          .catch((err) => {
            console.log('FAILED...', err);
        });
        
        setToSend({from_name: '', to_name: '', message: ''})
        alert('Email sent successfully!')
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <section className="flex flex-col justify-center text-center md:mx-96 sm:mx-32 mx-16">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>   
                <div className={`${styles.heading2} my-5`}>
                    Contact
                </div>
                <div className={`${styles.paragraph}`}>
                If you want to contact me, please fill out the form below, I will reply as soon as possible!
                </div>
                <form onSubmit={onSubmit} className="z-[1] flex flex-col">
                    <label htmlFor="name" className={`${styles.paragraph} text-left my-5 `}>
                    Name:
                    </label>
                    <input type="text" id="name" name="from_name"  value={toSend.from_name} onChange={handleChange} placeholder="Enter your name" title="This input is required!" className="form-input bg-black-gradient gradient__button text-dimWhite border border-dimWhite block w-full p-2.5 focus:ring-0" required></input>

                    <label htmlFor="email" className={`${styles.paragraph} text-left my-5 `}>
                    Email:
                    </label>
                    <input type="email" id="email" name="to_name" value={toSend.to_name} onChange={handleChange} placeholder="Enter your email" title="This input is required!" className="form-input bg-black-gradient gradient__button text-dimWhite border border-dimWhite block w-full p-2.5 focus:ring-0" required></input>
                    
                    <label htmlFor="message" className={`${styles.paragraph} text-left my-5 `}>
                    Message:
                    </label>
                    <textarea minLength="20" rows="10" id="message" name="message" value={toSend.message} onChange={handleChange} placeholder="Enter your message" title="This input is required!" className="form-textarea bg-black-gradient gradient__button text-dimWhite border border-dimWhite block w-full p-2.5 focus:ring-0 " required></textarea>

                    <div className="flex flex-row justify-end w-full">
                        <button type="submit" className="justify-end gradient__button p-6 mt-5 font-poppins font-semibold text-[18px] gradient min-w-[25%]">
                            Submit
                        </button>
                    </div>

                </form>
            </AnimationOnScroll>
            <div className="absolute z-[0] w-[50%] h-[50%] rounded-full  bottom-auto white__gradient" />
        </section>
    
    );
};

export default Contact;