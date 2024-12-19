import {useState} from 'react';
import { TextField } from '@material-ui/core';
import Axios from 'axios';

function MessageList ( messages ) {
  MessageList
  return (
    <div>
      <h1>MessageList</h1>
      {/* <p>{ JSON.stringify( messages ) }</p> */}

      { messages.messages.map( (message, index )=>(
        <li key={index}>{message.name}: {message.text}</li>
      ))}
    </div>
  );

}

export default MessageList
