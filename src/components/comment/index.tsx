import React from 'react'
import { Header, Comment } from 'semantic-ui-react'

const Comments = (props) => (
  <div>
    <Comment.Group>
      <Header as='h3' dividing>
        Comments
      </Header>
      <Comment>
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </div>
);

export default Comments;
