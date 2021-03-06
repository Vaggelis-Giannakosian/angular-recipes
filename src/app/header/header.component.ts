import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {}

  onSave(){
    this.dataStorageService.storeRecipes();
  }

  onFetch(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
