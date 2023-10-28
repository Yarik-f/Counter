import React, {HTMLInputTypeAttribute} from 'react';

type InputPropsType = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: number
    className?: string

}
export const Input = (props: InputPropsType) => {
    const {value, className, onChange} = props



    return (
        <input className={className} value={value} onChange={(e) => onChange(e)}  type="number"/>
    );
};
