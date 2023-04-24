class svgShape {
    constructor() {
        this.color = ''
        this.fontColor = ''
        this.text = ''
    }
    defineColor(color) {
        this.color = (color);
    }    
    defineText(text) {
        this.text = (text);
    }
    defineFontColor(fontColor) {
        this.fontColor = (fontColor);
    }

}


class Triangle extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
      }
    
    // insert triangle svg code
}

class Square extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
      }
    // insert triangle svg code
}

class Circle extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
      }
    // insert triangle svg code
}

module.exports = {
    Triangle,
    Square,
    Circle,
};





// triangle

// <svg>
//   <polygon height="100%" width="100%" points="50 15, 100 100, 0 100" fill="red" />
//   <text x="50" y="70" text-anchor="middle" fill="white" font-size="18">SVG</text>
// </svg>

// // test
// const testShape = new svgShape();
// testShape.defineColor("red");
// testShape.defineShape("triangle");
// testShape.defineText("white");
// testShape.defineShape("Testing");