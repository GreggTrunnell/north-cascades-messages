import {useState} from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core'; 

//Need curly braces around fetchMessages here or it won't read as a function onClick
function NewMessage ( {fetchMessages} ) {
  const [ currentMessage, setCurrentMessage ] = useState( { name: '', text: '' } );

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
      <h1>New Message</h1>
      <form>
      <TextField  type='Name' placeholder='NAME' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, name: e.target.value } ) } } />       
      <TextField  type='text' placeholder='MESSAGE' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, text: e.target.value } ) } } /> 
      <Button onClick={ sendMessage }>Send</Button>
      </form>
    </div>
  );
}

export default NewMessage
