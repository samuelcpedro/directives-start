import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  // tslint:disable-next-line:no-input-rename
  // this below is not working
  // @Input('BetterHighlightDirective') highlightColor = 'blue';

  /**
   *
   * style.backgroundColor
   * camel case is important here because we're accessing the DOM property
   *   wich doesn't know dashes
   *
   */
  // In this way below it doens't initiate with the default color is necessary to put in ngOnInit
  // @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @HostBinding('style.backgroundColor') backgroundColor;

  /**
   *
   * Change style when mouse hoover and leave
   * mouseover - method
   * mouseenter - event support by the DOM Elements
   *
   */
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    /**
     *
     * In the last lecture, we used the Angular Renderer class to change the style of a HTML element.
     * As explained in that lecture, you should use the Renderer for any DOM manipulations.
     * Of course, you can do more than simply change the styling of an element via setStyle().
     * Learn more about the available Renderer methods here. https://angular.io/api/core/Renderer2
     *
     */

    this.backgroundColor = this.defaultColor;
  }

}
