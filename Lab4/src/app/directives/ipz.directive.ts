import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appIpz]'
})
export class IpzDirective {

  constructor(private el: ElementRef, private r: Renderer2) {
  }
  @HostListener('mouseenter', ['$event.target']) onMouseEnter() {
this.r.setStyle(this.el.nativeElement,'color','blue')
this.r.setStyle(this.el.nativeElement,'margin-top','30px')
this.r.setStyle(this.el.nativeElement,'font-weight','bold')
this.r.setStyle(this.el.nativeElement,'font-size','19px')
this.r.setStyle(this.el.nativeElement,'background-color','azure')

  }
  @HostListener('mouseleave', ['$event.target']) onMouseLive() {
    this.r.setStyle(this.el.nativeElement,'color',null)
    this.r.setStyle(this.el.nativeElement,'margin-top',null)
    this.r.setStyle(this.el.nativeElement,'font-weight',null)
    this.r.setStyle(this.el.nativeElement,'font-size',null)
    this.r.setStyle(this.el.nativeElement,'background-color',null)

  }
  
  @HostListener('click', ['$event.target']) onClick(target: any) {

    alert(
    target.title
    );
    
  }

}
