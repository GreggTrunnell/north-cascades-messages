import { useEffect, useState } from 'react';
import axios from 'axios';
import MessageList from '../MessageList/MessageList';
import { TextField, Button } from '@material-ui/core';

function App () {
  useEffect( ()=>{
    fetchMessages();
  }, [] );
  
  const [ messages, setMessages ] = useState( [] );
  const [ currentMessage, setCurrentMessage ] = useState( { name: '', text: '' } );

  function fetchMessages(){
    axios.get( '/api/messages' ).then( function( response ){
      console.log( 'back from GET:', response.data );
      setMessages( response.data );
    }).catch( function ( err ){
      console.log( err );
      alert( 'error getting messages' );
    })
  }

  function sendMessage(){
    axios.post( '/api/messages', currentMessage ).then( function( response ){
      console.log( 'back from POST:', response.data );
      fetchMessages();
    }).catch( function ( err ){
      console.log( err );
      alert( 'error posting message' );
    })
  }
  return (
    <div>
      <h1>North Cascades Messages</h1>
       <p>  
        <TextField placeholder='name' type='text' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, name: e.target.value } ) } } /> 
        <TextField type='text' placeholder='message' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, text: e.target.value } ) } } /> 
        <Button variant="outlined" onClick={ sendMessage }>Send</Button>
      </p>
      <h3>{ JSON.stringify( currentMessage ) }</h3>
      {/* <p>{ JSON.stringify( messages ) }</p> */}
      <MessageList messages={ messages } />

    </div>
  );

}

export default App
