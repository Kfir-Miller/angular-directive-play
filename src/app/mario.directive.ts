import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mario]'
})
export class MarioDirective {
  private sound;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.sound = new Audio('https://www.myinstants.com/media/sounds/untitled_3.mp3').play();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }
}