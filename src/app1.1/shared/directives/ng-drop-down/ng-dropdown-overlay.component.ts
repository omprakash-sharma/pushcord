import {Component, Input, OnInit, ViewContainerRef, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'dropdown-overlay',
  template: `
    <div class="dropdown-overlay" (click)="closeDropdown()">
    </div>
    <style>
      .dropdown-overlay {
        z-index: 9998;
        position: fixed;
        left: 0;
        top: 0; 
        height: 100%;
        width: 100%;
        background-color:rgba(0,0,0,0.05);
      }
    </style>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class dropdownOverlayComponent implements OnInit {
  @Input() dropdownRef: HTMLElement;
  @Input() dropdownParentRef: ViewContainerRef;
  @Input() toggleClass: string;
  @Input() toggleDropdownClass: string;

  ngOnInit() {
  }

  closeDropdown(): void {
    if(this.toggleClass) {
      this.dropdownParentRef.element.nativeElement.parentElement.classList.remove(this.toggleClass);
    }
    this.dropdownRef.style.zIndex = '0';
    this.dropdownRef.classList.remove(this.toggleDropdownClass)
    this.dropdownParentRef.clear()
  }

}
