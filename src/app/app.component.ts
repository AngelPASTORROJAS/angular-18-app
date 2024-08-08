import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({                  // decorateur de la class AppComponent
  selector: 'app-root',       // le nom de la balise composant
  standalone: true,           // import de composant ou module extérieur est activer et se retrouve dans imports
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = 'Lille'
}
