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
                bat 'npm install -g pm2'
            }
        }

        stage('Start Services with PM2') {
            steps {
                // Start both services using PM2
                bat 'npx pm2 start ecosystem.config.js'
                // Optional: save process list to resurrect after reboot
                bat 'npx pm2 save'
            }
        }

        stage('Check Services') {
            steps {
                bat 'curl http://localhost:3000'   // Adjust if needed
                bat 'curl http://localhost:5002'
            }
        }

        stage('Show PM2 Status') {
            steps {
                bat ' npx pm2 list'
            }
        }
    }
}
