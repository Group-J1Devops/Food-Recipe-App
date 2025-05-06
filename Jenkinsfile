pipeline {
    agent any

    environment {
        DB_CONNECTION = credentials('DB_CONNECTION')
        EMAIL = credentials('EMAIL')
        PASSWORD = credentials('PASSWORD')
        SECRET_KEY = credentials('SECRET_KEY')
        EMAIL_HOST = credentials('EMAIL_HOST')
        EMAIL_PORT = credentials('EMAIL_PORT')
        FRONTEND_PORT = credentials('FRONTEND_PORT')
    }

    stages {
        stage('Prepare Environment') {
            steps {
                dir('server') {
                    writeFile file: '.env', text: """
                        DB_CONNECTION=${env.DB_CONNECTION}
                        EMAIL=${env.EMAIL}
                        PASSWORD=${env.PASSWORD}
                        SECRET_KEY=${env.SECRET_KEY}
                        EMAIL_HOST=${env.EMAIL_HOST}
                        EMAIL_PORT=${env.EMAIL_PORT}
                        FRONTEND_PORT=${env.FRONTEND_PORT}
                    """
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('server') {
                    bat 'npm install'
                }
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Tests'
                // Add tests here if needed
            }
        }

        stage('Build and Start with Docker Compose') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose up -d --build'
            }
        }
    }

    post {
        success {
            mail to: 'ireeyy35@gmail.com, osi2crt@bolton.ac.uk',
                 subject: "✅ CI/CD Deployment Success - RecipEasy",
                 body: "The latest deployment of RecipEasy completed successfully."
        }
        failure {
            mail to: 'ireeyy35@gmail.com, osi2crt@bolton.ac.uk',
                 subject: "❌ CI/CD Deployment Failed - RecipEasy",
                 body: "The deployment of RecipEasy failed. Please check Jenkins for logs."
        }
    }
}
