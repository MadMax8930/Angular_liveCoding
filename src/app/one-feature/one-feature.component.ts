import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-one-feature',
  templateUrl: './one-feature.component.html',
  styleUrls: ['./one-feature.component.scss']
})
export class OneFeatureComponent implements OnInit {
  // nameFeature? : string;
  // nameFeature : string | undefined;
  feature: any;

  constructor(
    private route: ActivatedRoute,
    private featuresService: FeaturesService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const dataFeature = this.featuresService.features.slice();
    this.feature = dataFeature.find( f => f.id == id);
    console.log(this.feature);
  }

}
