import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Commentarios</h3>
    <img src="https://img.lemde.fr/2016/08/04/0/0/560/267/664/0/75/0/a9b1471_17806-xsb5q2.jpg" alt="" srcset="">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis numquam quidem, quam aspernatur, voluptatum voluptates sapiente natus quo molestias deleniti exercitationem fuga pariatur, mollitia accusantium deserunt repellendus laboriosam magni veniam.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
