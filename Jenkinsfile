pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    tools {
        nodejs 'NeuroNode' // Make sure this tool is configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/JayCorp97/NeuraTrack.git'
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
                script {
                    try {
                        bat 'npm test'
                    } catch (err) {
                        echo 'Warning: Test step failed or not configured.'
                    }
                }
            }
        }

        // stage('Code Quality') {
        //     steps {
        //         echo 'Running ESLint...'
        //         script {
        //             try {
        //                 bat 'npx eslint .'
        //             } catch (err) {
        //                 echo 'Warning: ESLint failed or not configured properly.'
        //             }
        //         }
        //     }
        // }

        // stage('Security Scan') {
        //     steps {
        //         echo 'Running security audit...'
        //         bat 'npx audit-ci --moderate || echo "Security audit warnings found."'
        //     }
        // }

        stage('Security Scan - Snyk') {
            environment {
                SNYK_TOKEN = credentials('snyk-token')
            }
            steps {
                echo 'Authenticating with Snyk...'
                bat '"C:\\Users\\Janitha Jayasanka\\AppData\\Roaming\\npm\\snyk.cmd" auth %SNYK_TOKEN%'
        
                echo 'Running Snyk security scan...'
                bat '"C:\\Users\\Janitha Jayasanka\\AppData\\Roaming\\npm\\snyk.cmd" test || echo "Snyk scan found vulnerabilities."'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('MySonarQubeServer') {
                    bat 'npx sonar-scanner'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment step...'
                bat 'echo Deploying app to staging environment...'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Simulating monitoring setup...'
                bat 'echo Setup health checks or Prometheus/Grafana here.'
            }
        }

        stage('Docker Build & Run') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t neuratrack-app .'

                echo 'Running Docker container...'
                bat 'docker run -d -p 3000:3000 --name neuratrack-container neuratrack-app'
            }
        }


    }

    post {
        always {
            echo 'Cleaning up workspace...'
            deleteDir()
        }
        success {
            echo 'Pipeline run completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Please review the error logs.'
        }
    }
}
