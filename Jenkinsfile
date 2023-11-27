pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials') 
        SWARM_CREDENTIALS = credentials('docker-swarm-credentials')  
    }

    stages {
        stage('Build and Push Image') {
            steps {
                script {

                    def imageName = "diegojfcampos/bounce"
                    def imageTag = "api"

                    if (env.JOB_NAME.contains("frontend")) {
                        imageTag = "web"

                        sh 'npm install --prefix frontend' 
                        sh 'npm run cypress:run --prefix frontend'
                    }

                    docker.build(imageName + ":" + imageTag)

                    docker.withRegistry('https://registry.hub.docker.com', DOCKERHUB_CREDENTIALS) {
                        docker.image(imageName + ":" + imageTag).push()
                    }
                }
            }
        }

        stage('Update Container') {
            steps {
                script {
                    sh 'docker service update --image ' + imageName + ':' + imageTag + ' seu_servico_no_swarm'
                }
            }
        }
    }
}
