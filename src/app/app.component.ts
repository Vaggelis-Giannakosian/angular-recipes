import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature:string = 'recipes';
  title = 'recipes';

  onNavigate(loadedFeature:string){
    this.loadedFeature = loadedFeature
  }
}
