import React from 'react';

type Props = {
    text: string;
    callback?: () => void;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};
const Button: React.FC<Props> = ({
                                     text,
                                     type,
                                     callback,
                                     disabled,
                                 }) => {
    return (
        <button
            disabled={disabled}
            onClick={callback && callback}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;