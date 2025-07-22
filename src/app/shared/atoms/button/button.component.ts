import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Boton';
  constructor() {}

  ngOnInit() {}
}
