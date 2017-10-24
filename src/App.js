import React, {Component} from 'react';
import Layout from './Layout';
import {Model, Survey} from 'survey-react';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {

    constructor(props) {
        super(props);
        var surveyModel = new Model({

            pages: [
                {
                    elements: [
                        {
                            type: "rating",
                            name: "q1",
                            title: "How many of your five nearest neighbours do you know the names of?"
                        }
                    ],
                    name: "page1"
                }
            ]
        });

        this.state = {model: surveyModel}
    }

    render() {
        return (
            <Layout>
                <Survey model={this.state.model}/>
            </Layout>
        );
    }
}
