export const translationsData = {
  en: {
    header: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Tristan Kempes",
      role: "IT Technician & Full Stack Developer",
      description:
        "IT technician and full stack developer with experience in Java, Kotlin, Spring Boot, and Firebase. This website is built with Node.js and React, and here you will find a selection of my projects along with the technologies I use in my daily work.",
      links: {
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    },


    about: {
      title: 'About Me',
      paragraph1:
        "I am a Full Stack Developer with training in multiplatform application development and experience in IT support. I am passionate about learning new technologies and applying them to projects that provide real value, both on the front-end and the back-end. I have worked in environments where problem-solving and teamwork were essential, which has helped me develop a proactive and solution-oriented mindset.",
      paragraph2:
        "Throughout my career I have participated in projects ranging from database management to the development of web and mobile applications, as well as maintaining my own online portfolio where I showcase part of my work. My goal is to continue growing as a professional, contributing to dynamic teams and facing new challenges that allow me to evolve both technically and personally.",
    },

    projects: {
      title: 'My Projects',
      hearMeApp: {
        name: 'HearMe App',
        description:
          'Android app to leave voice reviews for nearby restaurants. It detects your location, shows nearby venues, and lets you record and submit audio reviews. You can browse and listen to voice reviews from other users in a clean, simple UI.',
        tech: ['Kotlin', 'Firebase', 'MVVM', 'Coroutines', 'Location'],
        github: 'https://github.com/tristank-fullstack/HearMe',
      },
      hearMeApi: {
        name: 'HearMe API',
        description:
          'Backend service that receives the audio reviews from HearMe App and transcribes them to text to make browsing reviews more visual and accessible. It stores the original audio together with its transcript so the app can display both.',
        tech: ['Java', 'Spring Boot'], // add only what you actually use
        github: 'https://github.com/tristank-fullstack/HearMe-API',
      },

      portfolio: {
        name: 'Developer Portfolio',
        description:
          'Personal portfolio focused on speed and clarity. Built with React + TypeScript, TailwindCSS, and Framer Motion, featuring a responsive dark theme and bilingual content (EN/ES). Includes a structured projects section linking to repositories and tech stacks.',
        tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        github: 'https://github.com/tristank-fullstack/Portfolio-Web',
      },
    },



    skills: {
      title: 'Skills',
    },
    experience: {
      title: 'Experience & Education',
      workTitle: 'Experience',
      educationTitle: 'Education',
      work: [
        {
          role: 'IT Support Technician',
          company: 'Driving Consulting Academy - Alcorcón',
          duration: '03/2025 – 06/2025',
          description:
            'Responsible for enrolling users in driving and vocational training courses. Managed and resolved internal technical issues, providing support to various departments. Uploaded and organized audiovisual content on educational platforms. Administered equipment and resource inventory using Snipe-IT. Fully digitized the physical inventory and kept it up to date. Wrote and published WordPress articles applying SEO.',
        },
        {
          role: 'Intern',
          company: 'Accuro Technology S.L - Las Rozas',
          duration: '04/2023 – 06/2023',
          description:
            'Prepared technical documentation for clients.',
        },
      ],
      education: [
        {
          degree: 'Multiplatform Application Development (DAM)',
          institution: 'Universitat Oberta de Catalunya',
          duration: '2023 - 2025',
          description:
            'Higher vocational training focused on the development of applications for multiple platforms, with emphasis on modern programming languages, databases, and software development best practices.',
        },
        {
          degree: 'Microcomputer Systems and Networks (SMR)',
          institution: 'Vocational Training',
          duration: '2021 - 2023',
          description:
            'Intermediate vocational training focused on IT systems, networking, and user support, providing a solid foundation in computer science and IT infrastructure.',
        },
      ]

    },
    resume: {
      title: "My Resume",
      cta: "Interested in my profile? You can download my full CV to learn more about my experience and skills.",
      button: "Download CV"
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to contact me.",
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      emailText: 'tristankempes@gmail.com',
    },
  },
  es: {
    header: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
    },
    hero: {
      greeting: "Hola, soy",
      name: "Tristan Kempes",
      role: "Técnico Informático y Desarrollador Full Stack",
      description:
        "Técnico informático y desarrollador full stack con experiencia en Java, Kotlin, Spring Boot y Firebase. Esta web está desarrollada con Node.js y React, y aquí encontrarás una selección de mis proyectos junto a las tecnologías que utilizo en mi día a día.",
      links: {
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    },


    about: {
      title: 'Sobre mí',
      paragraph1:
        'Soy desarrollador full stack con formación en desarrollo multiplataforma y experiencia en soporte IT. Me apasiona aprender nuevas tecnologías y aplicarlas en proyectos que aporten valor real, tanto en el front-end como en el back-end. He trabajado en entornos donde la resolución de problemas y la colaboración en equipo eran clave, lo que me ha permitido desarrollar una mentalidad proactiva y resolutiva.',
      paragraph2:
        'En mi trayectoria he participado en proyectos que van desde la gestión de bases de datos hasta el desarrollo de aplicaciones web y móviles, además de mantener mi propio portfolio online donde muestro parte de mi trabajo. Mi objetivo es seguir creciendo como profesional, contribuyendo a equipos dinámicos y enfrentando nuevos retos que me permitan evolucionar tanto en lo técnico como en lo personal.',
    },

    projects: {
      title: 'Mis Proyectos',
      hearMeApp: {
        name: 'HearMe App',
        description:
          'Aplicación Android para dejar reseñas de voz a restaurantes cercanos. Detecta tu ubicación, muestra locales próximos y te permite grabar y enviar reseñas de audio. Puedes explorar y escuchar reseñas de otros usuarios en una interfaz clara y sencilla.',
        tech: ['Kotlin', 'Firebase', 'MVVM', 'Coroutines', 'Localización'],
        github: 'https://github.com/tristank-fullstack/HearMe',
      },
      hearMeApi: {
        name: 'HearMe API',
        description:
          'Servicio backend que recibe las reseñas de audio de HearMe App y las transcribe a texto para que la consulta de reseñas sea más visual y accesible. Almacena el audio original junto con su transcripción para que la app pueda mostrar ambos.',
        tech: ['Java', 'Spring Boot'], // añade solo lo que realmente uses
        github: 'https://github.com/tristank-fullstack/HearMe-API',
      },
      portfolio: {
        name: 'Portfolio de Desarrollador',
        description:
          'Portfolio personal orientado a velocidad y claridad. Construido con React + TypeScript, TailwindCSS y Framer Motion, con diseño responsive en tema oscuro y contenido bilingüe (ES/EN). Incluye una sección de proyectos que enlaza a repositorios y stacks tecnológicos.',
        tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        github: 'https://github.com/tristank-fullstack/Portfolio-Web',
      },
    },




    skills: {
      title: 'Habilidades',
    },
    experience: {
      title: 'Experiencia y Educación',
      workTitle: 'Experiencia',
      educationTitle: 'Educación',
      work: [
        {
          role: 'Técnico de Soporte IT',
          company: 'Driving Consulting Academy - Alcorcón',
          duration: '03/2025 – 06/2025',
          description:
            'Responsable de matriculación de usuarios en cursos de conducción y formación profesional. Gestión y resolución de incidencias técnicas internas, brindando soporte a distintos departamentos. Carga y organización de contenido audiovisual en plataformas docentes. Administración de inventario de equipos y recursos mediante Snipe-IT. Digitalización completa del inventario físico y mantenimiento actualizado. Redacción y publicación de artículos en WordPress aplicando SEO.',
        },
        {
          role: 'Empleado en prácticas',
          company: 'Accuro Technology S.L - Las Rozas',
          duration: '04/2023 – 06/2023',
          description:
            'Elaboración de documentación técnica para clientes.',
        },
      ],
      education: [
        {
          degree: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
          institution: 'Universitat Oberta de Catalunya',
          duration: '2023 - 2025',
          description:
            'Ciclo formativo de grado superior orientado al desarrollo de aplicaciones para múltiples plataformas, con énfasis en lenguajes modernos, bases de datos y buenas prácticas de desarrollo de software.',
        },
        {
          degree: 'Sistemas Microinformáticos y Redes (SMR)',
          institution: 'Formación Profesional',
          duration: '2021 - 2023',
          description:
            'Ciclo formativo de grado medio centrado en sistemas informáticos, redes y soporte a usuarios, proporcionando una base sólida en informática e infraestructuras IT.',
        },
      ]

    },
    resume: {
      title: "Mi Currículum",
      cta: "¿Interesado en mi perfil? Puedes descargar mi CV completo para conocer más sobre mi experiencia y habilidades.",
      button: "Descargar CV"
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de una visión ambiciosa. No dudes en contactarme.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      emailText: 'tristankempes@gmail.com',
    },
  },
};