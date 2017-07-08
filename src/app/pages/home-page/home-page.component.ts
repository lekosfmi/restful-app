import { Component, Injector } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts-service/contacts.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public appComp: AppComponent;

  private _contactServ: ContactsService;

  constructor(cs: ContactsService, i: Injector) {
    this.appComp = i.get(AppComponent);
    this._contactServ = cs;
  }

  public handleNewContact(event: Contact): {} {
    const {
      first_name,
      last_name,
      email,
      website
    } = event;

    const submittedContact = {
      first_name,
      last_name,
      email,
      website
    };

    return this._contactServ
               .addContact(submittedContact)
               .then((data: Contact) => this.appComp.contacts.unshift(data))
               .catch(err => err);
  }
}
