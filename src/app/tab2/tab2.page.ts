import { Component } from '@angular/core';
import { PouchdbService } from '../pouchdb.service';
import { ModalController, ToastController } from '@ionic/angular';
import { KeywordListComponent } from '../keyword-list/keyword-list.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  date: string = new Date().toISOString().split('T')[0]; // Default to today
  income!: number ;
  expenses: { key: string; value: number }[] = [];
  newKey: string = '';
  newValue: number | null = null;

  constructor(private pouchdbService: PouchdbService,private toastController: ToastController,private modalCtrl: ModalController) {}

  addExpense() {
    if (this.newKey && this.newValue !== null) {
      this.expenses.push({ key: this.newKey, value: this.newValue });
      this.newKey = '';
      this.newValue = null;
    }
  }

  async saveRecord() {
    try {
      await this.pouchdbService.addRecord(this.date, this.income, this.expenses);
      this.showToast('Record saved successfully!');
      this.resetForm();
    } catch (error) {
      this.showToast('Error saving record.', 'danger');
    }
  }

  resetForm() {
    this.date = new Date().toISOString().split('T')[0];
    this.income = 0;
    this.expenses = [];
    this.newKey = '';
    this.newValue = null;
  }


  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
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

  async openKeywordList() {
    const modal = await this.modalCtrl.create({
      component: KeywordListComponent,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data && data.keyword) {
      this.newKey = data.keyword; // Set the selected keyword as the title
    }
  }
}
