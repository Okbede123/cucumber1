pipeline {
  agent any
  stages {
    stage('build source') {
      steps {
        bat 'mvn clean'
      }
    }

    stage('Run chrome') {
      parallel {
        stage('Run chrome') {
          steps {
            bat 'mvn test-DBROWSER=chrome'
          }
        }

        stage('error') {
          steps {
            bat 'mvn test-DBROWSER=firefox'
          }
        }

      }
    }

  }
}