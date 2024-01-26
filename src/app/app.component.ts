import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import arrayWords from "../utils/words"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  countriesArray: string[] = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Japan',
    'Australia',
    'India',
    'Brazil',
    'South Africa',
  ];
  title = 'word-generator';
  words = '';
  countries = '';
  limit = 10;
  num = 0;
  handleSlideChange(newLimit: Event) {
    let htmlElement = newLimit.target as HTMLInputElement;
    this.limit = parseInt(htmlElement.value);
  }
  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}
