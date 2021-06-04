import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-feature',
  templateUrl: './one-feature.component.html',
  styleUrls: ['./one-feature.component.scss']
})
export class OneFeatureComponent implements OnInit {
  // nameFeature? : string;
  nameFeature : string | undefined;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.nameFeature = this.route.snapshot.params['name'];
  }

}
