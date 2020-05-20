pipeline {
    agent { docker { image 'rastasheep/alpine-node-chromium:latest' } }
    stages {
        stage('prepare') {
            steps {
                echo "CHROME_BIN : ${DB_ENGINE}"
                sh 'npm config set @sap:registry https://npm.sap.com'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
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