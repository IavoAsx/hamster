import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarComponent } from "./components/avatar/avatar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'hamster';
}
