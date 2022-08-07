import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedSection: string = 'recipe';
  constructor() {}

  onNavigate(selectedFeature: string): void {
    this.selectedSection = selectedFeature;
  }
}
