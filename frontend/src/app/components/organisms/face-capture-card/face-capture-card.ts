import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusIndicatorComponent } from '../../molecules/status-indicator/status-indicator';
import { ActionButtonComponent } from '../../molecules/action-button/action-button';

@Component({
  selector: 'app-face-capture-card',
  standalone: true,
  imports: [CommonModule, StatusIndicatorComponent, ActionButtonComponent],
  templateUrl: './face-capture-card.html',
  styleUrl: './face-capture-card.css',
})
export class FaceCaptureCardComponent {
  @Input() fotoBase64: string | null = null;
  
  @Output() abrirCamara = new EventEmitter<void>();

  solicitarCamara() {
    this.abrirCamara.emit();
  }
}