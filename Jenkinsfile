pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
        bat 'npm test'
      }
    }
    stage('Code Quality') {
      steps {
        withSonarQubeEnv('MySonarQubeServer') {
          bat 'sonar-scanner'
        }
      }
    }
    stage('Security') {
      steps {
        bat 'snyk test || exit /b 0'
      }
    }
  }
}
