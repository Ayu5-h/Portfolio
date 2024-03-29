import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jupyter,
    pytorch,
    opencv,
    tensorflow,
    xcode,
    android,
    gcloud,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI & ML Engineer",
      icon: web,
    },
    {
      title: "Data Analyst/Resarch Scientist",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Application Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CPP",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: mongodb,
    },
    {
      name: "Kotlin",
      icon: threejs,
    },
    {
      name: "Jupyter",
      icon: jupyter,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Gcloud",
      icon: gcloud,
    },
    {
      name: "Android",
      icon: android,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Xcode",
      icon: xcode,
    },
  ];
  
  const experiences = [
    {
      title: "SIGN-LANGUAGE DETECTION",
      company_name: "Technical project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mediapipe Holistic, AI & ML, Jupyter lab, Tensorflow, Python, OpenCV,  etc.",
      points: [
        "Devloped an ML model to detect sign language which not only just detects words but also generate complete sentences.",
        "Trained a custom dataset using Mediapipe Holistic to track all the array points of hands and body to generate sentences for particular actions.",
        "Implementing this on an android app as well as on external hardware to help uniquely gifted people in their day to day life.",
      ],
    },
    {
      title: "Face recognition & Sentiment analyzer app",
      company_name: "Technical Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "AI & ML, OpenCV, CNN, Jupyter lab, Android studio etc.",
      points: [
        "Implemented advanced image processing algorithms to assess behaviors and gestures, to recognize the face and sentiment of that person.",
        "Have various apllications in Survelliance, Smart home camera etc.",
      ],
    },
    {
      title: "Eye Tracer",
      company_name: "Technical Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "PyTorch, AI & ML, Deep Learning, CNN, Geometry, CV, AR-VR etc.",
      points: [
        "A full fledged deep learning project to track the eye and accordingly focus on what it is actually looking at and to track it on screen in real time.",
        "Currently in the process of implementing it on hardware so to use it in ultra accurate scenery describer, as well as for Data visualization and Gaming.",
      ],
    },
    {
      title: "Generative AI Fashion Trend Generator",
      company_name: "Learning Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "GAN, AI & ML, Exploration of AI-driven fashion, NN's, etc.",
      points: [
        "Developed a generative AI model trained on a small dataset of fashion images to produce diverse and innovative fashion trends.",
        "Understood the basic working of GAN and the field of GenAI.",
      ],
    },
    {
      title: "WCEBleed Gen challenge",
      company_name: "Hackathon-Research Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "YOLO, AI & ML, Jupyter lab, Tensorflow, Python, CNN, etc.",
      points: [
        "Made an ML model for detecting bleedind and non bleeding frames in wireless capsule endoscopy. Automated the task of bleeding frame detection in Wireless Endoscopy and showcased the use of ML in Medical field.",
        "Research dataset provided by Department of Gastroenterology and HNU, AIIMS, Delhi.",
      ],
    },
    {
      title: "Chat application (Space)",
      company_name: "Hackathon-Technical Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Android studio, Kotlin, OpenAI API, Firebase, etc.",
      points: [
        "Space is chatting app made for users who wants to dump there thoughts in the space.",
        "Its basically a android app like WhatsApp with additional features like chatbots based on smart API’s to do your work. ",
        "This AI bots can also work as an assistant in that app.",
      ],
    },
    {
      title: "Algorithm Visuallizer App",
      company_name: "Learning Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Android studio, DSA, Sorting Algorithms, etc.",
      points: [
        "Helps you to visualize the different sorting algorithms (Heap sort, Merge sort, Quick sort, etc.) to better understand them.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Deep Learning for the Classification of War-Related Events: Enhancing Situational Awareness and Decision Support",
      name: "Apple Academic Press",
      designation: "Scopus",
      company: "(Taylor and Francis Group)",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Detection and classification of bleeding and non-bleeding frames in wireless Capsule Endoscopy",
      name: "Apple Academic Press",
      designation: "Scopus",
      company: "(Taylor and Francis Group)",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "WCE-Bleed Gen challenge",
      description:
        "ML model for detecting bleedind and non bleeding frames in wireless capsule endoscopy.",
      tags: [
        {
          name: "AI & ML",
          color: "blue-text-gradient",
        },
        {
          name: "YOLO",
          color: "green-text-gradient",
        },
        {
          name: "CNN",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ayu5-h/WCEBleedGen-Challenge",
    },
    {
      name: "SIGN-LANGUAGE DETECTION",
      description:
        "ML model to detect sign language which not only just detects words but also generate complete sentences.",
      tags: [
        {
          name: "AI & ML",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Mediapipe Holistic",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Ayu5-h",
    },
    {
      name: "Eye Tracer",
      description:
        "A full fledged deep learning project to track the eye and accordingly focus on what it is actually looking at and to track it in real time.",
      tags: [
        {
          name: "AI & ML",
          color: "blue-text-gradient",
        },
        {
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Ayu5-h",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };