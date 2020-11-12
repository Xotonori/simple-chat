import React, {memo} from 'react'
import {Input} from "../../components/Input/Input";
import classes from './sign-in.module.scss'
// @ts-ignore
import io from 'socket.io-client';
import {Button} from "../../components/Button/Button";

const SignIn = memo(props => {

    const connectSocket = () => {
        io('http://localhost:9999/');
    }

    return(
        <div className={classes.formWrapper}>
            <form action="" className={classes.roomForm}>
                <Input type="text" placeholder='Room ID'/>
                <Input type="text" placeholder='Your Name'/>
                <Button onClick={connectSocket}/>
            </form>
        </div>
    );

});

export default SignIn;