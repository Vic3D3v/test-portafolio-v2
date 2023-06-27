import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name: string = 'Vicente Cruz';
  urlImg: string = '../../../assets/img/wallBanner.jpg';
  photo: string = `url('${this.urlImg}')`;
}
