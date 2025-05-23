import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { Post } from '../post.models';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  imports: [
    PostComponent,
    CommonModule
],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
   listOfPosts: Post[] = [];

   constructor(private postService: PostService){}
}
