import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.html',
  styleUrls: ['./svg-icon.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SvgIconComponent {
  @Input() name!: string;
  get icon(): string {
    return this.name.toLowerCase();
  }
}
