import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './pages/authentication/login/login.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, RouterLink, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public loginService: LoginService, private router: Router, private dialog: MatDialog) {}
  title = 'tourism';
   

  logout() {
    this.loginService.logout().subscribe(result => {
      if(result){
        console.log('user logged our successfully');
      }
    });
  }
  



  myAccount(){
    if(this.loginService.getIsLoggedIn()){
      this.router.navigate(['/status']);
      
    } else {
      console.log("not login");
      this.router.navigate(['/login']);

    }

  }
}
