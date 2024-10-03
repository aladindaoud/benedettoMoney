import { Component } from '@angular/core';
import { PouchdbService } from '../pouchdb.service';
import { ModalController, ToastController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { KeywordListComponent } from '../keyword-list/keyword-list.component';
 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedDate: string = '';
  record: any;
  newKey: string = '';
  keywords: string[] = []; // This will hold the list of keywords from the database
  constructor(private pouchdbService: PouchdbService, private toastController : ToastController, private modalCtrl : ModalController) {

    this.selectedDate =  formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    this.loadRecord()
  }

  async loadRecord() {
    if (this.selectedDate) {
      try {
        this.record = await this.pouchdbService.getRecord(this.selectedDate);
        if (!this.record) {
          console.log(this.record)
          this.record = { income: 0, expenses: [] }; // Initialize if no record is found
        }
      } catch (error) {
        this.record = { income: 0, expenses: [] }; 
      }
    }
  }


  async openKeywordList(index: number) {
    const modal = await this.modalCtrl.create({
      component: KeywordListComponent,
    });
  
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    if (data && data.keyword) {
      // Update the key of the i-th element in the record's expenses array
      this.record.expenses[index].key = data.keyword;
    }
  }
  


  addExpense() {
    // Add a new empty expense with both title (key) and value
    this.record.expenses.push({ key: '', value: 0 });
  }

  removeExpense(index: number) {
    // Remove the expense at the specified index
    this.record.expenses.splice(index, 1);
  }

  async saveChanges() {
    try {
      if (this.record && this.selectedDate) {
        // Update the record in the PouchDB
        await this.pouchdbService.updateRecord(this.selectedDate, this.record.income, this.record.expenses);
        this.showToast('Record saved successfully!');
      }
    } catch (error) {
      this.showToast('Error saving record.', 'danger');
    }
  }


  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      mode:"ios",
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
