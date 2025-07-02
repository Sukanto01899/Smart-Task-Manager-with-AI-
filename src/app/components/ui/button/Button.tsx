import React from 'react';
import { IconType } from 'react-icons';

const buttonVariants = {
    icon: "rounded-full hover:bg-gray-500 text-xl h-10 w-10 transition-all duration-500",
    ai: "bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 to-blue-400 py-1 px-2 rounded-lg gap-2",
    lg: "w-full bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 to-blue-400 py-2 rounded-lg text-lg hover:bg-blue-400 transition-all duration-500 gap-4  uppercase",
    md: "bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 to-blue-300 py-2 rounded-lg text-lg",
}

type ButtonProps = {
    text?: string;
    Icon?: IconType;
    variant: keyof typeof buttonVariants;
}& React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({text, Icon, variant, ...rest} : ButtonProps) => {
    return (
        <button {...rest} className={`flex justify-center items-center cursor-pointer ${buttonVariants[variant]}`}>
            {text && text} {Icon && <Icon />}
        </button>
    );
};

export default Button;