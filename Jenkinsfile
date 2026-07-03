pipeline {

    agent any

    parameters {
        string(
            name: 'SPEC_FILE',
            defaultValue: 'tests/login.spec.js',
            description: 'Enter Playwright spec file'
        )

    choice(
        name: 'BROWSER',
        choices: ['chromium', 'firefox', 'webkit'],
        description: 'Select browser'
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

        stage('Run Playwright Test') {
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