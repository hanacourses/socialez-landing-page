"use client";

interface ButtonProps {
    children?: React.ReactNode;
    content?: string;
    btnClassName?: string;
    className?: string;
    variant?: "primary" | "outline";
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { children, content, btnClassName, className, variant = "primary", onClick = () => { } } = props;
    const btnClass = {
        primary: "bg-blue-600 text-white ",
        outline: "bg-white text-[#0172F4] border border-[#0172F4]",
    }
    return (
        <div className={className}>
            <button className={btnClassName + " " + btnClass[variant] + " rounded-xl px-4 py-2.5 cursor-pointer"} onClick={onClick}>
                {children && children}
                {content && content}
            </button>
        </div>
    );
}

export default Button;