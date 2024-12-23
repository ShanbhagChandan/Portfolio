import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MenuComponent } from './menu/menu.component';
import { MenuServiceService } from './service/menu-service.service';
import { BreakpointObserver, LayoutModule, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavigationComponent,FooterComponent,MatSidenavModule,MenuComponent,LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
  isHandSet: boolean = false;
  isTablet: boolean = false;

  constructor(private observer: BreakpointObserver){
  }

  ngOnInit(){
    this.isHandSet = this.observer.isMatched(Breakpoints.HandsetPortrait);
    this.isTablet = this.observer.isMatched([Breakpoints.HandsetLandscape,Breakpoints.TabletPortrait])
  }
}
