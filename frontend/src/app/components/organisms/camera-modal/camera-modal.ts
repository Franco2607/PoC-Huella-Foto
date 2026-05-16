import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button';

@Component({
  selector: 'app-modal-camara',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './camera-modal.html',
  styleUrl: './camera-modal.css',
})
export class ModalCamara { 

  _mostrarCamara: boolean = false;

  @Input() 
  set mostrarCamara(valor: boolean) {
    this._mostrarCamara = valor;
    if (valor === true) {
      this.setupCamera(); 
    } else {
      this.detenerCamara(); 
    }
  }

  get mostrarCamara(): boolean {
    return this._mostrarCamara;
  }

  @Output() cerrarCamara = new EventEmitter<void>();
  @Output() capturarFoto = new EventEmitter<string>();

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  stream: MediaStream | null = null

  async setupCamera() {
    try {
      console.log("📸 1. Solicitando acceso a la cámara...");
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: false
      });
      
      console.log("✅ 2. Permiso concedido. Cámara activada en memoria.");

      setTimeout(() => {
        if (this.videoElement && this.videoElement.nativeElement) {
          console.log("📺 3. Conectando imagen al HTML...");
          this.videoElement.nativeElement.srcObject = this.stream;
          this.videoElement.nativeElement.play();
        } else {
          console.error("🚨 ERROR: La cámara prendió, pero Angular no encuentra el #videoElement");
        }
      }, 100);

    } catch (err) {
      console.error("🚨 Error grave al acceder a la cámara:", err);
      alert("No se pudo acceder a la cámara. Verifica los permisos de tu navegador.");
    }
  }

  detenerCamara() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }

  cancelar() { 
    this.detenerCamara();
    this.cerrarCamara.emit();
  }

  tomarFoto() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');

    if (context) {
      context.drawImage(video, 0, 0, 640, 480);
      const fotoBase64 = canvas.toDataURL('image/jpeg', 0.7);

      this.detenerCamara();
      this.capturarFoto.emit(fotoBase64);
    }
  }
}
