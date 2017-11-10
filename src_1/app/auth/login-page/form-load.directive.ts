import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[form-load]'
})
export class FormLoadDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
