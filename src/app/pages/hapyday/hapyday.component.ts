import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hapyday',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hapyday.component.html',
  styleUrls: ['./hapyday.component.css']
})
export class HapydayComponent {
  heartVisible = false;

  drawHeart() {
    this.heartVisible = true;
  }
}
