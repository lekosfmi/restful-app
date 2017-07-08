import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ContactsService {

  private _http: Http;
  private _hostname: string;
  private _endPoint: string;
  private _apiEndpoint: string;

  constructor(http: Http) {
    this._http = http;
    this._hostname = 'http://127.0.0.1:3001';
    this._apiEndpoint = this._hostname + '/api/';
  }

  ngOnInit() { }

  public getAllContacts(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this._http.get(this._apiEndpoint + 'contacts')
                       .subscribe(data => resolve(data.json()),
                                  err => reject(err.json()));
    });
  }

  public addContact(formObj): Promise<any> {
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json');

    const payload: {} = {
      first_name: formObj.first_name,
      last_name: formObj.last_name,
      email: formObj.email,
      website: formObj.website
    };

    return new Promise((resolve, reject) => {
      return this._http.post(this._apiEndpoint + 'contacts', payload, options)
                       .subscribe(data => resolve(data.json()),
                                  err => reject(err.json));
    });
  }

  public getAContact(id: string): Promise<any>{
    let url = 'contacts' + '/' + id;
    return new Promise((resolve, reject) => {
      return this._http.get(this._apiEndpoint + url)
                       .subscribe(data => resolve(data.json()),
                                  err => reject(err.json()));
    });
  }

  public deleteAContact(id: string): Promise<any> {
    let url = 'contacts' + '/' + id;
    return new Promise((resolve, reject) => {
      return this._http.delete(this._apiEndpoint + url)
                       .subscribe(data => resolve(data.json()),
                                  err => reject(err.json()));
    });
  }

  public updateAContact(id: string, payload): Promise<any> {
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json');

    let url = 'contacts' + '/' + id;
    return new Promise((resolve, reject) => {
      return this._http.put(this._apiEndpoint + url, payload, options)
                       .subscribe(data => resolve(data.json()),
                                  err => reject(err.json()));
    });
  }

}
