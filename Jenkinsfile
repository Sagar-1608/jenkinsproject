pipeline {
    agent any
    environment {
        NODE_HOME = tool 'NodeJS' // Name of NodeJS installation
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Sagar-1608/jenkinsproject.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-pem']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@3.84.172.150 << EOF
                    cd /home/ubuntu/node-sample-app
                    git pull origin main
                    npm install --production
                    pm2 restart all
                    exit
                    EOF
                    '''
                }
            }
        }
    }
}
