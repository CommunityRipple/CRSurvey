import React, {Component} from 'react';
import Layout from './Layout';
import LayoutRow from './LayoutRow'
import * as Survey from 'survey-react';

require('../sass/app.scss');

const surveyData = require('./survey.json');

export default class App extends Component {

    constructor(props) {
        super(props);
        Survey.Survey.cssType = "bootstrap";
        Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    }

    render() {
        return (
            <Layout>
                <LayoutRow>
                    <Survey.Survey css={{root: "panel panel-default"}} json={surveyData}/>
                </LayoutRow>
            </Layout>
        );
    }
}
