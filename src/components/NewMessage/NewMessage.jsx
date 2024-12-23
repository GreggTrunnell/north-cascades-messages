import {useState} from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem } from '@mui/material'; 

//Need curly braces around fetchMessages here or it won't read as a function onClick
function NewMessage ( { fetchMessages } ) {
  
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
      <h1 className='New-Message-Header'>New Message</h1>
      <TextField className='Text-Fields' type='Name' placeholder='NAME' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, name: e.target.value } ) } } />       
      <TextField className='Text-Fields' type='text' placeholder='MESSAGE' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, text: e.target.value } ) } } /> 
       {
       currentMessage.name === '' || currentMessage.text === '' ? 
      <Button className="button"disabled variant="outlined" onClick={ sendMessage }>Send</Button>:
      <Button className="button" variant="outlined" onClick={ sendMessage }>Send</Button>
      }
      {/* select tag will create a drop down menu */}
  
      <Select  defaultValue='0' onChange={(e)=>{alert( e.target.value )}}>
        <MenuItem value='0'> 0</MenuItem>
        <MenuItem value='1'> 1</MenuItem>
        <MenuItem value='2'> 2</MenuItem>
        <MenuItem value='3'> 3</MenuItem>
        <MenuItem value='4'> 4</MenuItem>
      </Select>
      
    </div>
  );
}

export default NewMessage
