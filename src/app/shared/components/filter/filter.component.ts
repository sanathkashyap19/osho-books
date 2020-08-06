import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class FilterComponent implements OnInit {
  categories = ['Education','Entertainment','Worship','Travel','Electronics','Environment'];
  allFilters = [];
  selectedOptions = [];
  filterOptions = [];

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = true;
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.categories.forEach(item => {
      let newValue = {
        option: item,
        checked: false
      };
      this.allFilters.push(newValue);
    });
  }

  openModal(content) {
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  filterClick(val) {
    let valid = false;
    if(this.selectedOptions.includes(val)) {
      valid = true;
      this.selectedOptions.splice(this.selectedOptions.indexOf(val),1);
      this.unCheckFilters(val);
    }
    if(!valid) {
      this.selectedOptions.push(val);
      this.allFilters.forEach((item,i) => {
        if(item.option === val) {
          item.checked = true;
        }
      });
    }
  }

  unCheckFilters(value) {
    this.allFilters.forEach(item => {
      if(item.option === value) {
        item.checked = false;
      }
    });
  }
  
  removeSelected() {
    this.selectedOptions = [];
    this.unCheckAlloptions();
    this.modalService.dismissAll();
    this.updateFilterOptions();
  }

  unCheckAlloptions() {
    this.allFilters.forEach(item => {
      item.checked = false;
    });
  }

  applySelected() {
    this.updateFilterOptions();
    this.modalService.dismissAll();
  }

  removeAll() {
    this.selectedOptions = [];
    this.unCheckAlloptions();
    this.updateFilterOptions();
  }

  updateFilterOptions() {
    this.filterOptions = Object.assign([],this.selectedOptions);
  }

  removeItem(option) {
    if(this.selectedOptions.includes(option)) {
      this.selectedOptions.splice(this.selectedOptions.indexOf(option),1);
    }
    this.unCheckFilters(option);
    this.updateFilterOptions();
  }
}
