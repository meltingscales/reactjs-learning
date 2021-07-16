import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends React.Component {

  state = {
    messages: [
      'React seems really cool',
      'I love using components in React',
      'It makes development really easy',
      'It was hard to follow at first but now I love it'
    ]
  }

  addComment = (message) =>{
    this.setState(function(prevState){
      var messages = prevState.messages.concat();
      messages.push(message);
      return {
        messages: messages
      }
    });
  }

  render() {
    return (
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;