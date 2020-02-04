pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
         git 'https://github.com/Rammelmaier/git-demo.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Running test') {
      steps {
         sh 'npm run test-mocha'
      }
    }      
  }
}