import { _ } from 'underscore';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Component, OnInit, Injector } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts-service/contacts.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  public id: string;
  public appComp: AppComponent;
  public contact: Contact;
  public error: string;

  private _activatedRoute: ActivatedRoute;
  private _contactServ: ContactsService;

  constructor(
    ar: ActivatedRoute,
    cs: ContactsService,
    i: Injector
  ) {
    this._activatedRoute = ar;
    this.appComp = i.get(AppComponent);
    this._contactServ = cs;
  }

  ngOnInit() {
    this._activatedRoute
        .params
        .subscribe(params => this.id = params['id']);

    if (this.id) {
      this.contact = _.findWhere(this.appComp.contacts, { id: this.id });
    }
  }

}
