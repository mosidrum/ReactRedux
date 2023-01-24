import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
<<<<<<< HEAD
import UserHeader from "./UserHeader";
=======
>>>>>>> 8db1ee14126cd284ca3a48deafc9cceb2e4c00f3

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
<<<<<<< HEAD
          <UserHeader userId={post.userId} />
=======
>>>>>>> 8db1ee14126cd284ca3a48deafc9cceb2e4c00f3
        </div>
      );
    });
  }
  render() {
    console.log(this.props.posts)
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
