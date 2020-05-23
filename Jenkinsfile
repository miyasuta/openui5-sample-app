pipeline {
    agent { 
        dockerfile {
            args '--cap-add=SYS_ADMIN'
        }    
    }
    stages {
        stage('prepare') {
            steps {
                echo "workspace directory is ${WORKSPACE}"
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