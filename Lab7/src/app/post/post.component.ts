import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {Post, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  implements OnInit{
  post?: Post
  constructor(private router: ActivatedRoute, private router1: Router,
            private postS: PostsService
) {}

  ngOnInit(): void {
    this.router.params.subscribe((param)=>{
    this.post= this.postS.getById(+param['id']) })
    }

    Back(){
        this.router1.navigate(['/posts'])
    }

    LoadFour(){
      this.router1.navigate(['/post/44'])
    }
}
