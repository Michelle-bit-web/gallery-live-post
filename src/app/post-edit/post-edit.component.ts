import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  imports: [RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent {
  form!: FormGroup;
  constructor(private postService: PostService){};

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(
        null, 
        [
          Validators.required, 
          Validators.maxLength(10)
        ]),
      description: new FormControl(null),
      imagePath: new FormControl(null),
    })
  }

  onSubmit(){
    console.log('onSubit() is called');
     console.log(this.form);
  }
}
