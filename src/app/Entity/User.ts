export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  sexe: string;
  birthDate: string;
  ville: string;
  address: string;
  email: string;
  phoneNumber: string;
  password: string;


  constructor(firstName: string, lastName: string, username: string, sexe: string, birthDate: string, ville: string, address: string,
              email: string, phoneNumber: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.sexe = sexe;
    this.birthDate = birthDate;
    this.ville = ville;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}
