import {useState} from 'react';
import Message from '../Message/Message';


function MessageList ( messages ) {
  return (
    <div>
      <h1 className='Message-list'>MessageList</h1>
      <div  className='Messages'>
      { messages.messages.map( ( message, index )=>(
        <Message key={ index } message={ message } />
      ))}
      </div>
    </div>
  );
}

export default MessageList
