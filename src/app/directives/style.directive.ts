import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input ('appStyle') color = null;

  @Input() fontWeight = 'normal';

  @Input() borderStyles: {border?: string, borderRadius?: string};

  @HostBinding('style.color') elColor = null;

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {
  }

  @HostListener('mousedown', ['$event.target']) onMouseDown(event: Event): void{

    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight);
  }

  @HostListener('mouseup', ['$event.target']) onMouseUp(event: Event): void {

    // console.log(event);
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'lightgreen');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
  }

  @HostListener('mouseover') onOver(): void {
    this.elColor = this.color;
    // or
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'lightgreen');
    this.renderer.setStyle(this.elRef.nativeElement, 'border', this.borderStyles.border);
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.borderStyles.borderRadius);
  }

  @HostListener('mouseout') onOut(): void {
    this.elColor = null;
    // or
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null);
  }

}
