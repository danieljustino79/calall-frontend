import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {FormControlName} from '@angular/forms';

import {TranslateUtil} from '../../../utils/translate-util';

@Component({
  selector: 'app-form-group-required-pattern',
  templateUrl: './form-group-required-pattern.component.html',
  styleUrls: ['./form-group-required-pattern.component.scss']
})
export class FormGroupRequiredPatternComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() htmlFor: string;
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
      return TranslateUtil.getMessage('form', 'pattern', term);
    }
  }

  hasError(): boolean{
    return (this.input.errors?.required || this.input.errors?.pattern) && (this.input.dirty || this.input.touched);
  }

}
