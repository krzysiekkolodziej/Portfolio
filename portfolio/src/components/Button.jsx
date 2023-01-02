import styles from '../style'

const Button = ({text}) => {
  return (
        <button type="button" className="gradient__button p-6 mt-5 font-poppins font-medium text-[18px] gradient">
            {text}
        </button>
  )
}

export default Button

