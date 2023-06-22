export default class UserDto {
  _id;
  name;
  username;

  constructor(model) {
    this._id = model._id;
    this.name = model.name;
    this.username = model.username;
  }
}
