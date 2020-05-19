pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('prepare') {
            steps {
                sh 'npm config set @sap:registry https://npm.sap.com'
                sh 'npm install'
            }
        }
        stage('test') {
            environment {
                CHROME_BIN = '/usr/bin/google-chrome'
            }
            steps {
                echo "CHROME_BIN:  ${CHROME_BIN}"
                sh 'npm run-script test'
            }
        }        
        stage('build') {
            steps {

                sh 'npm run-script build'
            }
        }
    }
}