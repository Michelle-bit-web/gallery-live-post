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
      "Here you see a paradise given from Nature.", 
      "/img/flower-field.png", 
      "test(at)test.com", 
      new Date()
    ),
    new Post(
      "In the Forest", 
      "Deep within the forests, you will find the best view.", 
      "/img/forest.png", 
      "test2(at)test2.com", 
      new Date(),
    )
  ];
}
