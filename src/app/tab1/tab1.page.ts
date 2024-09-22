import { Component } from '@angular/core';
import { PouchdbService } from '../pouchdb.service'; // Adjust the import according to your structure
import { formatDate } from '@angular/common';

/*import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
*/
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  date: any;
  selectedValue = new Date();
  dailyData: any; // To hold the fetched data

  constructor(private pouchdbService: PouchdbService) {
   // pdfMake.vfs = pdfFonts.pdfMake.vfs;

 
   

    this.date =  formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    this.fetchDailyData(this.date)
  }
  
 
  
  handleRefresh(event:any) {
    setTimeout(() => {
      this.fetchDailyData(this.date);
      event.target.complete();
    }, 500);
  }
  
  onValueChange(value: Date): void {
    this.date = formatDate(value, 'yyyy-MM-dd', 'en-US');
    this.fetchDailyData(value);
  }

  async fetchDailyData(selectedDate: Date): Promise<void> {
    
    const dateKey = selectedDate.toString()
    try {
      this.dailyData = await this.pouchdbService.getRecord(dateKey);
      if (this.dailyData && this.dailyData.expenses) {
        this.dailyData.totalOutcomes = this.calculateTotalOutcomes(this.dailyData.expenses);
        this.dailyData.total = this.dailyData.income - this.dailyData.totalOutcomes;
      }
      console.log(this.dailyData); // For debugging
    } catch (error) {
      console.error('Error fetching daily data:', error);
      this.dailyData = null; // Reset on error
    }
  }

  calculateTotalOutcomes(expenses: { key: string; value: number }[]): number {
    return expenses.reduce((sum, expense) => sum + expense.value, 0);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }




 /* downloadPDF(): void {
    if (!this.dailyData) return; // Exit if there's no data
  
    // Define the document structure
    const documentDefinition: any = {
      content: [
        { text: 'Benedetto', style: 'header' },
        { text: `Date: ${this.date}`, style: 'subheader' },
        { text: `Income: ${this.dailyData.income} TND`, style: 'content' },
        { text: 'Outcomes:', style: 'content' },
        ...this.dailyData.expenses.map((expense: any) => ({
          text: `${expense.key} : ${expense.value} TND`,
          style: 'content'
        })),
        { text: `Total Outcomes: ${this.dailyData.totalOutcomes} TND`, style: 'content' },
        { text: `Net Total: ${this.dailyData.total} TND`, style: 'content' },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        subheader: {
          fontSize: 14,
          margin: [0, 10, 0, 5],
        },
        content: {
          fontSize: 12,
          margin: [0, 5, 0, 5],
        },
      }
    };
  
    // Generate and download the PDF
    pdfMake.createPdf(documentDefinition).download(`Daily_Report_${this.date}.pdf`);
  }*/
  
}
