import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button'; 
import { IconComponent } from '../../atoms/icon/icon';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './action-button.html',
  styleUrl: './action-button.css'
})
export class ActionButtonComponent {
  @Input() text: string = '';
  @Input() iconName?: 'foto' | 'huella' | 'check' | 'spinner';
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'secondary';

  @Output() clicked = new EventEmitter<void>();
}
