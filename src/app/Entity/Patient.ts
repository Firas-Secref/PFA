import {Location} from "./Location";

export class Patient {
   id: number;
   firstName: string;
   lastName: string;
   username: string;
   email: string;
   password: string;
   birthDate: string;
   sexe: string;
   ville: string;
   address : string;
   phoneNumber : string;
   familyNumber: number;
   PhoneNumber1: string;
   PhoneNumber2: string;
   profileImage: any;
   location: Location;
   user: number


  constructor(firstName: string, lastName: string, username: string, email: string, password: string, birthDate: string, sexe: string, ville: string, address: string, phoneNumber: string, familyNumber: number, PhoneNumber1: string, PhoneNumber2: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.sexe = sexe;
    this.ville = ville;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.familyNumber = familyNumber;
    this.PhoneNumber1 = PhoneNumber1;
    this.PhoneNumber2 = PhoneNumber2;
  }
}
