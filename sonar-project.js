const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://34.226.138.58:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - 27/9',
	    'sonar.login': 'sqa_e20df3a816c1711da91057164e545ce735f1f20d',
	    'sonar.projectKey':'NodeJS',
	    //'sonar.login': '9bcdd15299583c728cf53837f2ab21fcb36c5aa4',
	    'sonar.login': 'admin',
	    'sonar.password': 'sonar',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	    'sonar.javascript.coveragePlugin': 'lcov',
	    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info/'
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
