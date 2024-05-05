import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  //abaixo uso de decorator @Input
  @Input() src: string = ''
  @Input() alt: string = ''

}
