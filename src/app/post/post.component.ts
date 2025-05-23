import { Component, Input, OnInit} from '@angular/core';
import { Post } from '../post.models';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
@Input() post?: Post;

ngOnInit(): void {
  console.log(this.post);
}
}
