import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "greeting": {
        "morning": "Good morning!",
        "afternoon": "Good afternoon!",
        "evening": "Good evening!"
      },
      "nav": {
        "home": "Home",
        "sys_dash": "SYS_DASH",
        "homelab": "Homelab",
        "projects": "Projects",
        "blog": "Experience",
        "cv": "View CV"
      },
      "footer": {
        "text": "Isaac Guisset © 2026. System operational."
      },
      "home": {
        "title": "Hi, I'm Isaac Guisset",
        "subtitle": "Web Developer & DevOps",
        "sys_admin": "SYS_ADMIN",
        "sys_online": "SYSTEM ONLINE",
        "metrics": "METRICS",
        "profile_data": "PROFILE_DATA",
        "init_profile": "INITIALIZING PROFILE...",
        "loaded_sysadmin": "LOADED: SYSADMIN & DEVELOPER",
        "btn_init_projects": "INIT PROJECTS",
        "btn_read_logs": "READ LOGS",
        "tech_stack": "TECH_STACK",
        "goal": "DevOps learner with a strong interest in systems administration, cloud infrastructure, and network deployments. My goal is to become a Datacenter Technician at Equinix.",
        "btn_projects": "View my Projects",
        "btn_about": "About me",
        "about_title": "More about me",
        "tech_title": "Systems, Homelabs & Cloud",
        "tech_desc": "My passion for IT goes beyond work and academic hours. I enjoy building my own server infrastructure, experimenting with networking, containers (Docker, K8s) and cloud deployments.",
        "experience_title": "Experience & Education",
        "skills_title": "Skills & Tech",
        "stack_title": "Technology Stack",
        "exp": {
          "job1": "DevOps Engineer Intern",
          "job1_loc": "Spotlio",
          "job1_desc": "Configuration of internal portal with Backstage, cloud infrastructure management on AWS, and tech inventory administration with JAMF.",
          "job2": "CFGS Web Application Development (DAW)",
          "job2_loc": "Institut Cendrassos",
          "job3": "IT Support (Intern)",
          "job3_loc": "CFA Maria Verdaguer",
          "job3_desc": "Network configuration, OS installation, and equipment maintenance in an educational environment.",
          "job4": "CFGM Microcomputer Systems and Networks (SMX)",
          "job4_loc": "Institut Cendrassos",
          "job4_desc": "Final project: Odoo ERP deployment."
        },
        "skills": {
          "s1": "Windows/Linux Admin",
          "s2": "Network Services",
          "s3": "IT Support",
          "s4": "Networking & Sec",
          "s5": "Docker & Proxmox",
          "s6": "AI Training",
          "s7": "C# .NET"
        }
      },
      "blog": {
        "title": "SYSTEM_LOGS // BLOG",
        "subtitle": "Documenting my journey through code, servers, and datacenter operations.",
        "read_log": "READ_LOG",
        "post1_title": "Setting up a Proxmox Cluster",
        "post1_desc": "A deep dive into setting up high availability and Ceph storage in a 3-node Proxmox cluster.",
        "post2_title": "Dockerizing Legacy Apps",
        "post2_desc": "How to containerize old .NET framework applications and run them in a modern orchestrator.",
        "experiences": [
          {
            "id": 1,
            "type": "work",
            "role": "DevOps Intern",
            "company": "Spotlio",
            "date": "Present",
            "description": "DevOps practices, infrastructure management, and deployment automation in a production environment.",
            "tech": ["Docker", "Linux", "AWS", "CI/CD", "Git"]
          },
          {
            "id": 2,
            "type": "education",
            "role": "Web Application Development (DAW)",
            "company": "INS Cendrassos",
            "date": "2025 - Present",
            "description": "Advanced studies in backend and frontend web development, focusing on scalable architectures and full-stack solutions.",
            "tech": ["Node.js", "React", "TypeScript", "Databases"]
          },
          {
            "id": 3,
            "type": "cert",
            "role": "CCNA Routing & Switching",
            "company": "Cisco Networking Academy",
            "date": "In Progress",
            "description": "Networking fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.",
            "tech": ["Cisco", "Routing", "Switching", "Subnetting"]
          },
          {
            "id": 4,
            "type": "cert",
            "role": "RHCSA System Administration",
            "company": "Red Hat",
            "date": "In Progress",
            "description": "Managing SELinux, storage (LVM), containers (Podman), and advanced Linux user administration in enterprise environments.",
            "tech": ["RHEL", "SELinux", "Bash", "SysAdmin"]
          }
        ]
      },
      "projects": {
        "title": "My Projects",
        "subtitle": "A collection of web development and system administration projects.",
        "active_projects": "ACTIVE_PROJECTS",
        "loaded": "LOADED",
        "archived_systems": "ARCHIVED_SYSTEMS",
        "access_node": "ACCESS_NODE",
        "p1_title": "matriculaciones.es",
        "p1_desc": "A complete web platform designed to manage and analyze license plates. Built with C# .NET, Docker, MySQL, and automated via GitHub Actions.",
        "p2_title": "rapsodiaveusliteraries.com",
        "p2_desc": "Website administration and management for Rapsòdia Veus Literàries.",
        "p3_title": "Personal Server",
        "p3_desc": "Personal server with various deployed services: web, notifications, monitoring, and backups.",
        "p4_title": "Odoo ERP",
        "p4_desc": "Installation and configuration of Odoo v17 ERP in a Linux environment.",
        "p5_title": "Nextcloud",
        "p5_desc": "Personal Nextcloud with file synchronization between devices and server backups.",
        "p6_title": "C# Console Projects",
        "p6_desc": "Collection of interactive C# console projects.",
        "slider1_title": "Matriculacions DGT AI",
        "slider1_desc": "Intelligent vehicle search platform. Analyzes license plates to deduce manufacturing years and generations.",
        "slider2_title": "Rapsòdia Veus Literàries",
        "slider2_desc": "Web administration and literary content management.",
        "slider3_title": "Homelab Datacenter",
        "slider3_desc": "My personal server built from scratch with Proxmox, Docker, and multiple self-hosted services."
      },
      "homelab": {
        "title": "Homelab & Architecture",
        "subtitle": "My personal systems, servers, and network laboratory.",
        "status": "Below is the architecture of the homelab I am currently building.",
        "section_servers": "Servers & Hardware",
        "section_network": "Network & Security",
        "server1_title": "NODE-01: Dell Precision 5820",
        "server1_desc": "Intel Xeon W-2155, 64GB RAM, Nvidia Quadro P2000. Running an LXC container for Jellyfin connected to Radarr, Sonarr, Prowlarr, Jellyseerr, and qBittorrent.",
        "server2_title": "NODE-02: Dell T320 (NAS)",
        "server2_desc": "Main hypervisor running Proxmox. It hosts a NAS for storage and various Virtual Machines.",
        "server3_title": "NODE-03: Wyse 5070",
        "server3_desc": "Low-power node running Pi-hole for network-wide ad blocking and Nginx Proxy Manager to securely route all services.",
        "network_title": "Network Segmentation",
        "network_desc": "The network is heavily segmented. Subnetting separates the servers from other home devices to prevent unauthorized access and allow deep network analysis.",
        "history_title": "SYS_EVOLUTION // HARDWARE HISTORY",
        "hist_v1_title": "V1.0 - The Humble Beginnings",
        "hist_v1_desc": "It all started with a very old and crappy Acer laptop. It served as my first contact with the self-hosted server world.",
        "hist_v2_title": "V2.0 - MSI GT72VR Dominator Pro",
        "hist_v2_desc": "The gaming laptop that gave its life for science (its GPU broke). This was the big leap: I installed Nextcloud, Jellyfin, personal websites, and Code Server. A powerful server until the GPU said enough.",
        "hist_v3_title": "V3.0 - Dell Precision 5820 (The Core)",
        "hist_v3_desc": "Entering the big leagues. A pure workstation. Here I started with LXC, Docker, and Cockpit. I installed libvirt for real virtual machines (labs) accessed via VNC. Additionally, I set up Tailscale for secure remote access to the entire network.",
        "hist_v4_title": "V4.0 - Dell Wyse 5070",
        "hist_v4_desc": "To delegate critical network services. I bought this thin-client specifically to host Pi-hole (ad blocking and local DNS) and Nginx Proxy Manager (domain management and SSL certificates).",
        "hist_v5_title": "V5.0 - Dell T320 (Storage Node)",
        "hist_v5_desc": "The ultimate server for mass storage. It acts as a centralized NAS to house all infrastructure backups and personal data."
      }
    }
  },
  ca: {
    translation: {
      "greeting": {
        "morning": "Bon dia!",
        "afternoon": "Bona tarda!",
        "evening": "Bona nit!"
      },
      "nav": {
        "home": "Inici",
        "sys_dash": "INICI",
        "homelab": "Homelab",
        "projects": "Projectes",
        "blog": "Experiència",
        "cv": "Veure CV"
      },
      "footer": {
        "text": "Isaac Guisset © 2026. Sistema operatiu."
      },
      "home": {
        "title": "Hola, soc l'Isaac Guisset",
        "subtitle": "Desenvolupador Web & DevOps",
        "sys_admin": "ADMIN_SISTEMES",
        "sys_online": "SISTEMA EN LÍNIA",
        "metrics": "MÈTRIQUES",
        "profile_data": "DADES_PERFIL",
        "init_profile": "INICIALITZANT PERFIL...",
        "loaded_sysadmin": "CARREGAT: ADMIN SISTEMES I DESENVOLUPADOR",
        "btn_init_projects": "INICIAR PROJECTES",
        "btn_read_logs": "LLEGIR LOGS",
        "tech_stack": "STACK_TECNOLÒGIC",
        "goal": "Aprenent de DevOps amb un fort interès en l'administració de sistemes i infraestructura cloud. La meva meta futura és ser Datacenter Technician a Equinix.",
        "btn_projects": "Veure els Projectes",
        "btn_about": "Sobre mi",
        "about_title": "Sobre mi",
        "tech_title": "Sistemes, Homelabs i Cloud",
        "tech_desc": "La meva passió per la informàtica va més enllà. Gaudeixo muntant la meva infraestructura (homelab), experimentant amb contenidors (Docker, K8s) i núvol.",
        "experience_title": "Trajectòria i Estudis",
        "skills_title": "Habilitats i Tecnologia",
        "stack_title": "Stack Tecnològic",
        "exp": {
          "job1": "DevOps Engineer Intern",
          "job1_loc": "Spotlio",
          "job1_desc": "Configuració del portal intern amb Backstage, gestió d'infraestructura cloud a AWS i administració d'inventari tecnològic amb JAMF.",
          "job2": "CFGS Desenvolupament d'Aplicacions Web (DAW)",
          "job2_loc": "Institut Cendrassos",
          "job3": "IT Support (Pràctiques)",
          "job3_loc": "CFA Maria Verdaguer",
          "job3_desc": "Configuració de xarxes, instal·lació de SO i manteniment d'equips en entorn educatiu.",
          "job4": "CFGM Sistemes Microinformàtics i Xarxes (SMX)",
          "job4_loc": "Institut Cendrassos",
          "job4_desc": "Projecte final de desplegament ERP Odoo."
        },
        "skills": {
          "s1": "Administració Windows/Linux",
          "s2": "Serveis Xarxa",
          "s3": "Suport IT",
          "s4": "Xarxes i Seguretat",
          "s5": "Docker i Proxmox",
          "s6": "AI Training",
          "s7": "C# .NET"
        }
      },
      "blog": {
        "title": "REGISTRES_SISTEMA // BLOG",
        "subtitle": "Documentant el meu viatge a través del codi, servidors i operacions de datacenter.",
        "read_log": "LLEGIR_LOG",
        "post1_title": "Muntant un Clúster Proxmox",
        "post1_desc": "Una immersió profunda en la configuració d'alta disponibilitat i emmagatzematge Ceph en un clúster Proxmox de 3 nodes.",
        "post2_title": "Dockeritzant aplicacions antigues",
        "post2_desc": "Com contenidoritzar aplicacions antigues .NET framework i executar-les en un orquestrador modern.",
        "experiences": [
          {
            "id": 1,
            "type": "work",
            "role": "DevOps Intern",
            "company": "Spotlio",
            "date": "Present",
            "description": "Pràctiques DevOps, gestió d'infraestructura i automatització de desplegaments en un entorn de producció.",
            "tech": ["Docker", "Linux", "AWS", "CI/CD", "Git"]
          },
          {
            "id": 2,
            "type": "education",
            "role": "Desenvolupament d'Aplicacions Web (DAW)",
            "company": "INS Cendrassos",
            "date": "2025 - Present",
            "description": "Estudis avançats en desenvolupament web backend i frontend, centrats en arquitectures escalables i solucions full-stack.",
            "tech": ["Node.js", "React", "TypeScript", "Bases de dades"]
          },
          {
            "id": 3,
            "type": "cert",
            "role": "CCNA Routing & Switching",
            "company": "Cisco Networking Academy",
            "date": "En curs",
            "description": "Fonaments de xarxes, accés a la xarxa, connectivitat IP, serveis IP, fonaments de seguretat i automatització.",
            "tech": ["Cisco", "Routing", "Switching", "Subnetting"]
          },
          {
            "id": 4,
            "type": "cert",
            "role": "RHCSA System Administration",
            "company": "Red Hat",
            "date": "En curs",
            "description": "Gestió de SELinux, emmagatzematge (LVM), contenidors (Podman) i administració avançada d'usuaris Linux en entorns empresarials.",
            "tech": ["RHEL", "SELinux", "Bash", "SysAdmin"]
          }
        ]
      },
      "projects": {
        "title": "Els Meus Projectes",
        "subtitle": "Un recull de projectes de desenvolupament web i sistemes.",
        "active_projects": "PROJECTES_ACTIUS",
        "loaded": "CARREGAT",
        "archived_systems": "SISTEMES_ARXIVATS",
        "access_node": "ACCEDIR_NODE",
        "p1_title": "matriculaciones.es",
        "p1_desc": "Plataforma web per gestionar i analitzar matrícules. Creada amb C# .NET, Docker, MySQL i desplegada amb GitHub Actions.",
        "p2_title": "rapsodiaveusliteraries.com",
        "p2_desc": "Administració i gestió de la pàgina web de Rapsòdia Veus Literàries.",
        "p3_title": "Servidor",
        "p3_desc": "Servidor propi amb diversos serveis desplegats: web, notificacions, monitorització i backups.",
        "p4_title": "ERP Odoo",
        "p4_desc": "Instal·lació i configuració de l'ERP Odoo v17 en entorn Linux.",
        "p5_title": "Nextcloud",
        "p5_desc": "Nextcloud personal amb sincronització de fitxers i còpies de seguretat.",
        "p6_title": "Projectes de Consola C#",
        "p6_desc": "Recull de projectes interactius amb C# per consola.",
        "slider1_title": "Matriculacions DGT AI",
        "slider1_desc": "Plataforma de cerca intel·ligent de vehicles. Analitza matrícules per deduir anys de fabricació i generacions.",
        "slider2_title": "Rapsòdia Veus Literàries",
        "slider2_desc": "Administració web i gestió de contingut literari.",
        "slider3_title": "Homelab Datacenter",
        "slider3_desc": "El meu servidor personal muntat des de zero amb Proxmox, Docker i múltiples serveis autoallotjats."
      },
      "homelab": {
        "title": "Homelab i Arquitectura",
        "subtitle": "El meu laboratori personal de sistemes, servidors i xarxes.",
        "status": "A continuació mostro l'arquitectura del laboratori que estic muntant.",
        "section_servers": "Servidors i Maquinari",
        "section_network": "Xarxes i Seguretat",
        "server1_title": "NODE-01: Dell Precision 5820",
        "server1_desc": "Intel Xeon W-2155, 64GB RAM, Nvidia Quadro P2000. Amb un LXC per Jellyfin, connectat a Radarr, Sonarr, Prowlarr, Jellyseerr i qBittorrent.",
        "server2_title": "NODE-02: Dell T320 (NAS)",
        "server2_desc": "Hipervisor principal amb Proxmox. Allotja el NAS per a emmagatzematge i diverses Màquines Virtuals.",
        "server3_title": "NODE-03: Wyse 5070",
        "server3_desc": "Node de baix consum amb Pi-hole (bloqueig d'anuncis) i Nginx Proxy Manager per gestionar l'accés a tots els serveis.",
        "network_title": "Segmentació de Xarxa",
        "network_desc": "La xarxa està segmentada (subnetting). Separo els servidors de la resta de dispositius per evitar infiltracions i permetre l'anàlisi de trànsit.",
        "history_title": "SYS_EVOLUTION // HISTÒRIA DEL HARDWARE",
        "hist_v1_title": "V1.0 - Els inicis humils",
        "hist_v1_desc": "Tot va començar amb un portàtil Acer molt i molt vell (i caca). Va servir com a primera presa de contacte amb el món dels servidors autoallotjats.",
        "hist_v2_title": "V2.0 - MSI GT72VR Dominator Pro",
        "hist_v2_desc": "El portàtil gaming que va donar la seva vida per la ciència (se li va trencar la gràfica). Va ser el gran salt: vaig instal·lar Nextcloud, Jellyfin, webs pròpies i Code Server. Un servidor potent fins que la GPU va dir prou.",
        "hist_v3_title": "V3.0 - Dell Precision 5820 (El nucli)",
        "hist_v3_desc": "Entrant a les grans lligues. Workstation pura. Aquí vaig començar amb LXC, Docker i Cockpit. Vaig instal·lar libvirt per a màquines virtuals reals (pràctiques) accedint per VNC. A més, vaig muntar Tailscale per a accés remot segur a tota la xarxa.",
        "hist_v4_title": "V4.0 - Dell Wyse 5070",
        "hist_v4_desc": "Per delegar els serveis crítics de xarxa. Vaig comprar aquest thin-client específicament per allotjar el Pi-hole (bloqueig d'anuncis i DNS local) i Nginx Proxy Manager (gestió de dominis i certificats SSL).",
        "hist_v5_title": "V5.0 - Dell T320 (Node d'emmagatzematge)",
        "hist_v5_desc": "El servidor definitiu per a emmagatzematge massiu. Actua com a NAS centralitzat per allotjar totes les còpies de seguretat de la infraestructura i dades personals."
      }
    }
  },
  es: {
    translation: {
      "greeting": {
        "morning": "¡Buenos días!",
        "afternoon": "¡Buenas tardes!",
        "evening": "¡Buenas noches!"
      },
      "nav": {
        "home": "Inicio",
        "sys_dash": "INICIO",
        "homelab": "Homelab",
        "projects": "Proyectos",
        "blog": "Experiencia",
        "cv": "Ver CV"
      },
      "footer": {
        "text": "Isaac Guisset © 2026. Sistema operativo."
      },
      "home": {
        "title": "Hola, soy Isaac Guisset",
        "subtitle": "Desarrollador Web y DevOps",
        "sys_admin": "ADMIN_SISTEMAS",
        "sys_online": "SISTEMA EN LÍNEA",
        "metrics": "MÉTRICAS",
        "profile_data": "DATOS_PERFIL",
        "init_profile": "INICIALIZANDO PERFIL...",
        "loaded_sysadmin": "CARGADO: ADMIN SISTEMAS Y DESARROLLADOR",
        "btn_init_projects": "INICIAR PROYECTOS",
        "btn_read_logs": "LEER LOGS",
        "tech_stack": "STACK_TECNOLÓGICO",
        "goal": "Aprendiz de DevOps con gran interés en sistemas e infraestructura cloud. Mi meta es ser Datacenter Technician en Equinix.",
        "btn_projects": "Ver Proyectos",
        "btn_about": "Sobre mí",
        "about_title": "Sobre mí",
        "tech_title": "Sistemas, Homelabs y Cloud",
        "tech_desc": "Mi pasión por la informática va más allá. Disfruto montando mi infraestructura (homelab), experimentando con contenedores y la nube.",
        "experience_title": "Experiencia y Estudios",
        "skills_title": "Habilidades y Tecnología",
        "stack_title": "Stack Tecnológico",
        "exp": {
          "job1": "DevOps Engineer Intern",
          "job1_loc": "Spotlio",
          "job1_desc": "Configuración del portal interno con Backstage, gestión de infraestructura cloud en AWS y administración de inventario con JAMF.",
          "job2": "CFGS Desarrollo de Aplicaciones Web (DAW)",
          "job2_loc": "Institut Cendrassos",
          "job3": "IT Support (Prácticas)",
          "job3_loc": "CFA Maria Verdaguer",
          "job3_desc": "Configuración de redes, instalación de SO y mantenimiento de equipos en entorno educativo.",
          "job4": "CFGM Sistemas Microinformáticos y Redes (SMX)",
          "job4_loc": "Institut Cendrassos",
          "job4_desc": "Proyecto final: despliegue ERP Odoo."
        },
        "skills": {
          "s1": "Administración Windows/Linux",
          "s2": "Servicios de red",
          "s3": "Soporte IT",
          "s4": "Redes y Seguridad",
          "s5": "Docker y Proxmox",
          "s6": "AI Training",
          "s7": "C# .NET"
        }
      },
      "blog": {
        "title": "REGISTROS_SISTEMA // BLOG",
        "subtitle": "Documentando mi viaje a través del código, servidores y operaciones de datacenter.",
        "read_log": "LEER_LOG",
        "post1_title": "Montando un Clúster Proxmox",
        "post1_desc": "Una inmersión profunda en la configuración de alta disponibilidad y almacenamiento Ceph en un clúster Proxmox de 3 nodos.",
        "post2_title": "Dockerizando aplicaciones antiguas",
        "post2_desc": "Cómo contenedorizar aplicaciones antiguas .NET framework y ejecutarlas en un orquestador moderno.",
        "experiences": [
          {
            "id": 1,
            "type": "work",
            "role": "DevOps Intern",
            "company": "Spotlio",
            "date": "Presente",
            "description": "Prácticas DevOps, gestión de infraestructura y automatización de despliegues en un entorno de producción.",
            "tech": ["Docker", "Linux", "AWS", "CI/CD", "Git"]
          },
          {
            "id": 2,
            "type": "education",
            "role": "Desarrollo de Aplicaciones Web (DAW)",
            "company": "INS Cendrassos",
            "date": "2025 - Presente",
            "description": "Estudios avanzados en desarrollo web backend y frontend, centrados en arquitecturas escalables y soluciones full-stack.",
            "tech": ["Node.js", "React", "TypeScript", "Bases de datos"]
          },
          {
            "id": 3,
            "type": "cert",
            "role": "CCNA Routing & Switching",
            "company": "Cisco Networking Academy",
            "date": "En curso",
            "description": "Fundamentos de redes, acceso a la red, conectividad IP, servicios IP, fundamentos de seguridad y automatización.",
            "tech": ["Cisco", "Routing", "Switching", "Subnetting"]
          },
          {
            "id": 4,
            "type": "cert",
            "role": "RHCSA System Administration",
            "company": "Red Hat",
            "date": "En curso",
            "description": "Gestión de SELinux, almacenamiento (LVM), contenedores (Podman) y administración avanzada de usuarios Linux en entornos empresariales.",
            "tech": ["RHEL", "SELinux", "Bash", "SysAdmin"]
          }
        ]
      },
      "projects": {
        "title": "Mis Proyectos",
        "subtitle": "Una colección de proyectos de desarrollo web y sistemas.",
        "active_projects": "PROYECTOS_ACTIVOS",
        "loaded": "CARGADO",
        "archived_systems": "SISTEMAS_ARCHIVADOS",
        "access_node": "ACCEDER_NODO",
        "p1_title": "matriculaciones.es",
        "p1_desc": "Plataforma web para gestionar y analizar matrículas. Creada con C# .NET, Docker, MySQL y desplegada con GitHub Actions.",
        "p2_title": "rapsodiaveusliteraries.com",
        "p2_desc": "Administración y gestión de la página web de Rapsòdia Veus Literàries.",
        "p3_title": "Servidor",
        "p3_desc": "Servidor propio con varios servicios desplegados: web, notificaciones, monitorización y backups.",
        "p4_title": "ERP Odoo",
        "p4_desc": "Instalación y configuración del ERP Odoo v17 en entorno Linux.",
        "p5_title": "Nextcloud",
        "p5_desc": "Nextcloud personal con sincronización de archivos y copias de seguridad.",
        "p6_title": "Proyectos de Consola C#",
        "p6_desc": "Colección de proyectos interactivos con C# por consola.",
        "slider1_title": "Matriculaciones DGT AI",
        "slider1_desc": "Plataforma de búsqueda inteligente de vehículos. Analiza matrículas para deducir años de fabricación y generaciones.",
        "slider2_title": "Rapsòdia Veus Literàries",
        "slider2_desc": "Administración web y gestión de contenido literario.",
        "slider3_title": "Homelab Datacenter",
        "slider3_desc": "Mi servidor personal montado desde cero con Proxmox, Docker y múltiples servicios autoalojados."
      },
      "homelab": {
        "title": "Homelab y Arquitectura",
        "subtitle": "Mi laboratorio personal de sistemas, servidores y redes.",
        "status": "A continuación muestro la arquitectura del laboratorio que estoy montando.",
        "section_servers": "Servidores y Hardware",
        "section_network": "Redes y Seguridad",
        "server1_title": "NODE-01: Dell Precision 5820",
        "server1_desc": "Intel Xeon W-2155, 64GB RAM, Nvidia Quadro P2000. Ejecuta un LXC con Jellyfin, conectado a Radarr, Sonarr, Prowlarr, Jellyseerr y qBittorrent.",
        "server2_title": "NODE-02: Dell T320 (NAS)",
        "server2_desc": "Hipervisor principal con Proxmox. Aloja el NAS para almacenamiento y varias Máquinas Virtuales.",
        "server3_title": "NODE-03: Wyse 5070",
        "server3_desc": "Nodo de bajo consumo con Pi-hole (bloqueo de anuncios) y Nginx Proxy Manager para gestionar el acceso a todos los servicios.",
        "network_title": "Segmentación de Red",
        "network_desc": "La red está segmentada mediante subnetting. Separo los servidores de los demás dispositivos para evitar infiltraciones y analizar el tráfico.",
        "history_title": "SYS_EVOLUTION // HISTORIA DEL HARDWARE",
        "hist_v1_title": "V1.0 - Los inicios humildes",
        "hist_v1_desc": "Todo empezó con un viejo portátil Acer \"súper súper viejo y caca\". Sirvió como primera toma de contacto con el mundo de los servidores autoalojados.",
        "hist_v2_title": "V2.0 - MSI GT72VR Dominator Pro",
        "hist_v2_desc": "El portátil gaming que donó su vida por la ciencia (se le rompió la gráfica). Fue el gran salto: instalé Nextcloud, Jellyfin, webs propias y Code Server. Un servidor potente hasta que la GPU dijo basta.",
        "hist_v3_title": "V3.0 - Dell Precision 5820 (El núcleo)",
        "hist_v3_desc": "Entrando en las grandes ligas. Workstation pura. Aquí empecé con LXC, Docker, y Cockpit. Instalé libvirt para máquinas virtuales reales (prácticas) accediendo por VNC. Además, monté Tailscale para acceso remoto seguro a toda la red.",
        "hist_v4_title": "V4.0 - Dell Wyse 5070",
        "hist_v4_desc": "Para delegar los servicios críticos de red. Compré este thin-client específicamente para alojar el Pi-hole (bloqueo de anuncios y DNS local) y Nginx Proxy Manager (gestión de dominios y certificados SSL).",
        "hist_v5_title": "V5.0 - Dell T320 (Storage Node)",
        "hist_v5_desc": "El servidor definitivo para almacenamiento masivo. Actúa como NAS centralizado para albergar todas las copias de seguridad de la infraestructura y datos personales."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
