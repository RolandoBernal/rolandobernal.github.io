class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {
    const today = new Date();
    const hour = today.getHours();
  
    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }
  
  get owner() {
    return this._owner;
  }
  
  set owner(owner) {
    this._owner = owner;
    console.log('setter called:', this._owner);
  }
  
  speak() {
    console.log(this.sound);
  }
}

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  
  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone() {
    return this._phone;
  }
}

const dog1 = new Pet('dog', 1, 'pug', 'yip yip');
const dog2 = new Pet('dog', 8, 'border collie', 'woof woof');

//console.log(dog1.sound);
//console.log(dog2.sound);

//dog1.speak();
//dog2.speak();

//console.log(dog1);
//console.log(dog1.activity);

dog1.owner = new Owner('Violet', '123 This Street');
dog1.owner.phone = '(555) 555-5555';

console.log(dog1.owner);


/*
class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }
  
  	get level() {
    	if (this.credits > 90) {
      	return "Senior";
      } else if (this.credits > 60) {
      	return "Junior";
      } else if (this.credits > 30) {
      	return "Sophomore";
      } else {
      	return "Freshman";
      }
    }

    stringGPA() {
        return this.gpa.toString();
    }
}

const student = new Student(3.9, 80);
console.log(student.level);
*/