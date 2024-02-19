import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
export class CustomValidator {
 
    // Validates URL
    static urlValidator(url: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (url.pristine) {
        return null;
      }
      const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
      url.markAsTouched();
      if (URL_REGEXP.test(url.value)) {
        return null;
      }
      return {
        invalidUrl: true
      };
    }
  
    // Validates passwords
    static matchPassword(group: { controls: { password: any; confirm: any; }; markAsTouched: () => void; }): any {
      const password = group.controls.password;
      const confirm = group.controls.confirm;
      if (password.pristine || confirm.pristine) {
        return null;
      }
      group.markAsTouched();
      if (password.value === confirm.value) {
        return null;
      }
      return {
        invalidPassword: true
      };
    }
  
    // Validates numbers
    static numberValidator(number: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (number.pristine) {
        return null;
      }
      const NUMBER_REGEXP = /^[0-9]+$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value) || number.value == "") {
        return null;
      }
      return {
        invalidNumber: true
      };
    }
  
    // Validates numbers and ","
    static numberValidatortasa(number: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (number.pristine) {
        return null;
      }
      const NUMBER_REGEXP = /^([0-9]|[,])+$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value) || number.value == "") {
        return null;
      }
      return {
        invalidNumbertasa: true
      };
    }
  
    // Validates US SSN
    static ssnValidator(ssn: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (ssn.pristine) {
        return null;
      }
      const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
      ssn.markAsTouched();
      if (SSN_REGEXP.test(ssn.value)) {
        return null;
      }
      return {
        invalidSsn: true
      };
    }
  
    // Validates US phone numbers
    static phoneValidator(number: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (number.pristine) {
        return null;
      }
      const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
      number.markAsTouched();
      if (PHONE_REGEXP.test(number.value)) {
        return null;
      }
      return {
        invalidNumber: true
      };
    }
  
    // Validates zip codes
    static zipCodeValidator(zip: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (zip.pristine) {
        return null;
      }
      const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
      zip.markAsTouched();
      if (ZIP_REGEXP.test(zip.value)) {
        return null;
      }
      return {
        invalidZip: true
      };
    }
  
    // Validates 
    static stringValidator(name: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (name.pristine) {
        return null;
      }
      const FirstName_REGEXP = /^([A-z ñ Ñ])*$/;
      name.markAsTouched();
      if (FirstName_REGEXP.test(name.value)) {
        return null;
      }
      return {
        invalidString: true
      };
    }
  
    // Validates firstName
    static nameValidator(name: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (name.pristine) {
        return null;
      }
      const FirstName_REGEXP = /^([A-z &aacute;&eacute;&iacute;&oacute;&uacute;&Aacute;&Eacute;&Iacute;&Oacute;&Uacute;&ntilde;&Ntilde;á;é;í;ó;ú;Á;É;Í;Ó;Ú;ñ;Ñ;Ü;ü;ç;Ç;-])*$/;
      name.markAsTouched();
      if (FirstName_REGEXP.test(name.value)) {
        return null;
      }
      return {
        invalidString: true
      };
    }
  
    // Validates Name entity
    static nameEmpre(name: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (name.pristine) {
        return null;
      }
      const FirstName_REGEXP = /^[^*;¿?]*$/;
      name.markAsTouched();
      if (FirstName_REGEXP.test(name.value)) {
        return null;
      }
      return {
        invalidString: true
      };
    }
  
    // Validates plazo
    static plazoSolValidator(plazo: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (plazo.pristine) {
        return null;
      }
      const plazoSol_REGEXP = /^([1-9])([0-9])*$/;
      plazo.markAsTouched();
      if (plazoSol_REGEXP.test(plazo.value) || plazo.value == "") {
        return null;
      }
      return {
        invalidPlazo: true
      };
    }
  
    // Validates tasa
    static tasaValidator(tasa: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (tasa.pristine) {
        return null;
      }
      const tasa_REGEXP = /^(([0-9])|([0-9][0-9]))([,][0-9]+)?$/;
      tasa.markAsTouched();
      if (tasa_REGEXP.test(tasa.value) || tasa.value == "") {
        return null;
      }
      return {
        invalidTasa: true
      };
    }


  
    // Validates Email
    
    static EmailValidator(Email: { pristine: any; markAsTouched: () => void; value: string; }): any {      
      if (Email.pristine) {
        return null;
      }
      const Email_REGEXP = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
      Email.markAsTouched();
      if (Email_REGEXP.test(Email.value) || Email.value == "") {
        return null;
      }
      return {
        invalidEmail: true
      };
    }
    // Validates que empice por tres
    static cel(num: { pristine: any; markAsTouched: () => void; value: string; }): any {      
      if (num.pristine) {
        return null;
      }
      const valor = num.value.charAt(0)     
      num.markAsTouched();
      if ( valor == "3") {        
        return null;
      }
      return {
        invalidNum: true
      };
    }
    // Validates que empice por 4 o 5
    static visaMater(numtar: { pristine: any; markAsTouched: () => void; value: string; }): any {         
      if (numtar.pristine) {
        return null;
      }
      const valor = numtar.value.charAt(0)     
      numtar.markAsTouched();
      if ( valor == "4" || valor == "5" ) {        
        return null;
      }
      return {
        invalidNumtar: true
      };
    }

    
    // Validates de segundo correo 
    static segundoCorreo(email:  AbstractControl)   {  
      if (email.pristine) {
        return null;
      }
     const correo = email.parent?.value.email;
     const correoValidado = email.value;
     email.markAsTouched();
     if(correo == correoValidado){
       return null;
     } 
      return {
        invalid: true
      };
    }
  
    // Validates Rango_25_50
    static Rango_20_50Validator(Rango_20_50: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (Rango_20_50.pristine) {
        return null;
      }
      const Rango_20_50_REGEXP = /^((2[0-9])|([3-4][0-9])|(50))$/;
      Rango_20_50.markAsTouched();
      if (Rango_20_50_REGEXP.test(Rango_20_50.value) || Rango_20_50.value == "") {
        return null;
      }
      return {
        invalidRango_20_50: true
      };
    }
  
    // Validates Porcentajes
    static porcenValidator(porcen: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (porcen.pristine) {
        return null;
      }
      const porcen_REGEXP = /^[0-9]+[%]$/;
      porcen.markAsTouched();
      if (porcen_REGEXP.test(porcen.value) || porcen.value == "") {
        return null;
      }
      return {
        invalidporcen: true
      };
    }
  
    // Validates Alfanum
    static AlfaNumValidator(AlfaNum: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (AlfaNum.pristine) {
        return null;
      }
      const AlfaNum_REGEXP =/^[a-zA-Z0-9 ]+$/;
      AlfaNum.markAsTouched();
      if (AlfaNum_REGEXP.test(AlfaNum.value) || AlfaNum.value == "") {
        return null;
      }
      return {
        invalidAlfaNum: true
      };
    }
  
    // Validates AlfaNumespa
    static AlfaNumespaValidator(AlfaNumespa: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (AlfaNumespa.pristine) {
        return null;
      }
      const AlfaNumespa_REGEXP = /^([A-Za-z0-9]|[ ])*$/;
      AlfaNumespa.markAsTouched();
      if (AlfaNumespa_REGEXP.test(AlfaNumespa.value) || AlfaNumespa.value == "") {
        return null;
      }
      return {
        invalidAlfaNumespa: true
      };
    }
  
    static identifiValidator(number: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (number.pristine) {
        return null;
      }
      const NUMBER_REGEXP = /^(([1]([0-9]{1,9})$)|([2-9]([0-9]{1,8}))$)/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value) || number.value == "") {
        return null;
      }
      return {
        invalidId: true
      };
    }
  
    static numCuentaValidator(numCuenta: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (numCuenta.pristine) {
        return null;
      }
      const NUMCUENTA_REGEXP = /^(([a-zA-Z0-9]{1})+([0-9a-zA-Z-]*))$/;
      numCuenta.markAsTouched();
      if (NUMCUENTA_REGEXP.test(numCuenta.value) || numCuenta.value == "") {
        return null;
      }
      return {
        invalidnumCuenta: true
      };
    }


    static multiplo5(control: AbstractControl): ValidationErrors| null {      
      let nro = parseInt(control.value);
      
      if (nro % 5 == 0)
          return null;
      else
          return { multiplo5: true }
  }
  
  }
  
  