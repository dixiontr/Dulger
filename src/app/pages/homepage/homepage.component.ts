import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  activeSection = 1;
  isScrolling = false;
  isScrollingToBottom = false;
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) { }
  fullPageScroll(e: string, i: any) {
    console.log("fullPageScroll")
    console.log(e);
    console.log(i);
    console.log(this.document);
    console.log("end")
    let pageScrollInstance: PageScrollInstance = new PageScrollInstance({
      scrollTarget: "#section2",
      document: this.document,
    })
    this.pageScrollService.start(pageScrollInstance);
    this.activeSection = i;
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.pageScrollService.stopAll();
    console.log(event)
    if (!this.isScrolling) {
      var step = this.activeSection;
      this.isScrolling = true;
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
      if (event.deltaY > 0 && step < 3) {
        step += 1;
      }
      if (event.deltaY < 0 && step > 0) {
        step -= 1;
      }

      console.log("activeStep", this.activeSection);
      console.log("Step", step);

      if (step != this.activeSection) {
        this.fullPageScroll("#section" + step, step)
      }

    }
  }

  ngOnInit(): void {
  }

}
