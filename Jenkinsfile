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
                 
                checkout([$class: 'GitSCM', branches: [[name: 'feature_harpreet']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/shashikantvermaji/TestingX.git']]])
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
       


