export class User {
  [key: string]: any;
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address?: string = '';
  active?: boolean = true;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(options: Partial<User>) {
    for (const key of Object.keys(options)) {
      this[key] = options[key];
    }
  }

}
