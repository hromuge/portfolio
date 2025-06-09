import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Infocard} from './infocard/infocard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Infocard],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  bgColor = '#232147'
}
