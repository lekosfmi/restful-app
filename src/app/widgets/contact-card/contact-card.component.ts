import {
  Component,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ContactsService } from '../../services/contacts-service/contacts.service';
import { Contact } from '../../models/contact';
import { Success } from '../../models/success';
import { _ } from 'underscore';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() id: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() website: string;

  public appComp: AppComponent;
  public currentRoute: string;

  private _contactServ: ContactsService;
  private _router: Router;

  constructor(
    cs: ContactsService,
    i: Injector,
    r: Router
  ) {
    this._contactServ = cs;
    this.appComp = i.get(AppComponent);
    this._router = r;
  }

  ngOnInit() {
    this.currentRoute = this._router.url;
  }

  toEditForm(): void {
    switch(this.currentRoute) {
      case '/':
      case `/contacts/${this.id}`: {
        this._router.navigate(['contacts', this.id, 'edit']);
        break;
      }
      case `/contacts/${this.id}/edit`:
      default: {
        this._router.navigate(['contacts', this.id]);
      }
    }
  }

  deleteThisContact(id: string, data: Success): void {
    let { contacts } = this.appComp;
    let matchingUrl = this.currentRoute === `/contacts/${id}` || `/contacts/${id}/edit`;
    contacts = _.without(contacts, _.findWhere(contacts, { id }));

    if (contacts) {
      matchingUrl && this._router.navigate(['/']);
      this.appComp.contacts = contacts;
    }
  }

  onDeleteContact(): void {
    this._contactServ
        .deleteAContact(this.id)
        .then((data: Success) => this.deleteThisContact(this.id, data))
        .catch(err => console.log(err));
  }

}
