import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import Header from './components/header/header';
import Headline from './components/headline/headline';
import ListItem from './components/listItem/listItem';
import SharedButton from './components/button/button';

import './App.scss';

const tempArray = [
  {
    fName: 'Joe',
    lName: 'Doe',
    email: 'joe@gds.com',
    age: 18,
    onlineStatus: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    };

    return (
      <div className="App" data-test="app-component">
        <Header />
        <section className="container">
          <Headline
            header="Posts"
            desc="click the button to render posts"
            tempArray={tempArray}
          />
          <SharedButton {...configButton} />
          {posts &&
            posts.map(post => (
              <ListItem
                key={post.id}
                title={post.title}
                description={post.body}
              />
            ))}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
