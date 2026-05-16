import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class IconComponent {
  @Input() name!: 'foto' | 'huella' | 'check' | 'spinner';
}