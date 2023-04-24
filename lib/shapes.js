class svgShape {
    constructor() {
        this.shape = ''
        this.color = ''
        this.fontColor = ''
        this.text = ''
    }

    defineColor(color) {
        this.color = (color);
    }

    defineShape(shape) {
        this.shape = (shape);
    }

    defineFontColor(fontColor) {
        this.fontColor = (fontColor);
    }

    defineText(text) {
        this.text = (text);
    }
}


// test
const testShape = new svgShape();
testShape.defineColor("red");
testShape.defineShape("triangle");
testShape.defineText("white");
testShape.defineShape("Testing");



















// triangle

<svg>
  <polygon height="100%" width="100%" points="50 15, 100 100, 0 100" fill="red" />
  <text x="50" y="70" text-anchor="middle" fill="white" font-size="18">SVG</text>
</svg>