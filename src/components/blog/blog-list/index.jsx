import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";

export default class BlogList extends Component {


  state = {
    posts: []
 }
 
   componentDidMount =  async () => {
       
      const apiUrl = process.env.REACT_APP_BE_URL
       const response = await fetch(`${apiUrl}/blogPosts`)
       console.log(response);
       const posts = await response.json()
       console.log('products', posts )
       this.setState({posts})
  
 
 
   }
   

  render() {
    return (
      
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
