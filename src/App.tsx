import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Setting} from "./components/setting/Setting";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [value, setValue] = useState(minValue)
    const [disabled, setDisabled] = useState(true)
    const [setting, setSetting] = useState(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }

        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }

        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [value])

    const increment = () => {
        if (value >= maxValue) {
            setValue(maxValue)
        } else {
            setValue(value + 1)
        }

    }
    const reset = () => {
        setValue(minValue)
    }
    const savedSetting = () => {
        setDisabled(true)
        setValue(minValue)
        setMinValue(minValue)
        setMaxValue(maxValue)
        setSetting(!setting)
    }



    return (
        <div className="App">
            {
                setting
                    ?
                    <Setting
                        minValue={minValue}
                        maxValue={maxValue}
                        disabled={disabled}
                        setMinValue={setMinValue}
                        setMaxValue={setMaxValue}
                        onClick={savedSetting}
                        setDisabled={setDisabled}
                    />
                    :
                    <Counter
                        value={value}
                        disabled={disabled}
                        setting={setting}
                        onClickIncrement={increment}
                        onClickReset={reset}
                        setSetting={setSetting}
                        maxValue={maxValue}
                        minValue={minValue}
                    />
            }
            {/*<Setting
                minValue={minValue}
                maxValue={maxValue}
                disabled={disabled}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                onClick={savedSetting}
                setDisabled={setDisabled}
            />
            :
            <Counter
                value={value}
                disabled={disabled}
                setting={setting}
                onClickIncrement={increment}
                onClickReset={reset}
                setSetting={setSetting}
                maxValue={maxValue}
                minValue={minValue}
            />*/}
        </div>
    );
}

export default App;
