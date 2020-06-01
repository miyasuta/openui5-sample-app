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
            environment {
                ABAP_DEVELOPMENT_CREDS = credentials('abap_login')
            }
            steps {
                sh "npx nwabap upload --conn_server ${env.ABAP_DEVELOPMENT_SERVER_HOST} --conn_user ${$ABAP_DEVELOPMENT_CREDS_USR} --conn_password ${$ABAP_DEVELOPMENT_CREDS_PSW}"
            }
        }        
    }
}