This  project demo an complete setup of continues integration and delivery with the build server in azure.

Let me know your github username and I can add you into the contributors so you can do a push to trigger the CI and delivery process

The unit test is done with jasmine and karma. The end to end test/system test is done with protractor and jasmine.

The continues inegration is done with teamcity.

The workflow which automated with above best practice is as follow
1. developer push to github
2. trigger integration tests (unit and e2e tests) with teamcity.
3. minification
4. deploy the new code and change go live

The teamcity url is http://spengineeringltddns.cloudapp.net:1111//viewType.html?buildTypeId=PizzaCI_PizzaBuild
username:admin
password:password01

the deployed app is at http://spengineeringltddns.cloudapp.net

copyright in mytest
