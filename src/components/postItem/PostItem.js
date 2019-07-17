import React from 'react';

function PostItem({id, name, avatar, date, content,comments}){
  return(
    <div className="post-item">
      {id}
      {name},
      <img src={avatar}/>
      {date},
      {content}
    </div>
  );
}

export default PostItem;