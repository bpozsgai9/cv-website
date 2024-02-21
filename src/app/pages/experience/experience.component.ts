import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  fetchedData?: any;
  logoImgUrl?: any;
  cardImgUrl?: any;
  readonly assetsFolder = '../../../assets/';

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
    this.http.get(this.assetsFolder + 'experience.json').subscribe(data => {
      this.fetchedData = data;
    });
  }
}


