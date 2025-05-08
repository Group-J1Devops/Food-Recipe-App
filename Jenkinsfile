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
        BACKTEND_PORT = credentials('BACKEND_PORT')
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
 
        stage('Install backend Dependencies') {
            steps {
                dir('server') {
                     bat 'npm install'
                }
            }
        }

        stage('Install frontend Dependencies') {
            steps {
                dir('frontend') {
                     bat 'npm install'
                }
            }
        }
 
        stage('Run Tests') {
            steps {
                    echo 'Running Tests'
            }
        }
 
    stage('Start Services') {
    steps {
        dir('server') {
            bat 'start "" cmd /c "node index.js"'
        }
        dir('frontend') {
            bat 'start "" cmd /c "npm start"'
        }
        sleep time: 10, unit: 'SECONDS'
    }
}


    }
}