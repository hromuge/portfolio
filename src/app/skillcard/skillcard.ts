import {Component, input} from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-skillcard',
  imports: [
    MatProgressBar
  ],
  templateUrl: './skillcard.html',
  standalone: true,
  styleUrl: './skillcard.css'
})
export class Skillcard {
  title = input<string>('Title');
  percentageValue = input<number>(0);
  years = input<number>(0);
}
