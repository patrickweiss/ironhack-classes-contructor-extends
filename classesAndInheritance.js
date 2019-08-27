class Rectangle {
    // TODO
    constructor(laengeNumber,breiteNumber){
        this.laengeNumber=laengeNumber;
        this.breiteNumber=breiteNumber;
    }

    calculatePerimeter(){
        return this.laengeNumber*2+this.breiteNumber*2;
    }
    calculateArea(){
        return this.breiteNumber*this.laengeNumber;
    }
  }
  
  class Square extends Rectangle {
    // TODO
    constructor(seitenLaengeNumber){
        super(seitenLaengeNumber,seitenLaengeNumber);
    }
  }
  
  let r1 = new Rectangle(6,7)
  console.log('Perimeter of r1 =', r1.calculatePerimeter()) // 26
  console.log('Area of r1 =', r1.calculateArea()) // 42
  
  var s1 = new Square(5)
  console.log('Perimeter of s1 =', s1.calculatePerimeter()) // 20
  console.log('Area of s1 =', s1.calculateArea()) // 25
  
  var s2 = new Square(10)
  console.log('Perimeter of s2 =', s2.calculatePerimeter()) // 40
  console.log('Area of s2 =', s2.calculateArea()) // 100