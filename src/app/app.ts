import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Skillcard} from './skillcard/skillcard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Skillcard],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  bgColor1 = '#232147';
  bgColor2 = '#23213B';
}
