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
        stage('build') {
            steps {

                sh 'npm run-script build'
            }
        }        
        stage('test') {
            steps {
                sh 'npm run-script test'
            }
        }        
        stage('deploy') {
            when {
                branch 'master'
            }            
            environment {
                ABAP_DEVELOPMENT_CREDS = credentials('abap_login')
            }
            steps {
                echo "user: ${ABAP_DEVELOPMENT_CREDS_USR}"
                echo "pass: ${ABAP_DEVELOPMENT_CREDS_PSW}"
                echo "branch: ${env.BRANCH_NAME}"
                sh "npx nwabap upload --conn_server ${env.ABAP_DEVELOPMENT_SERVER_HOST} --conn_user ${ABAP_DEVELOPMENT_CREDS_USR} --conn_password ${ABAP_DEVELOPMENT_CREDS_PSW}"
            }
        }        
    }
}