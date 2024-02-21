import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  fetchedData?: any;
  logoImgUrl?: any;
  cardImgUrl?: any;
  readonly assetsFolder = '../../../assets/';

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
    this.http.get(this.assetsFolder + 'education.json').subscribe(data => {
      this.fetchedData = data;
    });
  }
}
