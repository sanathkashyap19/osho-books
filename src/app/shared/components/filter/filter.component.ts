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
      this.allFilters.forEach((item,i) => {
        if(item.option === val) {
          item.checked = false;
        }
      });
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

  removeSelected() {
    this.selectedOptions = [];
    this.modalService.dismissAll();
    this.updateFilterOptions();
  }

  applySelected() {
    this.updateFilterOptions();
    this.modalService.dismissAll();
  }

  removeAll() {
    this.selectedOptions = [];
    this.updateFilterOptions();
  }

  updateFilterOptions() {
    this.filterOptions = Object.assign([],this.selectedOptions);
  }

  removeItem(option) {
    if(this.selectedOptions.includes(option)) {
      this.selectedOptions.splice(this.selectedOptions.indexOf(option),1);
    }
    this.updateFilterOptions();
  }

}
