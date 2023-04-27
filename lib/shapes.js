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
        this.axisY = 130;
      }
    
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      }
}

class Square extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
        this.axisY = 110;
      }
    render() { 
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`
    }
}

class Circle extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
        this.axisY = 113;
      }
    render() { 
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

module.exports = {
    Triangle,
    Square,
    Circle,
};
