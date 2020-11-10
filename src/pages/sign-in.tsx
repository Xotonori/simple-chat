import React, {memo} from 'react'
import {Input} from "../components/Input/Input";
// @ts-ignore
import io from 'socket.io-client';

const SignIn = memo(props => {

    const connectSocket = () => {
        io('http://localhost:9999/');
    }

    return(
        <div className={'FormWrapper'}>
            <form action="" className='roomForm'>
                <Input type="text" placeholder='Room ID'/>
                <Input type="text" placeholder='Your Name'/>
                <button onClick={connectSocket}>CONNECT</button>
            </form>
        </div>
    );

});

export default SignIn;