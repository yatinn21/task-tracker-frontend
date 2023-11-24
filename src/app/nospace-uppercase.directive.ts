import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNospaceUppercase]'
})
export class NospaceUppercaseDirective {

  constructor(private el: ElementRef<HTMLInputElement>) { }
  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const sanitizedValue = value.replace(/[^a-zA-Z0-9]+/g, '');
    const uppercaseVal = sanitizedValue.toUpperCase();
    if (uppercaseVal !== value) {
      this.el.nativeElement.value = uppercaseVal;
      this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}