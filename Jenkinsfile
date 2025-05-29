pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    tools {
        nodejs 'NeuroNode' // Ensure this matches your Jenkins Node.js tool name
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JayCorp97/NeuraTrack.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running ESLint...'
                bat 'npx eslint .'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running OWASP Dependency Check...'
                bat 'npx audit-ci --moderate'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the app (dummy step)...'
                // Simulate deployment step
                bat 'echo Deploy to staging server here'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring (dummy step)...'
                bat 'echo Health checks or integration with Prometheus/Grafana'
            }
        }

    }

    post {
        always {
            echo 'Cleaning up workspace...'
            deleteDir()
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check logs above.'
        }
    }
}
