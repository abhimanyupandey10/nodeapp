export class CityService {
  getCities(date: Date) {
    console.log(date);

    return [
      {
        code: 247667,
        name: "Roorkee",
      },
      {
        code: 411021,
        name: "Pune",
      },
    ];
  }
}
