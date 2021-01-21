import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {FormControlName} from '@angular/forms';

import {TranslateUtil} from '../../../utils/translate-util';

@Component({
  selector: 'app-form-group-required-minlength',
  templateUrl: './form-group-required-minlength.component.html',
  styleUrls: ['./form-group-required-minlength.component.scss']
})
export class FormGroupRequiredMinlengthComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() htmlFor: string;
  @Input() termMinlength: string;  
  @ContentChild(FormControlName) control: FormControlName;

  input: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.input = this.control;
    if(this.input === undefined){
      throw new Error(TranslateUtil.getMessage('form', 'ngComponentException'));
    }
  }

  getMessage(){
    let term = [this.label];
    if(this.input.errors?.required){      
      return TranslateUtil.getMessage('form', 'required', term);
    }else{
      term[1] = this.termMinlength;
      return TranslateUtil.getMessage('form', 'minlength', term);
    }
  }

  hasError(): boolean{
    return (this.input.errors?.required || this.input.errors?.minlength) && (this.input.dirty || this.input.touched);
  }

}
