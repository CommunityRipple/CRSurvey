import React, {Component} from 'react';
import Layout from './Layout';
import * as Survey from 'survey-react';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {

    constructor(props) {
        super(props);
        const surveyModel = new Survey.ReactSurveyModel({
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

        Survey.Survey.cssType = "bootstrap";
        Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

        this.state = {model: surveyModel}
    }

    render() {
        return (
            <Layout>
                <link rel="stylesheet" type="text/css" href="/style/App.css"/>
                <div className="survey">
                    <Survey.Survey className="ddd" model={this.state.model}/>
                </div>
            </Layout>
        );
    }
}
