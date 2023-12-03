# Bounce Insights Software Engineer coding challenge
Know Your World: Essential Country Insights at Your Fingertips!

# Description

Bounce Insights is an innovative platform offering indispensable country insights right at your fingertips. Drawing inspiration from the sleek and intuitive design of official homepages, our project is meticulously crafted to seamlessly adapt to various devices, providing an unparalleled user experience, even on mobile phones.

Developed with Next.js for superior performance through server-side rendering and SEO optimization, we leverage the latest cloud computing technologies to ensure scalability, maintainability, reliability, and robustness.

 APP => http://ec2-23-22-247-39.compute-1.amazonaws.com:3000

# Technologies
<div style="display: inline_block"><br> 
	
  <img align="center" alt="Diego-Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">  
  <img align="center" alt="Diego-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"> 
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg">  
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg">
  <img align="center" alt="Diego-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg">
  
</div>


#### Frontend
  - React JS: Building interactive user interfaces.
  - Next Js:  React framework for server-side rendering static site generation and SEO optimization.
  - Tailwindcss: A utility-first CSS framework for rapid UI development
  - React Responsive: Ensuring a smooth transition to mobile screens
  - Google Maps API: Integrating dynamic maps for enhanced visualization.
  - Rest Country API: Fetching up-to-date country information.
  - Cypress: Testing frameworks for robust server testing.

#### Backend
  - Node Js: Powering the backend server.
  - Express Js: A fast, unopinionated, minimalist web framework for Node.js.
  - Axios: Handling HTTP requests.
  - Cors: Enabling Cross-Origin Resource Sharing.
  - Jest: Testing frameworks for robust server testing.
  - SuperTest to Testing Server Simulations

#### Cloud
  - Amazon Web Services: Utilizing EC2 instances for scalability.
  - DockerHub: Hosting containerized images for efficient deployment.

#### Containerization and Orchestration
  - Dockers: Containerizing applications for consistency across environments.
  - Docker Swarm: Orchestrating and managing Docker containers for scalability.
    
#### Observability (Metrics and DashBoard)
   - Prometheus: Collecting and storing metrics data. 	
   - Grafana: Visualizing and analyzing metrics through interactive dashboards.

#### CI/CD automation
   - Jenkins: Automating continuous integration and deployment pipelines.

# Deployment and Endpoints

Amazon Web Services EC2 Instances 

### Frontend:
  - Web: [Explore Bounce](http://ec2-23-22-247-39.compute-1.amazonaws.com:3000)
  
### Backend:
  - API: [Bounce API](http://ec2-50-17-134-49.compute-1.amazonaws.com:3002)
  - Queries: [Country Data](http://ec2-50-17-134-49.compute-1.amazonaws.com:3002/api/country/get/ireland)
  - Metrics: [Server Metrics](http://ec2-50-17-134-49.compute-1.amazonaws.com:3002/metrics)

### DashBoard:
  - Grafana: [Bounce Dashboard](http://3.80.63.121:3001/d/b581cb3e-bcae-481b-bb04-dccfd7f72dc5/bounce-insight?orgId=1&from=1701128769608&to=1701150369608)
    
### Observability:
  - Prometheus: [Metrics Monitoring](https://ec2-34-228-143-25.compute-1.amazonaws.com:9090/graph)
    
### Orchestration:
  - Docker Swarm: [Swarm Dashboard](http://ec2-54-165-129-177.compute-1.amazonaws.com:9000/)

## Run Locally

### Methode 1 (Docker Compose)

Clone the project

```bash
  git clone https://github.com/diegojfcampos/bounce.git
```
Go to the root project directory

```bash
  cd bounce
```
Run the docker compose

```bash
  $ docker-compose up -d
```
### Methode 2 (Docker Images)

Pull images from Docker Hub

```bash
  docker pull diegojfcampos/bounce:api diegojfcampos/bounce:web
```
Run images in detached mode

```bash
  docker run -d -p 3002:3002 diegojfcampos/bounce:api 
```
```bash
  docker run -d -p 3000:3000 diegojfcampos/bounce:web
```
You can have more images of this project on the DockerHub, [click here](https://hub.docker.com/repository/docker/diegojfcampos/bounce/tags?page=1&ordering=last_updated).


### Methode 3 (Git Clone)

Clone the project

```bash
  git clone https://github.com/diegojfcampos/bounce.git
```
#### Run server
Go to the backend project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start dev
```
To run test

```bash
  npm test
```
#### Run Web
Go to the frontend project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the Application 

```bash
  npm run dev
```
To run test

```bash
  npx cypress run
```
## Authors

- [@diegojfcampos](https://www.github.com/diegojfcampos)
