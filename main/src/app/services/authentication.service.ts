import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticateService {

  constructor(){}

  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("logout successful");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  userDetails(){
    return firebase.auth().currentUser;
  }
/*
  //data.cardholderName + ' ' + data.cardNumber + ' ' + data.cardType + ' '
  // + data.expiryMonth + ' ' + data.expiryYear
  cardDetails(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().saveCardDetails(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }*/
}