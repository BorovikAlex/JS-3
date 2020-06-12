function Laptop(name, model, serialNumber, year, ram, rom, drive, weight) {
  this.name = name;
  this.model = model;
  this.serialNumber = serialNumber;
  this.year = year;
  this.ram = ram;
  this.rom = rom;
  this.drive = drive;
  this.weight = weight;

  this.getRamAndRom = function () {
    return "Размер ОЗУ: " + ram + "\n" + "Размер ПЗУ: " + rom;
  };
}
Ultrabook.counter = 0;

function Ultrabook(name, model, serialNumber, year, ram, rom, weight) {
  this.name = name;
  this.model = model;
  this.serialNumber = serialNumber;
  this.year = year;
  this.ram = ram;
  this.rom = rom;
  this.weight = weight;

  this.getModelInfo = function () {
    return "Ультрабук: " + this.name + "\n" + "Год изготовления: " + this.year;
  };
  if (this.weight < 1500) Ultrabook.counter++;
}

Ultrabook.getCount = function () {
  return "Общее количество ультрабуков: " + Ultrabook.counter + "шт.";
};

var laptop = new Laptop(
  "Dell",
  "XPS",
  "15 7590-6401",
  2020,
  "16Gb",
  "512Gb",
  "none",
  1800
);

var ultrabook = new Ultrabook(
  "Lenovo",
  "IdeaPad",
  "330S-15IKB 81F500PURU",
  2020,
  "16Gb",
  "1000Gb",
  1050
);
var ultrabook2 = new Ultrabook(
  "Lenovo",
  "IdeaPad",
  "330S-15IKB 81F500PURU",
  2019,
  "16Gb",
  "1000Gb",
  1050
);
console.log(laptop.getRamAndRom());
console.log(ultrabook.getModelInfo());
console.log(ultrabook2.getModelInfo());
console.log(Ultrabook.getCount());
