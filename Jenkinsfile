pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('prepare') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('build') {
            steps {
                sh 'ui5 build -a'
            }
        }
        stage('deploy') {
            steps {
                echo 'to be implemented...'
            }                       
        }
    }
}