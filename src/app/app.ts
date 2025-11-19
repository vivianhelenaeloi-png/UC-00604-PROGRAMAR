import { Component, signal } from '@angular/core';

import { Header } from "./componentes/header/header";
import { Main } from "./componentes/main/main";
import { Footer } from "./componentes/footer/footer";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    Header,
    Main,
    Footer
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('uc00604programar');
}
