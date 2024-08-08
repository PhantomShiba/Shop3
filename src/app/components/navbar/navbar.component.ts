import {Component} from "@angular/core";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(public authService: AuthService){}
}
