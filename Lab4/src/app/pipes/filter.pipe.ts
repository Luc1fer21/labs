import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent, Post } from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(post: Post[], titleSearch: string): Post[] {
    if(AppComponent.filter == 1){
      if(!titleSearch.trim()) {
        return post
      } else {
        return post.filter(item=>{
        return item.title.toLowerCase().includes(titleSearch.toLowerCase())
      })
    }
  }
  else{
    if(!titleSearch.trim()) {
      return post
    } else {
      return post.filter(item=>{
      return item.text.toLowerCase().includes(titleSearch.toLowerCase())
    })
  }
  }
}

}
