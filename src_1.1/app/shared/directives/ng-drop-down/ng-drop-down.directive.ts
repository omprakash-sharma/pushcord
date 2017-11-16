import {ComponentFactoryResolver, Directive, HostListener, Input, Renderer2, ViewChild, ViewContainerRef} from "@angular/core";
import {dropdownOverlayComponent} from "./ng-dropdown-overlay.component";

@Directive({
  selector: "[ngDropDown]"
})
export class NgDropDownDirective {

  @Input() dropDown: HTMLElement;
  @Input() toggleClass: string;
  @Input() toggleDropdownClass: string;
  overlayComponent: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  @HostListener("click") open()
  {
    if(this.dropDown) {
      let factory = this.componentFactoryResolver.resolveComponentFactory(dropdownOverlayComponent);
      this.overlayComponent = factory
        .create(this.viewContainerRef.injector);
      this.overlayComponent.instance.dropdownRef = this.dropDown;
      this.overlayComponent.instance.dropdownParentRef = this.viewContainerRef;
      this.overlayComponent.instance.toggleClass = this.toggleClass;
      this.overlayComponent.instance.toggleDropdownClass = this.toggleDropdownClass;
      this.viewContainerRef.insert(this.overlayComponent.hostView);


      this.dropDown.parentElement.classList.add(this.toggleClass)
      this.dropDown.classList.add(this.toggleDropdownClass);
      this.dropDown.style.zIndex = '9999';
    }
  }
}
