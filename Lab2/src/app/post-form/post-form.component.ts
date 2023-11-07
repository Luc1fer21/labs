import {AppComponent, Post} from "../app.component";
import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit{
  title=''
  text = ''
  
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()
  styleToggle=false
  @ViewChild('myInputText', { static: false })
  myinputText!: ElementRef;
  @ViewChild('myInputTitle',{static: false})
  myinputTitle!: ElementRef

  @Input() post: Post

  constructor() { }

  ngOnInit() {
  }

  addPost() {
  if(this.text.trim() && this.title.trim()) {
    const post : Post ={
      title: this.title,
      text: this.text,
      id: 1
    }

    this.addPostUser.emit(post)
    console.log('Add post: ', post)
    this.text=''
    this.title=''
  }
  }

  onLoadDefault () {
    this.styleToggle=!this.styleToggle
    if(this.styleToggle) {
      this.myinputText.nativeElement.style.color = "red"
      this.myinputTitle.nativeElement.style.fontWeight = "bold"
        } else {
      this.myinputText.nativeElement.style.color = 'black'
      this.myinputTitle.nativeElement.style.fontWeight = "normal"
  
    }
  
    }
  
}