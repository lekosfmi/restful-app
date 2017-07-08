import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './services/contacts-service/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contacts: Array<Contact> = [];

  private _contactServ; ContactsService;

  constructor(cs: ContactsService) {
    this._contactServ = cs;
    this._contactServ
        .getAllContacts()
        .then((data: Array<Contact>) => {
          this.contacts = data.reverse()
          console.log(this.contacts);
        })
        .catch(err => err);
  }

}
