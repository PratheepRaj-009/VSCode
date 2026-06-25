pipeline {

    agent any

    parameters {
        string(
            name: 'SPEC_FILE',
            defaultValue: 'tests/login.spec.js',
            description: 'Enter Playwright spec file'
        )
    }

    tools {
        nodejs 'NodeJS-22'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Check Node & Playwright') {
            steps {
                bat 'node -v'
                bat 'npm -v'
                bat 'npx playwright --version'
            }
        }

        stage('Run Tests') {
            steps {
                bat "npx playwright test ${params.SPEC_FILE}"
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}