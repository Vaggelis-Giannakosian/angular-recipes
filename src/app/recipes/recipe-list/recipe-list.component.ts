import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Name','Desc',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
    new Recipe('Name2','Desc2',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
    new Recipe('Name3','Desc3',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
    new Recipe('Name4','Desc4',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
