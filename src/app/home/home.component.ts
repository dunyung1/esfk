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


    var $collection = $('.game_collection').masonry({
      columnWidth: '.game-sizer',
      percentPosition: true,
      itemSelector: '.game',
      stagger: 100
    });

    $collection.on('click', 'img', function ( event ) {
      $(event.currentTarget).parent('.game').toggleClass('expanded').siblings().removeClass('expanded');
      $collection.masonry();
    });

  }
}
