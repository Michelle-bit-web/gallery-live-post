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
  index: number = 0;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute){};

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';

    this.route.params.subscribe((params: Params) => {
      if(params['index']){
        this.index = params['index'];
        const returnedPost = this.postService.getPost(this.index);
        title = returnedPost.title;
        description = returnedPost.description;
        imagePath = returnedPost.imagePath;
      };
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
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
