import React from "react";

const Button = ({
    children,
    onClick,
    variant = "primary",
    size = 'medium',
    className = ''
}) =>{

    const baseStyles = "rounded-3xl font-medium transition-colors duration-200 shadow-lg flex items-center justify-center";

    const variants = {
        primary: "bg-green-400 hover:bg-green-500 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
        danger: "bg-red-400 hover: red-500 text-white"
    };

    const sizes = {
        small: "w-24 h-24 text-sm",
        medium: "w-32 h-32 text-xl",
        large: "w-40 h-40 text-2xl"
    };

    const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;


    return (<Button
        className={buttonStyles}
        onClick={onClick}
    >
        {children}
    </Button>
    );
};

const ButtonFunc = () =>{
    const handleClick = (buttonName)=>{
        alert(`${buttonName} button clicked`);
    };


    return (<div className="min-h-screen bg-sky-200 flex flex-col items-center justify-center gap-8">
        <div className="flex gap-8">
            <button 
                onClick={()=> handleClick('Pause')}
                variant="primary"
                size="large"
            >
                Pause
            </button>
            <button
                 onClick={()=> handleClick('Talk')}
                variant="primary"
                size="large"
            >
                Talk
            </button>
            <button
                 onClick={()=> handleClick('Journal')}
                variant="primary"
                size="large"
            >
                Journal
            </button>
        </div>
    </div>)
}



export default ButtonFunc;


