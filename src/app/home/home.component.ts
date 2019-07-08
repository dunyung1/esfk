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

    $(".one").on("click", function () {
      $('.one').toggleClass("zoomed");
    });

    $(".two").on("click", function () {
      $('.two').toggleClass("zoomed");
    });

    $(".three").on("click", function () {
      $('.three').toggleClass("zoomed");
    });

    $(".four").on("click", function () {
      $('.four').toggleClass("zoomed");
    });
    
    $(".five").on("click", function () {
      $('.five').toggleClass("zoomedright");
    });

    $(".six").on("click", function () {
      $('.six').toggleClass("zoomedright");
    });

    $(".seven").on("click", function () {
      $('.seven').toggleClass("zoomedright");
    });

    $(".eight").on("click", function () {
      $('.eight').toggleClass("zoomedright");
    });

    $(".nine").on("click", function () {
      $('.nine').toggleClass("zoomedright");
    });

    $(".ten").on("click", function () {
      $('.ten').toggleClass("zoomed");
    });

    $(".eleven").on("click", function () {
      $('.eleven').toggleClass("zoomed");
    });

    $(".twelve").on("click", function () {
      $('.twelve').toggleClass("zoomcenter");
    });

    $(".thirteen").on("click", function () {
      $('.thirteen').toggleClass("zoomed");
    });

    $(".fourteen").on("click", function () {
      $('.fourteen').toggleClass("zoomedright");
    });

    $(".fifteen").on("click", function () {
      $('.fifteen').toggleClass("zoomedright");
    });

    $(".sixteen").on("click", function () {
      $('.sixteen').toggleClass("zoomedright");
    });

    $(".seventeen").on("click", function () {
      $('.seventeen').toggleClass("zoomedright");
    });

    $(".eighteen").on("click", function () {
      $('.eighteen').toggleClass("zoomedright");
    });

    $(".nineteen").on("click", function () {
      $('.nineteen').toggleClass("zoomup");
    });

    $(".twenty").on("click", function () {
      $('.twenty').toggleClass("zoomup");
    });

    $(".twentyone").on("click", function () {
      $('.twentyone').toggleClass("zoomup");
    });

    $(".twentytwo").on("click", function () {
      $('.twentytwo').toggleClass("zoomup");
    });
    
    $(".twentythree").on("click", function () {
      $('.twentythree').toggleClass("zoomupright");
    });

    $(".twentyfour").on("click", function () {
      $('.twentyfour').toggleClass("zoomupright");
    });

    $(".twentyfive").on("click", function () {
      $('.twentyfive').toggleClass("zoomupright");
    });

    $(".twentysix").on("click", function () {
      $('.twentysix').toggleClass("zoomupright");
    });

    $(".twentyseven").on("click", function () {
      $('.twentyseven').toggleClass("zoomupright");
    });

    $(".twentyeight").on("click", function () {
      $('.twentyeight').toggleClass("zoomup");
    });

    $(".twentynine").on("click", function () {
      $('.twentynine').toggleClass("zoomup");
    });

    $(".thirty").on("click", function () {
      $('.thirty').toggleClass("zoomup");
    });

    $(".thirtyone").on("click", function () {
      $('.thirtyone').toggleClass("zoomup");
    });

    $(".thirtytwo").on("click", function () {
      $('.thirtytwo').toggleClass("zoomupright");
    });

    $(".thirtythree").on("click", function () {
      $('.thirtythree').toggleClass("zoomupright");
    });

    $(".thirtyfour").on("click", function () {
      $('.thirtyfour').toggleClass("zoomupright");
    });

    $(".thirtyfive").on("click", function () {
      $('.thirtyfive').toggleClass("zoomupright");
    });

    $(".thirtysix").on("click", function () {
      $('.thirtysix').toggleClass("zoomupright");
    });

  }
}
