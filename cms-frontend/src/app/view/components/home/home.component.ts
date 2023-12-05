import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  registrationNumber: string = '';
  selectedStyle: string = 'input_click-1'; // Default style
  previewText: string = '';
  selectedPlateColor: string = ''; // Dynamically updated color

  plateStyleColors: { [key: string]: string } = {
    'input_click-1': '#3498db', // Blue color (example)
    'input_click-2': '#e74c3c', // Red color (example)
    'input_click-3': '#2ecc71', // Green color (example)
    // Add colors for other styles
  };

  previewPlate() {
    const plateInput = this.registrationNumber.toUpperCase();
    this.previewText = `${this.selectedStyle} - ${plateInput}`;

    // Update the selectedPlateColor based on the selectedStyle
    this.selectedPlateColor = this.plateStyleColors[this.selectedStyle] || '';
  }

}
