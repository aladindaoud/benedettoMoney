import { Component, OnInit } from '@angular/core';
import { PouchdbService } from '../pouchdb.service';
 

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  selectedYear!: string;
  selectedMonth!: string;
  availableYears: string[] = [];
  availableMonths: string[] = [];
  dailyRecords: any[] = [];
  totalIncome = 0;
  totalExpenses = 0;
  netTotal = 0;
  stuckedTotal= 0;
  constructor(private pouchdbService: PouchdbService) {}

  ngOnInit() {
    // Initialize available years and months
    this.generateAvailableYears();
    this.generateAvailableMonths();
    // Set defaults to the current year and month
    this.selectedYear = this.getCurrentYear();
    this.selectedMonth = this.getCurrentMonth();
    // Load data for the selected year and month
    this.loadMonthlyData();
    this.showTotalAmounts()
  }
  
  async  showTotalAmounts() {
    try {
       this.stuckedTotal = await this.pouchdbService.calculateTotalIncomeAndExpenses();
      
    } catch (error) {
      console.error('Failed to retrieve totals:', error);
    }
  }
    
  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

  // Generate available years (for example, from 2020 to the current year)
  generateAvailableYears() {
    const startYear = 2020; // Adjust this value as needed
    const currentYear = new Date().getFullYear();
    for (let year = startYear; year <= currentYear; year++) {
      this.availableYears.push(year.toString());
    }
  }

  // Generate the list of available months
  generateAvailableMonths() {
    const months = [
      '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
    ];
    this.availableMonths = months;
  }

  // Get the current year as a string
  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }

  // Get the current month as a string
  getCurrentMonth(): string {
    return ('0' + (new Date().getMonth() + 1)).slice(-2); // Zero-padding for month
  }

  // Fetch and display records for the selected year and month
  async loadMonthlyData() {
    if (this.selectedYear && this.selectedMonth) {
      const selectedDate = `${this.selectedYear}-${this.selectedMonth}`;
      try {
        this.dailyRecords = await this.pouchdbService.getRecordsByMonth(selectedDate);
        this.calculateTotals();
      } catch (error) {
        console.error('Error loading monthly data:', error);
      }
    }
  }

  // Handle changes in year or month selection
  onYearOrMonthChange() {
    this.loadMonthlyData();
  }

  // Calculate totals for income, expenses, and net total
  calculateTotals() {
    this.totalIncome = this.dailyRecords.reduce((sum, record) => sum + record.income, 0);
    this.totalExpenses = this.dailyRecords.reduce((sum, record) =>
      sum + record.expenses.reduce((expSum:any, exp:any) => expSum + exp.value, 0), 0);
    this.netTotal = this.totalIncome - this.totalExpenses;
  }
}
