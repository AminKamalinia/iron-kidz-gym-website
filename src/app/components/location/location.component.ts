import { Component } from '@angular/core';
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-location',
  imports: [FontAwesomeModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faPhoneVolume = faPhoneVolume;
}
