
pipeline {
    agent any
    environment {
        PROJECT_ID = 'node-267802'
        CLUSTER_NAME = 'node-cluster-1'
        LOCATION = 'asia-northeast3-c'
        CREDENTIALS_ID = 'node'
    }
    stages {
                stage("Pull Code") {
            steps {
                checkout scm
            }
        }
        stage('Initialize Docker'){ 
            steps {
                script {
          def dockerHome = tool 'docker'
          env.PATH = "${dockerHome}/bin:${env.PATH}"
       }
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
