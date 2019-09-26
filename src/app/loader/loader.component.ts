import { Component } from '@angular/core'; 
import { LoaderService } from './loader.service';
import { Subject } from 'rxjs';
 
@Component({ 
  selector: 'app-loader', 
  templateUrl: './loader.component.html', 
  styleUrls: ['./loader.component.css'] 
}) 
 
export class LoaderComponent { 
  color = 'primary'; 
  mode = 'indeterminate'; 
  value = 60; 
  isLoading: Subject<boolean> = this.loaderService.isLoading; 

  constructor(private loaderService: LoaderService){} 
} 

