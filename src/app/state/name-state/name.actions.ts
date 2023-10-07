export class ChangeName {
  static readonly type = '[Name] Change name';
  constructor(public newName: string) {}
}
