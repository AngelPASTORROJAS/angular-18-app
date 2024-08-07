# Tuto Angular

## On vérifie que on a la version de node 18, 20 (LTS)
```bash
node --version
```

## On install la ligne de commande angular
```bash
npm install -g @angular/cli
```

## On vérifie la version de Angular
```
ng version
```

## On créer le projet "angular-18-app"
```bash
ng new angular-18-app
```

## On choisit nos options
```
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no 
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no 
```

## On installe l'extension VS Code "angular.ng-template"
```
angular.ng-template
```

## Single File component
```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({                  // decorateur de la class AppComponent
  selector: 'app-root',       // le nom de la balise composant
  standalone: true,           // import de composant ou module extérieur est activer et se retrouve dans imports
  imports: [RouterOutlet],
  template: `<h1>Hello world</h1>`,
  styles: `
  h1 {
    color : red;
  }
  `
})
export class AppComponent {
  title = 'angular-18-app';
}
```