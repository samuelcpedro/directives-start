import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // - property unless must have the same name as the selector
  // - the set turns the property as a method but this is still a property its just a set of the property
  //      wich gets execute whenever the property change
  // @Input() set unless(condition: boolean) {
  @Input() set appUnless(condition: boolean) {
    !condition ? this.vcRef.createEmbeddedView(this.templateRef) : this.vcRef.clear();
    // if false creates a view in a viewcontainer
    // if true removes everything from this place in the DOM
  }

  // TemplateRef       --> give us access to the template
  //                   --> this is a what
  // ViewContainerRef  --> this marks the place where we placed this directive in the doc
  //                   --> (where it should be renderer)
  //                   --> this is a where
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
