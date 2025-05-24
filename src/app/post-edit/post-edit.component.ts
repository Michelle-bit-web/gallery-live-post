import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Params } from '@angular/router';
import { Post } from '../post.models';
import { PostService } from '../post.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  imports: [

    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent {
  form!: FormGroup;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute){};

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params['index']){
        console.log(['index'], params);
      }
    });

    this.form = new FormGroup({
      title: new FormControl(
        null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(){
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post: Post = new Post(
      title, 
      description, 
      imagePath, 
      "test(at)test.com", 
      new Date()
    );

    //Calling Service
    this.postService.addPost(post);

    //Navigation to Home page when new post was added
    this.router.navigate(["/post-list"])
  }

  

  
}
