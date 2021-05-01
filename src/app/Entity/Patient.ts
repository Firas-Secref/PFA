export class Patient {
   id: number;
   firstName: string;
   lastName: string;
   username: string;
   sexe: string;
   birthDate: string;
   ville: string;
   address : string;
   familyNumber: number;
   phoneNumber : string;
   familyPhoneNumber1: string;
   familyPhoneNumber2: string;
   userId: number;
   locationId: number;


  constructor(firstName: string, lastName: string, username: string, sexe: string, birthDate: string, ville: string, address: string, familyNumber: number, phoneNumber: string, familyPhoneNumber1: string, familyPhoneNumber2: string, locationId: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.sexe = sexe;
    this.birthDate = birthDate;
    this.ville = ville;
    this.address = address;
    this.familyNumber = familyNumber;
    this.phoneNumber = phoneNumber;
    this.familyPhoneNumber1 = familyPhoneNumber1;
    this.familyPhoneNumber2 = familyPhoneNumber2;
    this.locationId = locationId;

  }
}
