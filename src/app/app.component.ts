import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularcomplete-guide';
  featureSelected: string = 'recipe';
  OnNavigationSelected(featureSelected: string) {
    this.featureSelected = featureSelected;
  }

}
