export class Place {
  constructor(name, location, hours) {
    this.name = name;
    this.address = location?.address;
    this.location = { lat: location?.lat, lng: location?.lng };
    this.hours = hours;
    this.id = new Date().toString() + Math.random().toString();
  }
}
