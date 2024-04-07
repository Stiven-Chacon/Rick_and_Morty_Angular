import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from '../Components/data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aguita';
}
