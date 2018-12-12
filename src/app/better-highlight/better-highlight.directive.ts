import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

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
  }

  /**
   *
   * Change style when mouse hoover and leave
   * mouseover - method
   * mouseenter - event support by the DOM Elements
   *
   */
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
