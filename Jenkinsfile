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
        BACKEND_PORT = credentials('BACKEND_PORT')
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
                        BACKEND_PORT=${env.BACKEND_PORT}
                    """
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    bat 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Install PM2') {
            steps {
                bat 'npm install pm2 --save-dev'
            }
        }

        stage('Start Services with PM2') {
            steps {
            steps {
                dir('server') {
                    bat 'npx pm2 start ecosystem.config.js'
                    bat 'npx pm2 save'
                }
            }
        }

        stage('Show PM2 Status') {
            steps {
                dir('server') {
                    bat 'npx pm2 list'
                }
            }
    }

        post {
        success {
            echo 'RecipEasy software build completed successfully'
        }
    }
}
