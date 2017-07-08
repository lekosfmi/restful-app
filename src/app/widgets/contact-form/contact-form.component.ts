import {
  DoCheck,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() title: string = "Contact Form";
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() email: string = '';
  @Input() website: string = '';

  @Output() submitForm = new EventEmitter();

  public contacts: Array<Contact>;
  public currentRoute: string;
  public form: FormGroup;
  public formJson: boolean = true;

  private _router: Router;

  constructor(
    fb: FormBuilder,
    r: Router
  ) {
    this.form = fb.group({
      first_name: [this.firstName, Validators.required],
      last_name: [this.lastName, Validators.required],
      email: [this.email, Validators.required],
      website: [this.website, Validators.required]
    });
    this._router = r;
  }

  ngOnInit() {
    this.currentRoute = this._router.url;
  }

  toggleFormJson() {
    this.formJson = this.formJson ? false : true;
  }

  onSubmitForm(event: Event): void {
    event.preventDefault();

    const form = this.form;
    const {
      first_name,
      last_name,
      email,
      website
    } = form.value;

    let formObj = {
      first_name,
      last_name,
      email,
      website
    };

    if (this.currentRoute === '/') {
      form.valid && this.submitForm.emit(formObj);
      form.reset();
    } else {
      this.submitForm.emit(formObj);
    }
  }

}
