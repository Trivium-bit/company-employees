import React, { ChangeEvent, DetailedHTMLProps, Dispatch, InputHTMLAttributes, KeyboardEvent, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { filterUsersAC } from "../../redux/users-reducer";
import s from "./Input.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'onChange'> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string;
    onChange?: Dispatch<SetStateAction<string>>
};

const Input: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        ...restProps
    }
) => {
    const dispatch = useDispatch()
    
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value);
        onChangeText && onChangeText(e.currentTarget.value);
        dispatch(filterUsersAC(e.target.value))
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter"
            && onEnter
            && onEnter();
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
    const finalInputClassName = `${s.input} ${error ? s.errorInput : s.superInput} ${className}`;

    return (
        <>
            <input
                type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                placeholder={"Введите имя, тег, почту..."}
                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
}

export default Input;
