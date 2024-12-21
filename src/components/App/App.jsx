import { useEffect, useState } from 'react';
import axios from 'axios';
import MessageList from '../MessageList/MessageList';
import NewMessage from '../NewMessage/NewMessage';
import './App.css';

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


  return (
    <div>
      <h1>North Cascades Messages</h1>
      <NewMessage fetchMessages={ fetchMessages } />
      {/* <p>{ JSON.stringify( messages ) }</p> */}

      <MessageList messages={ messages } />

    </div>
  );

}

export default App
