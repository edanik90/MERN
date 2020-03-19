import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(io(':8000'));
    useEffect(() => {
        console.log('Is this running?');
        socket.emit("welcome", "Hi there");
        socket.on("response", data => console.log(data))
        // return () => socket.disconnect(true);
    }, [socket])

    return(
        <div>
            <h1>Test chat</h1>
        </div>
    )
}

export default Chat;