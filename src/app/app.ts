import { Component } from '@angular/core';
import {Skillcard} from './skillcard/skillcard';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [Skillcard, MatIcon],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {}
