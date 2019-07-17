import React from 'react';

function CommentItem({name, avatar, content}){
  return(
    <div className="comment-item">
      <div className="image">
        <img src={avatar}/>
      </div>
    </div>
  )
};

export default CommentItem;