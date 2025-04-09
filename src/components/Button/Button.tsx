import React from 'react';

interface ButtonProps {
    children: any;
    className?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    [key: string]: any; // Allow any other props
}

const Button = ({
    children,
    onClick,
    className = '',
    variant = 'primary',
    type = 'button',
    disabled = false,
    ...rest
}: ButtonProps) => {
    const buttonClasses = `cui-button cui-button--${variant} ${className}`.trim();

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;