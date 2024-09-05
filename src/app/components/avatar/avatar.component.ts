import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { transition, style, animate, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.sass',
  animations: [
    trigger('custom',[
      transition('*=>*', [
        animate(1000, keyframes([
          style({ transform: "translateY(0px)" }),
          style({transform: "translateY(-200px)", opacity: 0}),
        ])),
      ]),
    ])
  ]
})
export class AvatarComponent {
  @ViewChild('customDiv') customDiv!: ElementRef;
  public token:number = 0
  public maxCount:number = 1000
  public value!:boolean
  renderer = inject(Renderer2)
  incremenToken(event:any) {
    this.value = true
    let element = this.customDiv.nativeElement
    this.addElement()
    this.stylingCustomDiv(element,event.offsetX, event.offsetY)
    console.log('Event',event ,  event.offsetX, event.clientY)
    if(this.maxCount !== 0){
      this.token ++
      this.maxCount --
    }
  }

  stylingCustomDiv(element:any,X:any,Y:any) {
    element.style.position = "absolute"
    element.style.top = Y + "px"
    element.style.left = X + 20 + "px"
    element.style.zIndex = 10

  }
  addElement() {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = '+1';
    this.renderer.appendChild(this.customDiv.nativeElement, p);
    setTimeout(() => {
      this.value = false
    }, 1);
    setTimeout(() => {
      p.remove();
    }, 800);
  }

}
