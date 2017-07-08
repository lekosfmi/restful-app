import {
  Component,
  OnInit,
  Injector
} from '@angular/core';
import { _ } from 'underscore';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact'
import { ContactsService } from '../../services/contacts-service/contacts.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  private appComp: AppComponent;
  public id: string;
  public contact: Contact;
  public error;

  private _activatedRoute: ActivatedRoute;
  private _contactServ: ContactsService;


  constructor(
    ar: ActivatedRoute,
    cs: ContactsService,
    i: Injector
  ) {
    this._activatedRoute = ar;
    this._contactServ = cs;
    this.appComp = i.get(AppComponent);
  }

  ngOnInit() {
    this._activatedRoute
        .params
        .subscribe(params => this.id = params['id']);

    this.id && this._contactServ
                   .getAContact(this.id)
                   .then((data: Contact) => this.contact = data)
                   .catch((err: string) => this.error = err);
  }

  updateAContact(payload) {
    let contacts = this.appComp.contacts;
    let contact = _.findWhere(contacts, { id: this.id });
    let index = this.appComp.contacts.indexOf(contact);
    let keys = Object.keys(payload);

    keys.forEach(key => contact[key] = payload[key]);
    this.appComp.contacts[index] = contact;
  }

  onEditForm(event: Contact): void {
    const {
      first_name,
      last_name,
      email,
      website
    } = this.contact;

    const payload = {
      first_name: event.first_name || first_name,
      last_name: event.last_name || last_name,
      email: event.email || email,
      website: event.website || website
    };

    this.updateAContact(payload);

    // this._contactServ
    //     .updateAContact(this.id, payload)
    //     .then(data => data)
    //     .catch(err => console.log(err));

  }

}
