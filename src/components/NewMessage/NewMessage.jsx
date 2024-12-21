import {useState} from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core'; 

function NewMessage ( fetchMessages ) {
  const [ currentMessage, setCurrentMessage ] = useState( { name: '', text: '' } );

  function sendMessage(){
    axios.post( '/api/messages', currentMessage ).then( function( response ){
      console.log( 'back from POST:', response.data );
      fetchMessages();
    }).catch( function ( err ){
      console.log( err );
      // alert( 'error posting message' );
    })
  }
  return (
    <div>
      <h1>New Message</h1>
      {/* Using form here allows hitting enter to send */}
      <form>
      <TextField  type='Name' placeholder='name' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, name: e.target.value } ) } } />       
      <TextField  type='text' placeholder='message' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, text: e.target.value } ) } } /> 
      <button onClick={ sendMessage }>Send</button>
      </form>
    </div>
  );

}

export default NewMessage
