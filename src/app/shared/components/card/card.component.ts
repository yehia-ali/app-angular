import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit {
  cardTitleChildren: boolean = true;
  cardBodyChildren: boolean = true;

  @ViewChild('cardTitle', { static: false }) cardTitle!: ElementRef;
  @ViewChild('cardBody', { static: false }) cardBody!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cardTitleChildren = this.cardTitle.nativeElement.children.length > 0;
    this.cardBodyChildren = this.cardBody.nativeElement.children.length > 0;

  }
}
