import { Component } from '@angular/core';
import { BiometricCaptureComponent } from './pages/biometric-enrollment/biometric-enrollment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BiometricCaptureComponent],
  templateUrl: './app.html', 
  styleUrl: './app.css'      
})
export class AppComponent {
  title = 'poc-biometria';
}