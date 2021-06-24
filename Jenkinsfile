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
         stage('S3 artifact upload') { 
             steps {  
             s3Upload consoleLogLevel: 'INFO', dontSetBuildResultOnFailure: false, dontWaitForConcurrentBuildCompletion: false, entries: [[bucket: 's3-artifacts-demo123', excludedFile: 'JavaDemoApp/Artifacts', flatten: false, gzipFiles: false, keepForever: false, managedArtifacts: false, noUploadOnFailure: false, selectedRegion: 'us-east-2', showDirectlyInBrowser: false, sourceFile: 'target/java.war', storageClass: 'STANDARD', uploadFromSlave: false, useServerSideEncryption: false]], pluginFailureResultConstraint: 'FAILURE', profileName: 's3-artifacts-demo', userMetadata: []
                    }
            
         } 
         

          
         
 
        stage('Deploy our image') { 
             steps { 
 
            bat 'mvn tomcat7:run'
                 } 
             }
         } 
}
       


