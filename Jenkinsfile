pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Code Quality') {
      steps {
        // Assuming SonarQube is configured in Jenkins
        withSonarQubeEnv('MySonarQubeServer') {
          sh 'sonar-scanner'
        }
      }
    }
    stage('Security') {
      steps {
        sh 'snyk test || true'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker build -t myapp .'
        sh 'docker-compose up -d'
      }
    }
  }
}
