import React, {memo} from 'react';
import classes from './Button.module.scss'

export const Button = memo(({onClick}: onClickType) => {
    return (
        <button className={classes.Button} onClick={onClick}>CONNECT</button>
    );
});

//Types
type onClickType = {
    onClick: () => void
};