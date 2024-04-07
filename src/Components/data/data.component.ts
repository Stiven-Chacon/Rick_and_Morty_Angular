import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    FormsModule,
    FontAwesomeModule
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit{

  dataList: any[]=[];
  filteredDataList: any[]=[]; 
  searchcaracter: any = '';
  constructor(private dataService: DataService ){}

  ngOnInit(): void {
    this.getData()
    this.search()
  }
  getData(){
    this.dataService.getData().subscribe({
      next: (res) => {
        this.dataList = res.results;    
      },
      error: (err) =>{
        console.log(err);
        
      },
    })
  }
  search() {
    this.filteredDataList = this.dataList.filter((item) =>
      item.name.toLowerCase().includes(this.searchcaracter.toLowerCase())
    );
}

}

