import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusIndicatorComponent } from '../../molecules/status-indicator/status-indicator';
import { ActionButtonComponent } from '../../molecules/action-button/action-button';

@Component({
  selector: 'app-fingerprint-card',
  standalone: true,
  imports: [CommonModule, StatusIndicatorComponent, ActionButtonComponent],
  templateUrl: './fingerprint-card.html',
  styleUrl: './fingerprint-card.css'
})
export class FingerprintCardComponent {

  @Input() huellaTemplate: string | null = null;

  @Input() estaCapturando: boolean = false;

  @Output() capturar = new EventEmitter<void>();

  solicitarHuella() {
    this.capturar.emit();
  }
}