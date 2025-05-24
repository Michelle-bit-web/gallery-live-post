import {Injectable} from '@angular/core';
import { Post } from './post.models';

@Injectable({ providedIn: 'root' })
export class PostService {
    
    listOfPosts: Post[] = [
    new Post(
      "Nature", 
      "Here you see a paradise given from Nature.", 
      "/img/flower-field.png", 
      "test(at)test.com", 
      new Date(),
      5
    ),
    new Post(
      "In the Forest", 
      "Deep within the forests, you will find the best view.", 
      "/img/forest.png", 
      "test2(at)test2.com", 
      new Date(),
      5
    )
  ];

//first facility

  getPosts(){
    return this.listOfPosts;
  }

  //second facility

  deletePost(index: number){
    this.listOfPosts.splice(index,1);
  }

  //third facility

  addPost(post: Post){
    this.listOfPosts.push(post);
  }

  //fourth facility

  updatePost(index: number, post: Post){
    this.listOfPosts[index] = post;
  }

  //fifth facility

  getPost(index: number){
    return this.listOfPosts[index];
  }
}