import {
  Component,
  OnInit
} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {}

  ngOnInit() {

    $('.game > img').click(function() {
      $(this).toggleClass('expand',800).siblings().removeClass('expand');
    });

  }
}
