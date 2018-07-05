import React from 'react';
import {Vector, Const, Line, CanvasSpace, Form} from 'ptjs';

export default class Canvas extends React.Component {
    constructor() {
        super();
        this.space;
        this.onResize = this.onResize.bind(this);
    }

    renderCanvas() {
        this.space = this.floatySpace(this.space);
    }

    onResize() {
        this.space.removeAll();
        this.renderCanvas();
    }

    componentDidMount() {
        this.renderCanvas();
        window.onresize = this.onResize;
    }

    floatySpace(space) {
        const colors = ['#FF3F8E', '#04C2C9', '#2E55C1'];
        space = new CanvasSpace('canvas').setup({bgcolor: '#000'});
        const form = new Form(space);

        // Elements
        let pts = [];
        let center = space.size.$divide(1.8);
        let angle = -(window.innerWidth * 0.5);
        let count = window.innerWidth * 0.05;
        if (count > 150) count = 150;
        let line = new Line(0, angle).to(space.size.x, 0);
        let mouse = center.clone();

        let r = Math.min(space.size.x, space.size.y);
        for (let i = 0; i < count; i++) {
            let p = new Vector(Math.random() * r - Math.random() * r, Math.random() * r - Math.random() * r);
            p.moveBy(center).rotate2D(i * Math.PI / count, center);
            p.brightness = 0.1;
            pts.push(p);
        }

        // Canvas
        space.add({
            animate: function () {

                for (let i = 0; i < pts.length; i++) {
                    // rotate the points slowly
                    let pt = pts[i];

                    pt.rotate2D(Const.one_degree / 20, center);
                    form.stroke(false).fill(colors[i % 3]).point(pt, 1);

                    // get line from pt to the mouse line
                    let ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

                    let distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse));

                    if (distFromMouse < 50) {
                        if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
                    } else {
                        if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
                    }

                    const color = "rgba(255,255,255," + pts[i].brightness + ")";
                    form.stroke(color).fill(true).line(ln);
                }
            },

            onMouseAction: function (type, x, y) {
                if (type === "move") {
                    mouse.set(x, y);
                }
            },

            onTouchAction: function (type, x, y) {
                this.onMouseAction(type, x, y);
            }
        });

        space.bindMouse();
        space.play();
        return space;
    }

    render() {
        return <div id="pt" className=" canvas canvas-static">
            <canvas id="canvas" width="421" height="856" style={{width: '421px', height: '856px'}}/>
        </div>;
    }
}
