import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'activity-filter',
  templateUrl: './activity-filter.component.html',
  styleUrls: ['./activity-filter.component.css']
})
export class ActivityFilterComponent implements OnInit {

  filtersList = {
    discuss: false,
    updates: false,
    tasks: false,
    shares: false,
    relation: false,
    transaction: false,
    units: false,
    chat: false,
    phone: false,
    email: false,
    meeting: false,
    documents: false,
    promotion: false,
    deals: false
  };

  selectedFilters = []

  @Output() filters = new EventEmitter<any>();
  @Output() searchInput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(keyword): void {
    this.searchInput.emit(keyword);
  }

  updateSelection(key, value): void {
    this.filtersList[key] = value;

    let selectedFilters = []
    for (let key in this.filtersList){
      if(this.filtersList[key]) {
        selectedFilters.push({
          'name': key
        })
      }
    }
    this.selectedFilters = selectedFilters;
    this.filters.emit(this.selectedFilters);
  }

  removeFilter(key, e): void {
    this.updateSelection(key, false)
    e.stopPropagation();
  }

  removeAllFilters(e): void {
    for (let key in this.filtersList){
      this.filtersList[key] = false;
    }
    this.selectedFilters = [];
    this.filters.emit(this.selectedFilters);
    e.stopPropagation();
  }

}
