import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from "react";
import { useDispatch } from "react-redux";
import { sortBirthdayAC, sortNameAC } from "../../redux/users-reducer";
import s from './Radio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type RadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
    onChangeTheme?: (theme: string) => void
}

const Radio: React.FC<RadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption, onChangeTheme,
        ...restProps
    }
) => {

    const dispatch = useDispatch()

    const handleSortName = () => {
      dispatch(sortNameAC())
    }
    const handleSortBirthday = () => {
        dispatch(sortBirthdayAC())
      }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
        onChangeTheme && onChangeTheme(e.currentTarget.value);
        if (value === "По алфавиту") {
           handleSortBirthday()
        } else if (value === "По дню рождения") {
           handleSortName()
        }
    }

    const finalRadioClassName = s.radio

    const mappedOptions: RadioPropsType[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i} className={s.label}>
            <input
                className={finalRadioClassName}
                type={"radio"}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
                {...restProps}
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default Radio;
