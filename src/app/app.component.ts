import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({                  // decorateur de la class AppComponent
  selector: 'app-root',       // le nom de la balise composant
  standalone: true,           // import de composant ou module extérieur est activer et se retrouve dans imports
  imports: [RouterOutlet],
  template: `<h1>Hello world in {{city.toUpperCase()}} {{ 1+1 }} </h1>`,
  styles: `
  h1 {
    color : red;
  }
  `
})
export class AppComponent {
  city = 'Lille'
}
