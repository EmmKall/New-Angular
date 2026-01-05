import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, input, linkedSignal, OnInit, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination-content',
  templateUrl: './pagination-content.component.html',
  styleUrls: ['./pagination-content.component.css'],
  imports: [
    RouterLink
  ],
})
export class PaginationContentComponent implements OnInit {

  // updateCurrentPageE : EventEmitter<number> = new EventEmitter<number>();
  updateCurrentPageE = output<number>();

  currentPage = input<number>(1);
  totalPage   = input<number>(0);

  activePage  = linkedSignal(this.currentPage);

  pages       = computed(() => Array.from( {length: this.totalPage() }, (_, i) => ++i ) );

  constructor() { }

  ngOnInit() {
  }

  updateCurrentPage(page: number) {
    this.activePage.set(page);
    this.updateCurrentPageE.emit(page);
  }

  nextBeforePage(isNextPage: boolean): void {
    const page = isNextPage ? this.activePage() + 1 : this.activePage() - 1;
    this.updateCurrentPage(page);
  }

}
