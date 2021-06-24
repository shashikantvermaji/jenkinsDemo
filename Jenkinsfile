pipeline {  
    environment { 
        registry = "shashikantvermaji/java"  
        registryCredential = 'docker'  
        dockerImage = '' 
    }
    agent any 
     stages {  
        stage('Cloning our Git') { 
             steps {  
                 
                checkout([$class: 'GitSCM', branches: [[name: 'main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '98a69b20-e09c-4c58-8654-69feb048011e', url: 'https://github.com/shashikantvermaji/TestingX.git']]])
            }
            
         } 
         /*
      
         stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "./gradlew sonarqube"
                }
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
*/

         
         
        stage('mvn clean') { 
             steps {  
                 sh 'mvn clean'
                    }
            
         } 
         stage('compile') { 
             steps {  
                 sh 'mvn compile'
                    }
            
         } 
         
         
         stage('war created') { 
             steps {  
                 sh 'mvn install'
                    }
            
         } 
         stage('Nexus artifact uplaod')
{

          
         
 
        stage('Deploy our image') { 
             steps { 
 
            sh 'mvn tomcat7:run'
                 } 
             }
         } 
 
       

}
