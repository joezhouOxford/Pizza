This  project demo an complete setup of continues integration and delivery with the build server in azure.

Let me know your github username and I can add you into the contributors so you can do a push to trigger the CI and delivery process

The unit test is done with jasmine and karma. The end to end test/system test is done with protractor and jasmine.

The continues inegration is done with teamcity.

The workflow which automated with above best practice is as follow
1. develoepr pushi to github
2. trigger integration tests (unit and e2e tests) with teamcity.
3. after integration tests passes, deploy and change go live

The teamcity url is http://137.116.198.227:1111/project.html?projectId=PizzaCI&tab=projectOverview
username:admin
password:password01

the deployed app is at http://137.116.198.227:8000/

I was going to use webpack (like grunt) as dependency management tool and has run out of time.
