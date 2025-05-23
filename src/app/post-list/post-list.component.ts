import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { Post } from '../post.models';
import { CommonModule } from '@angular/common';

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
}
