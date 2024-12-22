import {useState} from 'react';
import Message from '../Message/Message';

function MessageList ( messages ) {
  MessageList
  return (
    <div>
      <h1 className='Message'>MessageList</h1>
      {/* <p>{ JSON.stringify( messages ) }</p> */}

      { messages.messages.map( (message, index )=>(
        <Message key={index} message={ message } />
      ))}
    </div>
  );

}

export default MessageList
