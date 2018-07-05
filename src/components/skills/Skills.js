import React from 'react';

export default class Skills extends React.Component {
    constructor() {
        super();

        this.state = {
            play: true,
            canvas: window.TagCanvas,
            config: {
                depth: 0.8,
                frontSelect: true,
                initial: [0.1, -0.1],
                maxSpeed: 0.05,
                outlineColour: '#fff',
                reverse: true,
                textColour: '#08fdd8'
            }
        };
    }

    componentDidMount() {
        this.state.canvas.Start('skills-canvas', 'tags', this.state.config);
    }

    render() {
        return <section className='skills component ' id='skills'>
            <div className='flex component-container'>
                <div className='skills-content'><p><i>M</i>y main area of expertise is front end development and
                    everything
                    related with this side of web. HTML, CSS, JS (ES5,ES6), building small &amp; medium Web Apps, React,
                    AngularJS, features and responsive web design.</p><p>I also have some experience with
                    NodeJs &amp; TypeScript.</p><p>Currently Learning : ES6 Generators.</p></div>
                <div id='canvas-container' className='canvas-container'>
                    <canvas width='500' height='500' id='skills-canvas' className='skills-canvas' />
                </div>
                <div id='tags'>
                    <ul>
                        <li><a data-weight='27' href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target='_blank'>HTML5</a></li>
                        <li><a data-weight='27' href='https://developer.mozilla.org/en/docs/Web/CSS/CSS3' target='_blank'>CSS3</a></li>
                        <li><a data-weight='27' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>JavaScript</a></li>
                        <li><a data-weight='27' href='https://docs.spring.io/spring-restdocs/docs/current/reference/html5/' target='_blank'>REST</a></li>
                        <li><a data-weight='27' href='https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX' target='_blank'>AJAX</a></li>
                        <li><a data-weight='27' href='https://www.json.org/' target='_blank'>JSON</a></li>
                        <li><a data-weight='27' href='http://requirejs.org/' target='_blank'>RequireJS</a></li>
                        <li><a data-weight='27' href='https://docs.angularjs.org/guide/concepts' target='_blank'>AngularJS</a></li>
                        <li><a data-weight='27' href='https://reactjs.org/' target='_blank'>React</a></li>
                        <li><a data-weight='27' href='https://reactjs.org/docs/introducing-jsx.html' target='_blank'>JSX</a></li>
                        <li><a data-weight='27' href='https://nodejs.org/en/' target='_blank'>Node JS</a></li>
                        <li><a data-weight='27' href='https://git-scm.com/' target='_blank'>Git</a></li>
                        <li><a data-weight='27' href='http://handlebarsjs.com/' target='_blank'>Handlebars.js</a></li>
                        <li><a data-weight='27' href='http://getbootstrap.com/docs/3.3/' target='_blank'>Bootstrap</a></li>
                        <li><a data-weight='27' href='https://sass-lang.com/guide' target='_blank'>SASS</a></li>
                        <li><a data-weight='27' href='https://developers.google.com/web/fundamentals/design-and-ux/responsive/' target='_blank'>RWD</a></li>
                        <li><a data-weight='27' href='https://jquery.com/' target='_blank'>jQuery</a></li>
                        <li><a data-weight='27' href='https://karma-runner.github.io/2.0/index.html' target='_blank'>Karma</a></li>
                        <li><a data-weight='27' href='https://jasmine.github.io/' target='_blank'>Jasmine</a></li>
                        <li><a data-weight='27' href='https://facebook.github.io/jest/' target='_blank'>Jest</a></li>
                        <li><a data-weight='27' href='http://grunt.com/' target='_blank'>Grunt</a></li>
                        <li><a data-weight='27' href='https://webpack.js.org/' target='_blank'>Webpack</a></li>
                        <li><a data-weight='27' href='http://babeljs.io/docs/en' target='_blank'>Babel</a></li>
                        <li><a data-weight='27' href='https://www.npmjs.com/' target='_blank'>npm</a></li>
                        <li><a data-weight='27' href='https://yarnpkg.com/lang/en/' target='_blank'>yarn</a></li>
                    </ul>
                </div>
            </div>
        </section>
    }
}
;
