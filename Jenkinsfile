
pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Execute Tests') {
            steps {
                script {

                    if (params.TEST_TYPE == 'regression') {

                        bat 'npm run regression'

                    } else if (params.TEST_TYPE == 'smoke') {

                        bat 'npm run smoke'

                    } else if (params.TEST_TYPE == 'specific') {

                        if (!params.TEST_FILE?.trim()) {
                            error 'Please provide TEST_FILE when TEST_TYPE is specific'
                        }

                        bat "npx playwright test ${params.TEST_FILE}"

                    } else {
                        error "Invalid TEST_TYPE: ${params.TEST_TYPE}"
                    }
                }
            }
        }
    }
}
