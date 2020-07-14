import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class FilterComponent implements OnInit {
  categories = ['Education','Entertainment','Worship','Travel','Electronics','Environment'];
  prices = ['Less than 500','Less than 200'];
  isSelected = false;
  selectedOptions = [];
  filterOptions = [];

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = true;
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  openModal(content) {
    this.modalService.open(content)
  }

  filterClick(val) {
    let valid = false;
    this.selectedOptions.forEach((data,i) => {
      if(data === val) {
        valid = true;
        this.selectedOptions.splice(i,1);
      }
    });
    if(!valid) {
      this.selectedOptions.push(val);
    }
  }

  removeSelected() {
    this.selectedOptions = [];
    this.modalService.dismissAll();
    this.updateFilterOptions();
  }

  applySelected() {
    this.updateFilterOptions();
    this.modalService.dismissAll();
  }

  updateFilterOptions() {
    this.filterOptions = Object.assign([],this.selectedOptions);
  }

}
