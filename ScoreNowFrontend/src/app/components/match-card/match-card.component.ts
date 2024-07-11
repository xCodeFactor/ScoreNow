import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css'
})
export class MatchCardComponent {
  @Input() match:any
}
