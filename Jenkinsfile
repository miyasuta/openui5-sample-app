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
                ABAP_USER = ABAP_DEVELOPMENT_CREDS_USR
                ABAP_PASS = ABAP_DEVELOPMENT_CREDS_PSW
            }
            steps {
                echo "host: ${env.ABAP_DEVELOPMENT_SERVER_HOST}"
                echo "credentials: ${env.ABAP_DEVELOPMENT_CREDS}"
                sh 'npx nwabap upload --conn_server ${env.ABAP_DEVELOPMENT_SERVER_HOST}'
            }
        }        
    }
}