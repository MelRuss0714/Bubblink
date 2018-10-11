import React from 'react';
import './ChatContainer.css';
// import FAVideo from 'react-icons/lib/fa/video-camera'


export default function({name, numberOfUsers, users, user}) {
	console.log('name is', name);
	console.log('number of users is ', numberOfUsers);
	console.log('user is ', user);
	console.log('users are ', users);

    return (
		
        <div className="chat-header">
            <div className="user-info">
            
                <div className="user-name">{name}</div>
                <div className="status">
                    <div className="indicator"></div>
                    <span>{numberOfUsers ? numberOfUsers : null}</span>
                </div>
            </div>
            <div className="options">
                
                
            </div>
        </div>
		
	);
	
    
}
