pipeline {
    agent { 
        dockerfile {
            args '--privileged'
        }    
    }
    stages {
        stage('prepare') {
            steps {
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