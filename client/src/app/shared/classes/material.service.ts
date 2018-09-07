import { ElementRef } from '@angular/core';

declare var M;

export interface MaterialInstance {
  open?(): void;
  close?(): void;
  destroy?(): void;
}

export class MaterialService {

  static toast(message: string) {
    M.toast({html: message});
  }

  static initParallax(ref: ElementRef) {
    M.Parallax.init(ref.nativeElement);
  }

  static initSidenav(ref: ElementRef) {
    M.Sidenav.init(ref.nativeElement);
  }

  static initMaterialbox(ref: ElementRef) {
    M.Materialbox.init(ref.nativeElement);
  }

  static initFloatingActionButton(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement);
  }

  static initFormSelect(ref: ElementRef) {
    M.FormSelect.init(ref.nativeElement);
  }

  static initModal(ref: ElementRef): MaterialInstance {
    return M.Modal.init(ref.nativeElement);
  }

  static updateTextInputs() {
    M.updateTextFields();
  }
}
