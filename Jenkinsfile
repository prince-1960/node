
pipeline {
    agent any
    environment {
        PROJECT_ID = 'jenkinsbuild-286501'
        CLUSTER_NAME = 'jenkinscluster'
        LOCATION = 'asia-east1-b'
        CREDENTIALS_ID = 'node2'
    }
    stages {
                stage("Pull Code") {
            steps {
                checkout scm
            }
       }         
       
    stage("Build") {
            steps {
                script {
                    myapp = docker.build("prince1996/nodeapp:${env.BUILD_ID}")
                }
            }
        }
        stage("Push to Docker") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker') {
                            myapp.push("latest")
                            myapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }        
        stage('Deploy to Kubernetes') {
            steps{
                sh "sed -i 's/nodeapp:latest/nodeapp:${env.BUILD_ID}/g' deployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
    }    
}
