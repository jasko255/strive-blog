import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";

export default class BlogList extends Component {


  state = {
    posts: []
 }
 
   componentDidMount(){
 
     const getProducts = async () => {
       
 
       let response = await fetch("http://localhost:3001/blogPosts/")
       let posts = await response.json()
       console.log('products', posts )
       this.setState({posts: posts})
       
   }
   getProducts()
 
 
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
