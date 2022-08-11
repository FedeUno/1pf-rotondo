import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTransform]',
})
export class TransformDirective implements OnInit {
  @Input('appTransform') size!: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.fontSize = this.size;
  }
}
