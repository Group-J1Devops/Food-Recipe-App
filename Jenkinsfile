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
                    bat 'start "" cmd /c "node index.js > backend.log 2>&1"'
        }
                dir('frontend') {
                bat 'start "" cmd /c "npm start > frontend.log 2>&1"'
        }
                sleep time: 10, unit: 'SECONDS'
    }
}
        stage('Check Services') {
            steps {
                bat 'curl http://localhost:3000'         // Frontend (adjust port)
                bat 'curl http://localhost:5002'  // Backend endpoint (adjust path)
    }
}
        stage('Show Logs') {
            steps {
                dir('server') {
                bat 'type backend.log'
        }
                dir('frontend') {
                bat 'type frontend.log'
        }
    }
}





    }
}