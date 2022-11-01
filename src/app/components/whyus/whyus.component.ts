import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faBrush, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faBrush = faBrush;
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
