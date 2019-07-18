import React from 'react';

import './_comment-item.scss';

function CommentItem({name, avatar, content}){
  return(
    <div className="comment-item">
      <div className="image">
        <img src={avatar}/>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
};

export default CommentItem;