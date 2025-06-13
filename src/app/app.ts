import { Component } from '@angular/core';
import {Skillcard} from './skillcard/skillcard';

@Component({
  selector: 'app-root',
  imports: [Skillcard],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {}
