pipeline {
    agent any
    environment {
        def app_config =  readJSON file: 'package.json'
        APP_VERSION = "${app_config.version}"
        def scannerHome = tool 'sonarqube-9.5';
    }
    stages {
        stage('Code Quality Check via SonarQube') {
            steps {
                script {
                    withSonarQubeEnv("sonarqube-9.5") {
                        sh "${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=cicd-frontend"
                    }
                }
            }
        }
        stage('Build') { 
            agent any
            steps {
                sh "gradle build --exclude-task test"
                sh 'docker build -t 580213590443.dkr.ecr.us-east-1.amazonaws.com/cicd-frontend:${APP_VERSION} .'
            }
        }
        stage('Push to ECR'){
            agent any
            steps{
                sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 580213590443.dkr.ecr.us-east-1.amazonaws.com'
                sh 'docker push 580213590443.dkr.ecr.us-east-1.amazonaws.com/cicd-frontend:${APP_VERSION}'
            }
        }

    }
}