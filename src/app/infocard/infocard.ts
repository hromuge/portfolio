import {Component, input} from '@angular/core';

@Component({
  selector: 'app-infocard',
  imports: [],
  templateUrl: './infocard.html',
  standalone: true,
  styleUrl: './infocard.css'
})
export class Infocard {

  title = input<string>();
  information = input<string>();

}
