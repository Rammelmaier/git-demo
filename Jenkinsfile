pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
  
   parameters {
    gitParameter branchFilter: 'origin/(.*)', defaultValue: 'logger', name: 'BRANCH', type: 'PT_BRANCH'
  }
    
  stages {
        
    stage('Cloning Git and checkout on logger branch') {
      steps {
         git branch: "${params.BRANCH}", url: 'https://github.com/Rammelmaier/git-demo.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Running test') {
      steps {
         sh 'npm run test -- --specs="HW_Code/HW - Patterns v.2.0/mailTest.js'
      }
    }      
  }
}