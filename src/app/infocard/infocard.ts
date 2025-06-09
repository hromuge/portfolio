import {Component, input} from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-infocard',
  imports: [
    MatProgressBar
  ],
  templateUrl: './infocard.html',
  standalone: true,
  styleUrl: './infocard.css'
})
export class Infocard {
  title = input<string>('Title');
  percentageValue = input<number>(0);
  years = input<number>(0);
}
