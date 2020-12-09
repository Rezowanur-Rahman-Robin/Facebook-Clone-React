import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessegeSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase";


function MessegeSender() {

    const [{user},dispatch] = useStateValue();

    const [input,setInput] = useState('');
    const [imageUrl,setImageUrl] = useState('');
 
    const handleSubmit=(e) => {
              e.preventDefault();

              //some clever db stuff

              db.collection('posts').add({
                  message: input,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  profilePic:user.photoURL,
                  username:user.displayName,
                  image:imageUrl

              })

              setInput("");
              setImageUrl("");
    };


    return (
        <div className="messegeSender">

            <div className="messegeSender__top">
                  <Avatar src={user.photoURL}/>
                  <form action="">
                      <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="messegeSender__input" placeholder={`What's on your mind,${user.displayName}?`} />
                      <input
                       value={imageUrl}
                       onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Image URL (Optional)"/>

                      <button onClick={handleSubmit} type=
                      "submit">Hidden Submit</button>
                  </form>
            </div>

            <div className="messegeSender__bottom">
                      <div className="messegeSender__option">
                          <VideocamIcon style={{color:"red"}} />
                          <h3>Live Video</h3>
                      </div>

                      <div className="messegeSender__option">
                          <PhotoLibraryIcon style={{color:"green"}} />
                          <h3>Photo/Video</h3>
                      </div>

                      <div className="messegeSender__option">
                          <InsertEmoticonIcon style={{color:"orange"}} />
                          <h3>Feeling/Activity</h3>
                      </div>
            </div>
            
        </div>
    )
}

export default MessegeSender;
