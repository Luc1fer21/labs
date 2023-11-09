import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { title } from 'node:process';
import {delay} from "rxjs/operators";

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Todo[] = [];
  flagLoad = false;
  

  constructor(private http: HttpClient) {
  }

  sorting(){
    for(let i = 1; i < this.posts.length; i++){
      if(this.posts[i-1].title[0] > this.posts[i].title[0]){
        var tmp = this.posts[i-1];  
        this.posts[i-1] = this.posts[i];
        this.posts[i] = tmp;
      }
    }
    
  }

  ngOnInit(): void {
        this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .subscribe(response => {
        console.log(response)
        this.posts = response;
         });
        this.sorting()
        this.loadPost()
  }

  namePost = ''

  addPost() {
    if (!this.namePost.trim()) {
      return
    }
    const post: Todo = {
      title: this.namePost,
      completed: false
    }
    this.http.post('https://jsonplaceholder.typicode.com/todos/', post)
      .subscribe(res => {
        console.log(res)
        this.posts.unshift(post)
      });
  }

  loadPost() {
    this.flagLoad = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(delay(1500))
      .subscribe(response => {
        console.log(response)
        this.posts = response;
        this.flagLoad = false;
      });
  }

  removePost(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
   .subscribe(() => {
     console.log(id)
     this.posts = this.posts.filter(item => item.id != id)
     console.log(this.posts)
   });
   }
   
   completedPost(id: number) {
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{completed:true})
      .subscribe((res) => {
      this.posts.find(item=> item.id===res.id).completed=true
  
  })
  
  }
  
  

}

