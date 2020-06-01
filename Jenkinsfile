pipeline {
    agent { 
        dockerfile {
            args '--security-opt seccomp=/var/jenkins_home/myseccomp/chrome.json'
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
        stage('deploy') {
            steps {

                sh 'npm run-script upload'
            }
        }        
    }
}