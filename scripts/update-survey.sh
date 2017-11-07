#!/bin/bash

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

echo "Downloading survey. Edit it here: https://surveyjs.io/Service/EditSurvey/7da3d70b-c4d2-4409-85a1-27353475c64d"
echo
echo
curl https://dxsurveyapi.azurewebsites.net/api/Survey/getSurvey?surveyId=7da3d70b-c4d2-4409-85a1-27353475c64d -o ${ROOT}/src/survey.json
