import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // selector: 'appBasicHighlight'       // --> it will select by element
    selector: '[appBasicHighlight]'        // --> atribute style - it will be recognize as appBasicHighlight without [] to an element
})
export class BasicHighlightDirective implements OnInit {

    // private to create and initialize property
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
