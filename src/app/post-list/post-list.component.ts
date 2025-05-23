import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { Post } from '../post.models';

@Component({
  selector: 'app-post-list',
  imports: [
    PostComponent,
],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  listOfPosts: Post[] = [
    new Post(
      "Nature", 
      "A text", 
      "/img/flower-field.png", 
      "test(at)test.com", 
      new Date()
    ),
    new Post(
      "Nature", 
      "A text", 
      "/img/forest.png", 
      "test2(at)test2.com", 
      new Date(),
    )
  ];
}
