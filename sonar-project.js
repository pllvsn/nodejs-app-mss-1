const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.235.198.97:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.login': 'sqa_7f45f11945901e98d45f7484ed8bf338b35e9196',
	    'sonar.projectKey':'NodeJS',
	    //'sonar.login': '9bcdd15299583c728cf53837f2ab21fcb36c5aa4',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	    'sonar.javascript.coveragePlugin=lcov,
	    'sonar.javascript.lcov.reportPaths=coverage/lcov.info/
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
