import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[ButtonColors]'
})
export class ButtonColorsDirective {

  @Input() defaultColor: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() hoverColor: string = 'rgba(130,19,40,0.99)'
  constructor(private element: ElementRef,
              private renderer: Renderer2) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.defaultColor
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      '.4s'
    )
  }

  @HostListener('mouseenter')
  onHoverOn() {
    this.setButtonsColor(this.hoverColor);
  }

  @HostListener('mouseleave')
  onHoverOff() {
    this.setButtonsColor(this.defaultColor);
  }

  private setButtonsColor(val: string) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      val
    );
  }
}
