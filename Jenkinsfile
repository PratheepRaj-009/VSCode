pipeline {

    agent any

    parameters {
        choice(
            name: 'TEST_TYPE',
            choices: ['regression', 'smoke', 'specific'],
            description: 'Select test execution type'
        )

        string(
            name: 'TEST_FILE',
            defaultValue: '',
            description: 'Enter test file only when TEST_TYPE is specific'
        )
    }

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

                    } else {

                        bat "npx playwright test ${params.TEST_FILE}"

                    }
                }
            }
        }
    }
}