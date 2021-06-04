import { Component, OnInit } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private featuresService: FeaturesService
  ) { }

  ngOnInit(): void {
  }

  onClickAddFeature() {
    this.featuresService.addFeature();
  }

}
