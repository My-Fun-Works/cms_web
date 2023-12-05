import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() regNumber: string = '';
  formattedPlate: string = '';




  ngOnChanges(changes: SimpleChanges) {
    if (changes['regNumber']) {
      // Implement logic to preview the plate based on the regNumber
      const ukPlateRegex = /^([A-Z]{2})(\d{2})([A-Z]{3})$/;

      const matches = this.regNumber.match(ukPlateRegex);

      if (matches) {
        // If the regNumber matches the pattern, format the preview
        this.formattedPlate = `${matches[1]} ${matches[2]} ${matches[3]}`;
        console.log('Previewing UK plate:', this.formattedPlate);
      } else {
        console.log('Invalid UK plate format:', this.regNumber);
        this.formattedPlate = ''; // Clear the formatted plate if invalid
      }
    }
  }

}
