import React from 'react';

import './_post-item.scss';

function PostItem({id, name, avatar, date, content,comments}){
  return(
    <div className={`post-item ${id}`}>
      <div className="post-header">
        <span className="image">
          <img src={avatar}/>
        </span>
        <div className="author-infos">
          <h2>{name}</h2>
          <span>{date}</span>
        </div>
      </div>
      <div className="post-text">
        <p>
        {content}
        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default PostItem;