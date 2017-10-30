import React, {Component} from 'react';
import Layout from './Layout';
import * as Survey from 'survey-react';
import {Row, Col} from 'react-bootstrap';

require('../sass/app.scss');

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {

    constructor(props) {
        super(props);
        this.surveyModel = new Survey.ReactSurveyModel(
            {
                pages: [
                    {
                        name: "page1",
                        elements: [
                            {
                                name: "question1",
                                title: "How many of your five nearest neighbours do you know the names of?",
                                type: "rating",
                                isRequired: true,
                                rateValues: [
                                    {
                                        value: 0,
                                        text: "0"
                                    },
                                    {
                                        value: 0.2,
                                        text: "1"
                                    },
                                    {
                                        value: 0.4,
                                        text: "2"
                                    },
                                    {
                                        value: 0.6,
                                        text: "3"
                                    },
                                    {
                                        value: 0.8,
                                        text: "4"
                                    },
                                    {
                                        value: 1.0,
                                        text: "5"
                                    }
                                ],
                            }
                        ],
                    },
                    {
                        name: "page2",
                        elements: [
                            {
                                name: "question2",
                                title: "When you travel by car, how often do you carpool?",
                                type: "rating",
                                isRequired: true,
                                rateValues: [
                                    {
                                        value: 0,
                                        text: "<b>Never</b>"
                                    },
                                    {
                                        value: 0.1,
                                        text: "10%"
                                    },
                                    {
                                        value: 0.2,
                                        text: "20%"
                                    },
                                    {
                                        value: 0.3,
                                        text: "30%"
                                    },
                                    {
                                        value: 0.4,
                                        text: "40%"
                                    },
                                    {
                                        value: 0.5,
                                        text: "50%"
                                    },
                                    {
                                        value: 0.6,
                                        text: "60%"
                                    },
                                    {
                                        value: 0.7,
                                        text: "70%"
                                    },
                                    {
                                        value: 0.8,
                                        text: "80%"
                                    },
                                    {
                                        value: 0.9,
                                        text: "90%"
                                    },
                                    {
                                        value: 1.0,
                                        text: "<b>Always</b>"
                                    }
                                ],
                            }
                        ],
                    },
                    {
                        name: "page3",
                        elements: [
                            {
                                name: "question3",
                                title: "Did you vote in the last local election?",
                                type: "radiogroup",
                                isRequired: true,
                                choices: [
                                    {
                                        value: 1,
                                        text: "Yes"
                                    },
                                    {
                                        value: 0,
                                        text: "No"
                                    },
                                    {
                                        value: 0.5,
                                        text: "N/A"
                                    }
                                ],
                                colCount: 3,
                            }
                        ]

                    },
                    {
                        name: "page4",
                        elements: [
                            {
                                name: "question4",
                                title: "What percentage of your recyclables do you recycle?",
                                type: "rating",
                                isRequired: true,
                                rateValues: [
                                    {
                                        value: 0,
                                        text: "<b>None</b>"
                                    },
                                    {
                                        value: 0.1,
                                        text: "10%"
                                    },
                                    {
                                        value: 0.2,
                                        text: "20%"
                                    },
                                    {
                                        value: 0.3,
                                        text: "30%"
                                    },
                                    {
                                        value: 0.4,
                                        text: "40%"
                                    },
                                    {
                                        value: 0.5,
                                        text: "50%"
                                    },
                                    {
                                        value: 0.6,
                                        text: "60%"
                                    },
                                    {
                                        value: 0.7,
                                        text: "70%"
                                    },
                                    {
                                        value: 0.8,
                                        text: "80%"
                                    },
                                    {
                                        value: 0.9,
                                        text: "90%"
                                    },
                                    {
                                        value: 1.0,
                                        text: "100%"
                                    }
                                ],
                            }
                        ],
                    },
                    {
                        name: "page5",
                        elements: [
                            {
                                name: "question5",
                                title: "Are you a part of any local groups or organizations that meet regularly?",
                                type: "radiogroup",
                                isRequired: true,
                                choices: [
                                    {
                                        value: 1,
                                        text: "Yes"
                                    },
                                    {
                                        value: 0,
                                        text: "No"
                                    },
                                ],
                                colCount: 3,
                            }
                        ]

                    },
                    {
                        name: "page6",
                        elements: [
                            {
                                name: "question6",
                                title: "Do you attempt to buy things locally when possible?",
                                type: "radiogroup",
                                isRequired: true,
                                choices: [
                                    {
                                        value: 1,
                                        text: "Yes"
                                    },
                                    {
                                        value: 0.5,
                                        text: "Sometimes"
                                    },
                                    {
                                        value: 0,
                                        text: "No"
                                    },
                                ],
                                colCount: 3,
                            }
                        ]

                    },
                    {
                        name: "page7",
                        elements: [
                            {
                                name: "question7",
                                title: "At Halloween, do you: ",
                                type: "radiogroup",
                                isRequired: true,
                                choices: [
                                    {
                                        value: 0,
                                        text: "draw the curtains and hide?"
                                    },
                                    {
                                        value: 1,
                                        text: "greet them with open spooky arms?"
                                    },
                                    {
                                        value: 0.5,
                                        text: "Not an option"
                                    },
                                ],
                                colCount: 3,
                            }
                        ]

                    },
                    {
                        name: "page8",
                        elements: [
                            {
                                name: "question8",
                                title: "The last time a new person moved in on your street (or in your building) how long did it take you to greet them?",
                                type: "rating",
                                isRequired: true,
                                rateValues: [
                                    {
                                        value: 1,
                                        text: "1 day"
                                    },
                                    {
                                        value: 0.8,
                                        text: "1 week"
                                    },
                                    {
                                        value: 0.6,
                                        text: "1 month"
                                    },
                                    {
                                        value: 0.2,
                                        text: "1 year"
                                    },
                                    {
                                        value: 0,
                                        text: "Never"
                                    },
                                ],

                            }
                        ]

                    },
                    {
                        name: "page9",
                        elements: [
                            {
                                name: "question9",
                                title: "Do you love where you live?",
                                type: "radiogroup",
                                isRequired: true,
                                choices: [
                                    {
                                        value: 1,
                                        text: "Yes"
                                    },
                                    {
                                        value: 0,
                                        text: "No"
                                    },
                                ],
                                colCount: 3,
                            }
                        ]
                    },
                    {
                        name: "page10",
                        elements: [
                            {
                                name: "question10",
                                title: "Can you <i>without hesitation</i> name 5 things that a visitor would find entertaining in your area? ",
                                type: "radiogroup",
                                isRequired: true,
                                choices: [
                                    {
                                        value: 1,
                                        text: "Yes"
                                    },
                                    {
                                        value: 0,
                                        text: "No"
                                    },
                                    {
                                        value: 0.5,
                                        text: "There's nothing entertaining here"
                                    },
                                ],
                                colCount: 3,
                            }
                        ]

                    },
                    {
                        name: "page11",
                        elements: [
                            {
                                name: "question11",
                                title: "When was the last time you volunteered for something community oriented?",
                                type: "rating",
                                isRequired: true,
                                rateValues: [
                                    {
                                        value: 1,
                                        text: "<b>Never</b>"
                                    },
                                    {
                                        value: 0.8,
                                        text: "this decade"
                                    },
                                    {
                                        value: 0.6,
                                        text: "this year"
                                    },
                                    {
                                        value: 0.4,
                                        text: "this month"
                                    },
                                    {
                                        value: 0.2,
                                        text: "this week"
                                    },
                                    {
                                        value: 0,
                                        text: "<b>Today</b>"
                                    },
                                ],

                            }
                        ]

                    },


                ]
            }
        );

        Survey.Survey.cssType = "bootstrap";
        Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    }

    render() {
        return (
            <Layout>
                <Row className="survey">
                    <Col md={2} />
                    <Col md={8}>
                        <Survey.Survey className="Panel" model={this.surveyModel}/>
                    </Col>
                    <Col md={2} />
                </Row>
            </Layout>
        );
    }
}
