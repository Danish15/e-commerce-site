import { Component, OnInit, } from '@angular/core';
import {InventoryService} from "./inventory.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService]
})

export class InventoryComponent implements OnInit {

  inventory = [];

  constructor(private _inventoryService: InventoryService){}
  ngOnInit() {
    this._inventoryService.getInventory()
    .subscribe(resInventoryData => this.inventory = resInventoryData); 
  }
}

