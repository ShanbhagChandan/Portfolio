import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,MatButtonModule,MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  clicked:boolean = false;
  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private menuServiceService:MenuServiceService){

  }

  MenuIconClicked(){
    this.clicked = !this.clicked;
    this.menuClicked.emit(this.clicked);
    this.menuServiceService.SetMenuExpandStatus(this.clicked)
  }
}
