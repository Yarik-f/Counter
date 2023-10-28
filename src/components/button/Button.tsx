import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    className?: string
}
export const Button = (props: ButtonPropsType) => {
    const {name, className, onClick} = props


    return (
            <button className={className} onClick={onClick}>{name}</button>
    );
};
