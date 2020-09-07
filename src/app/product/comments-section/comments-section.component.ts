import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent implements OnInit {
  commentForm: FormGroup;
  commentInfo = [];
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(500)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return false;
    } else {
      this.commentInfo.push({
        commentTxt: this.commentForm.value.comment,
        replyComment: []
      });
      // this.usercomment.emit(this.commentInfo);
    }
  }

  get commentFormControl() {
    return this.commentForm.controls;
  }
}
