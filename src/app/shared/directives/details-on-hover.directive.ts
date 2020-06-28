import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDetailsOnHover]'
})
export class DetailsOnHoverDirective {

  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }

  @HostListener('mouseenter') onMouseenter() {
    this.renderer.removeClass(this.eleRef.nativeElement, 'hide-card-details')
    this.renderer.addClass(this.eleRef.nativeElement, 'show-card-details');
  }

  @HostListener('mouseleave') onMouseleave() {
    this.renderer.removeClass(this.eleRef.nativeElement, 'show-card-details');
    this.renderer.addClass(this.eleRef.nativeElement, 'hide-card-details');
  }

}
