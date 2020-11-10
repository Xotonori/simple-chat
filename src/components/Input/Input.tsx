import React from 'react';
import {memo} from 'react';
// @ts-ignore
import classes from './Input.module.scss';

export const Input = memo(({type, placeholder}: InputPropsType) => {
    return (
        <input type={type} placeholder={placeholder} className={classes.Input}/>
    );
});

//Types
type InputPropsType = {
    type: string,
    placeholder: string,
}
