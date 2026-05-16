import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBadgeComponent } from '../../atoms/status-badge/status-badge';
import { IconComponent } from '../../atoms/icon/icon';

@Component({
  selector: 'app-status-indicator',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, IconComponent],
  templateUrl: './status-indicator.html',
  styleUrl: './status-indicator.css'
})
export class StatusIndicatorComponent {
  @Input() imageBase64: string | null = null; 
  @Input() isSuccess: boolean = false; 
  @Input() defaultIcon: 'foto' | 'huella' = 'foto'; 
}

