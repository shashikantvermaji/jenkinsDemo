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
            
         
        stage('mvn clean') { 
             steps {  
                 bat 'mvn clean'
                    }
            
         } 
         stage('compile') { 
             steps {  
                 bat 'mvn compile'
                    }
            
         } 
         
         
         stage('war created') { 
             steps {  
                 bat 'mvn install'
                    }
            
         } 
         

          
         
 
        stage('Deploy our image') { 
             steps { 
 
            bat 'mvn tomcat7:run'
                 } 
             }
         } 
}
       


