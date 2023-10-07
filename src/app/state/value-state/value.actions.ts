export class IncrementValue {
  static readonly type = '[Value] Increment value by one';
}
export class DecrementValue {
  static readonly type = '[Value] decrement value by one';
}
export class ResetValue {
  static readonly type = '[Value] Reset value by one';
}
export class SetValue {
  static readonly type = '[Value] Set value defined by user';
  constructor(public newValue: number) {}
}
