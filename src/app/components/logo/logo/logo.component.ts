import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnumTypeLogo } from '@shared/generic.enum';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  @Input() type: EnumTypeLogo;
  @Input() route: string;

  constructor() {
    this.type = EnumTypeLogo.ISOTYPE;
    this.route = '/home';
  }
}
