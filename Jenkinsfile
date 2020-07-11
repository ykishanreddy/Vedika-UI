pipeline {
      environment {
      registry = "ykreddys/vedikaui:3${BUILD_NUMBER}"
      dockerImage = ''
    }
    agent any
	
 /**   stages {
        stage('SCM') {
            steps {
                git 'https://github.com/keerthana818/Vedika-UI.git'
				}
			}  **/
		stage('Build') {
            steps {
                sh "npm install"
				        sh "ng build --prod"
				}
			}
			
	 stage('Build Docker image') {
      steps {
            script{
             dockerImage= docker.build registry 
            }
        }
    }
	  
	  stage('Push Image'){
        steps{
            script{
        withDockerRegistry(credentialsId: 'dockerhubcredentials') {
            dockerImage.push()
             }
          }
       }
    }
     stage('change tag name in deployment file') {
            steps {
             sh "sed -i 's/ImageTag/${BUILD_NUMBER}/g' vedikaui-deployment.yml" 
				}
			}
		stage('Deploy to Kubernetes') {
            steps {
           sshagent(['kops-mechine']) {
           sh "scp -o StrictHostKeyChecking=no vedikaui-deployment.yml vedikaui-service.yml ubuntu@3.16.165.140:/home/ubuntu"
           sh "ssh ubuntu@3.16.165.140 kubectl apply -f vedikaui-deployment.yml"
          }
        }
    }  
        
    }
}
