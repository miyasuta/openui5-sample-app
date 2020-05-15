pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm config set @sap:registry https://npm.sap.com'
                sh 'npm install'
                sh 'npm run-script build'
            }
        }
        stage('test') {
            steps {
                sh 'npm run-script test'
            }
        }
    }
}