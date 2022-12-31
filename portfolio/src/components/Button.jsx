import styles from '../style'

const Button = ({text}) => {
  return (
        <button type="button" className="p-6 mt-5 font-poppins font-medium text-[18px] text-gradient rounded-[10px] outline-none border-[2px] border-[#16cfaa] bg-white">
            {text}
        </button>
  )
}

export default Button

