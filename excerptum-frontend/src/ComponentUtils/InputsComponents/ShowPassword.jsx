import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export const ShowPassword = ({
    showPassword,
    setShowPassword,
    showPasswordClass
}) => {
    return (
        showPassword ? (
            <FaRegEyeSlash
                size={30}
                onClick={() => setShowPassword(false)}
                className={`absolute ${showPasswordClass} h-full pr-3 cursor-pointer`}
            />) :
            (<FaRegEye
                size={30}
                onClick={() => setShowPassword(true)}
                className={`absolute ${showPasswordClass} h-full pr-3 cursor-pointer`}
            />)
    )
}
