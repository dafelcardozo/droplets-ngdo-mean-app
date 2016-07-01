interface IService {
  doStuff():number;
}

export class DonorsService implements IService {
  doStuff():number {
    return 1;
  }
}
