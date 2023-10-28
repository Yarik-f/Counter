import React from 'react';
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import i from '../input/Input.module.css'
import s from "../button/Button.module.css";

type SettingPropsType = {
    minValue: number
    maxValue: number
    disabled: boolean
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setDisabled: (disabled: boolean) => void
    onClick: () => void
}
export const Setting = (props: SettingPropsType) => {

    const {minValue, maxValue, disabled, setMinValue, setMaxValue, onClick, setDisabled} = props

    const changeMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (maxValue <= minValue || maxValue < 0 || minValue < 0){
            setDisabled(false)
        }else {
            setDisabled(false)
        }
        setMinValue(Number(e.currentTarget.value))

    }
    const changeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (maxValue <= minValue || maxValue < 0 || minValue < 0){
            setDisabled(false)
        }
        else {
            setDisabled(false)
        }
        setMaxValue(Number(e.currentTarget.value))
    }


    const inputStyleMax = `
    ${i.input}
    ${maxValue <= minValue || maxValue < 0 || minValue < 0 ? i.red : i.input}
`
    const inputStyleMin = `
    ${i.input}
    ${maxValue <= minValue || maxValue < 0 || minValue < 0 ? i.red : i.input}
`
    const buttonStyle = `
    ${s.btn}
    ${maxValue <= minValue || maxValue < 0 || minValue < 0 ? s.disabled : s.btn}
`
    const buttonStyleDisabled = `
    ${s.btn}
    ${s.disabled}
`

    return (
        <div>
            <Input className={inputStyleMax} onChange={changeMaxValue} value={maxValue}/>
            <Input className={inputStyleMin} onChange={changeMinValue} value={minValue}/>
            {disabled
                ? <Button className={buttonStyleDisabled} name={'Set'} onClick={onClick}/>
                : <Button className={buttonStyle} name={'Set'} onClick={onClick}/>}
        </div>
    );
};
