import React from 'react';
import { memo } from 'react';

export const Input = memo(({type, placeholder, className}: InputPropsType) => {
    return (
        <input type={type} placeholder={placeholder} className={className}/>
    );
});

//Types
type InputPropsType = {
    type: string,
    placeholder: string,
    className: string
}
