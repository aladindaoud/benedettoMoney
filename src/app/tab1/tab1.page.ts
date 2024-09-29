import { Component } from '@angular/core';
import { PouchdbService } from '../pouchdb.service'; // Adjust the import according to your structure
import { formatDate } from '@angular/common';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Filesystem, Directory } from '@capacitor/filesystem';
// Set up the font files (vfs)
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

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
    
    } catch (error) {
      console.error('Error fetching daily data:', error);
      this.dailyData = null; // Reset on error
    }
  }

  calculateTotalOutcomes(expenses: { key: string; value: number }[]): number {
    return expenses.reduce((sum, expense) => sum + expense.value, 0);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
 
  }




   async downloadPDF(): Promise<any> {

  
  

    if (!this.dailyData) return; // Exit if there's no data
  
    // Define the document structure
    const documentDefinition: any = {
      content: [
        {
          margin: [0,20, 0, 20],
          table: {
            widths: ['*'],
            body: [
              [
                {
                  table: {
                    widths: ['*', '*'],
                    body: [
                      [
                        { text: 'Benedetto', style: 'header', margin: [0, 0, 0, 0] },
                        { text: `Date: ${this.date}`, style: 'subheader', margin: [0, 0, 0, 0]},
                                              ]
                    ]
                  },
                  layout: {
                    hLineWidth: function () { return 1; },
                    vLineWidth: function () { return 1; },
                    hLineColor: function () { return '#000000'; },
                    vLineColor: function () { return '#000000'; },
                  }
                }
              ]
            ],
            layout: {
              hLineWidth: function () { return 1; },
              vLineWidth: function () { return 1; },
              hLineColor: function () { return '#000000'; },
              vLineColor: function () { return '#000000'; },
            }
          }
        },
        { text: `Income: ${this.dailyData.income} TND`, style: 'content' , margin: [0,20, 0, 0]},
        { text: 'Outcomes:', style: 'content',margin: [0,50, 0, 0] },
        ...this.dailyData.expenses.map((expense: any) => ({
          text: `* ${expense.key} : ${expense.value} TND`,
          style: 'content'
        })),
        { text: `Total Outcomes: ${this.dailyData.totalOutcomes} TND`, style: 'content' },
        { text: `Total: ${this.dailyData.total} TND`, style: 'content' ,margin: [0,50, 0, 0]},
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
    pdfMake.createPdf(documentDefinition).download(`Daily_Report_${this.date}.pdf`);
    // Generate and download the PDF
    pdfMake.createPdf(documentDefinition).getBlob(async (blob) => {
      try {
        // Convert the PDF blob to base64 string
        const base64Data = await blobToBase64(blob);
        const base64String = base64Data.split(',')[1]; // Get base64 content only

        // Save the PDF file using Capacitor Filesystem
        const result = await Filesystem.writeFile({
          path: `Daily_Report_${this.date}.pdf`,
          data: base64String,
          directory: Directory.Documents
        });

        console.log('File saved:', result.uri);
      } catch (error) {
        console.error('Error saving file:', error);
      }
    });


  } 
  
}
