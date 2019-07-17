import React, { Component} from 'react';

import './_post-list.scss';

import PostItem from '../postItem/PostItem';

class PostList extends Component{

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Júlio Alcantara',
          avatar: 'users/user-01.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'users/user-02.png'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)."
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'users/user-03.png'
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)."
          }
        ],
      },
    ]
  };

  render() {
    return (
      <main className="post-list">
        {this.state.posts.map((post, index) =>(
          <PostItem
          key={index} 
          id={post.id}
          name={post.author.name}
          avatar={post.author.avatar}
          date={post.date}
          content={post.content}
          comments={post.comments} 
          />
        ))}
      </main>
    )
  }
}

export default PostList;