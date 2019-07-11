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

    // $('.game_collection').on('click', '.game', function () {
    //     $(this).toggleClass('expand').siblings().removeClass('expand');
    //   });

    $('.game').on('click', function () 
    {
      $(this).toggleClass('expand').siblings().removeClass('expand');
    }

    );

  }
}
