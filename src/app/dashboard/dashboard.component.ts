import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  routerLink = inject(Router)
  serviceRegister = inject(RegisterService)

  backToRegister(){
    this.routerLink.navigate(['/register'])
  }
}
