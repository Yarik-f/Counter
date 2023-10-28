import React from 'react';
import {Button} from "../button/Button";
import s from "../button/Button.module.css";
import c from './Counter.module.css'

type CounterPropsType = {
    value: number
    minValue: number
    maxValue: number
    disabled: boolean
    setting: boolean
    onClickIncrement: () => void
    onClickReset: () => void
    setSetting: (setting: boolean) => void
}
export const Counter = (props: CounterPropsType) => {
    const {value, minValue, maxValue, disabled, setting, onClickIncrement, onClickReset, setSetting} = props

    const buttonStyleIncrement = `
    ${s.btn}
    ${value === maxValue || maxValue <= minValue || maxValue < 0 || minValue < 0 ? s.disabled : s.btn}
`
    const buttonStyleIncrementDisabled = `
    ${s.btn}
    ${s.disabled}
`

    const buttonStyleReset = `
    ${s.btn}
    ${value === minValue || maxValue <= minValue || maxValue < 0 || minValue < 0 ? s.disabled : s.btn}
    `
    const buttonStyleResetDisabled = `
    ${s.btn}
    ${s.disabled}
`

    const valueStyle = `
    ${c.value}
    ${value === maxValue || maxValue <= minValue || maxValue < 0 || minValue < 0 ? c.red : c.value}
    `



    return (
        <div className={c.counter}>
            <Button name={'Set'} onClick={() => setSetting(!setting)}/>
    {
        disabled
            ?
            <div>
                <h3 className={valueStyle}>
                    {value}
                </h3>
                <Button className={buttonStyleIncrement} name={'inc'} onClick={onClickIncrement}/>
                <Button className={buttonStyleReset} name={'reset'} onClick={onClickReset}/>

            </div>
            :
            <div>
                <h3 className={valueStyle}>{maxValue <= minValue || maxValue < 0 || minValue < 0 ? 'Incorrect data' : 'Please press Set'}</h3>
                <Button className={buttonStyleIncrementDisabled} name={'inc'} onClick={onClickIncrement}/>
                <Button className={buttonStyleResetDisabled} name={'reset'} onClick={onClickReset}/>
            </div>
    }

        </div>
    );
};
