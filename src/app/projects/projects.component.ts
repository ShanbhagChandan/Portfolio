import { Component } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  heading:string = 'Projects';

  constructor(private menuServiceService:MenuServiceService){
    
  }

  ngOnInit(){
    this.menuServiceService.SetPageHeading(this.heading);
  }
}



