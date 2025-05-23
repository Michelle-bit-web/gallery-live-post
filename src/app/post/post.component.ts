import { Component, Input, OnInit} from '@angular/core';
import { Post } from '../post.models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
@Input() post?: Post;

constructor(private postService: PostService){}

ngOnInit(): void {
  console.log(this.post);
}

onDelete(){
  this.postService.deletePost(0);
}
}
