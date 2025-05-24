import { Component, Input, OnInit} from '@angular/core';
import { Post } from '../post.models';
import { PostService } from '../post.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [
    RouterModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
@Input() post?: Post;
@Input() index: number = 0;

constructor(private postService: PostService, private router: Router){}

ngOnInit(): void {
  console.log(this.post);
  console.log(this.index);
}

onDelete(){
  this.postService.deletePost(this.index);
}

onEdit(){
this.router.navigate(["/post-edit", this.index])
}
}
