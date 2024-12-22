import { useEffect, useState } from 'react';
import axios from 'axios';
import MessageList from '../MessageList/MessageList';
import NewMessage from '../NewMessage/NewMessage';
import './App.css';
import useStore from '../Store/store';

function App () {
  useEffect( ()=>{
    fetchMessages();
  }, [] );
  
  const [ messages, setMessages ] = useState( [] );

  //Need to connect to useStore
  // state.favorites takes the state of favorites in useStore
  const favorites = useStore(( state )=> state.favorites )

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
      <h1 className='appHeader'>North Cascades Messages</h1>
      <h1>Favorites:</h1>
      <p>{ favorites }</p>
      <NewMessage fetchMessages={ fetchMessages } />
      {/* <p>{ JSON.stringify( messages ) }</p> */}

      <MessageList messages={ messages } />

    </div>
  );

}

export default App
