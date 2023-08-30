<template>




    
  
    <class id="ProjectScreen">
        <div class="project-list">
            <div v-for="(project, index) in projects" :key="index" class="project-item">
            <div class="project-title">{{ project.pj_title }}</div>
            <div class="project-content">
                <img :src="project.imageUrl" alt="Project Image" class="project-image" />
                <div class="project-description">{{ project.description }}</div>
            </div>
            </div>
        </div>

        <div>
            <h2>Tik-Tak_Toe</h2>
            <P>exe download</P>
        </div>

        <div>
            <h2>Shopping Android App.</h2>
            <p>apk download</p>
        </div>

        <div>
            <h2>Beautiful Soup</h2>
            <p>python download</p>
        </div>

        <div>
            <h2>This website</h2>
            <p>yes, this website</p>
        </div>
    </class>

   
  </template>
  
  
  
  <script>
  
  
  export default {
    name: 'ProjectScreen',
    components: {
    },
    data() {
        return {
        projects: [
            {
            pj_title: "Tik-Tak_Toe",
            imageUrl: 'path-to-image-1.jpg',
            description: 'Description for Project #1 ',
            pj_link: "GitHub",
            },
            {
            pj_title: "Tik-Tak_Toe",
            imageUrl: 'path-to-image-2.jpg',
            description: 'Description for Project #2',
            pj_link: "GitHub",
            },
            // Add more projects here
        ],
        };
  },
  }
  </script>
  
  <style>
  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .project-item {
    width: calc(50% - 10px);
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  
  .project-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .project-content {
    display: flex;
    align-items: center;
  }
  
  .project-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .project-description {
    flex: 1;
    font-size: 14px;
  }
  </style>
  