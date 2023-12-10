import { Images } from "../photos/Images";

export const Data = {
  tr: {
    langSwitch: ["İNGİLİZCE", "'YE GEÇ"],
    nav: {
      skills: ["Yetenekler"],
      projects: "Projeler",
      hire: "Bana Ulaşın!",
    },
    hero: {
      title: ["Yaratıcı", "Minimalist"],
      description:
        "Merhaba, ben Emre. Tam donanımlı bir yazılım geliştiricisiyim. Sağlam ve ölçeklenebilir ön uç ürünleri, harika kullanıcı deneyimleriyle birlikte tasarlamak isteyenler için doğru adresim. Profesyonel ve samimi bir iş birliği için, benimle tanışmaya ne dersiniz?",
    },
    skillsTitle: "Yetenekler",
    skills: [
      { image: Images.skills.jsLogo, title: "JAVASCRIPT" },
      { image: Images.skills.reactLogo, title: "REACT" },
      { image: Images.skills.reduxLogo, title: "REDUX" },
      { image: Images.skills.tailwindLogo, title: "TAILWIND" },
      { image: Images.skills.nodeLogo, title: "NODE" },
      { image: Images.skills.figmaLogo, title: "FIGMA" },
    ],
    profile: {
      title: "Profil",
      aboutTitle: "Hakkında",
      locationTitle: "İkamet Şehri",
      location: "İstanbul",
      about1:
        "Merhaba, ben Emre. Yeditepe Üniversitesi Diş Hekimliği Fakültesi mezunuyum ve şu anda tam zamanlı bir full-stack geliştirici olarak çalışıyorum. Diş hekimliğinde kazandığım titizlik ve detaylara olan odaklanmayı, teknoloji ve yazılım sektörüne aktarıyorum. Her yeni projede, bu alanlardaki hassas yaklaşımımı ve derinlemesine analiz yeteneğimi geliştiriyorum.",
      about2:
        "JavaScript, React, Node.js, Java ve Spring Boot konularında uzmanlığım sayesinde kullanıcı dostu ve etkileyici web siteleri tasarlıyorum. Yeni teknolojileri öğrenmeye açığım ve Web dünyasında daha fazla deneyim kazanmak için istekliyim.",
      birthDateTitle: "Doğum Tarihi",
      birthDate: "20.10.1997",
      eduTitle: "Eğitim Durumu",
      edu: "Yeditepe Ünv. Diş Hekimliği, 2021",
      roleTitle: "Tercih Ettiği Rol",
      role: "Frontend, UI",
    },
    projectsTitle: "Projeler",
    projects: [
      {
        title: "Pizza Sipariş Sitesi",
        image: Images.projects.pizzaProject,
        description:
          "Bir pizza sipariş platformu düşünün. Burada müşteriler, pizza için çeşitli ek malzemeler, hamurun kalınlığını ve pizzanın boyutunu seçebilirler. Müşteri adı ve özel notlar girildikten sonra, sipariş miktarı belirlenir ve sipariş verilir. Son aşamada ise, müşterilere siparişlerinin detaylı bir özeti sunulur.",
        skills: ["react", "axios", "Yup", "router"],
        github: "GitHub",
        githubUrl: "https://github.com/aemreakyuz/fsweb-s7-challenge-pizza",
        view: "View Site",
        url: "https://fun-code-pizza.vercel.app/",
      },
      {
        title: "Fav Film Listesi",
        image: Images.projects.movieProject,
        description:
          "İzleme listenize eklenecek filmler... Bu liste, seçtiğiniz filmleri eklemenizi ve istediğiniz zaman kaldırmanızı sağlar. Böylece, ne izlemek istediğinize karar verirken veya zamanınız olduğunda, seçkin film koleksiyonunuzdan seçim yapabilirsiniz. Her an, yeni bir maceraya dalmanız için listeniz sizi bekliyor olacak.",
        skills: ["react", "redux", "axios", "Yup", "router"],
        github: "GitHub",
        githubUrl: "https://github.com/aemreakyuz/fsweb-s10g3-redux-watchlist",
        view: "View Site",
        url: "https://movie-watchlist-blush.vercel.app",
      },
      {
        title: "Netflix Clone",
        image: Images.projects.netflixClone,
        description: "Netflix.v2",
        skills: ["react", "redux", "contextAPI", "router", "axios"],
        github: "GitHub",
        githubUrl: "https://github.com/aemreakyuz/netflix-clone-redux",
        view: "View Site",
        url: "https://netflix-clone-redux-amber.vercel.app/",
      },
    ],
    footer: ["Hadi, gelecek projenizde", "birlikte harikalar yaratalım"],
  },
  en: {
    langSwitch: ["SWITCH TO", " TURKISH"],
    nav: {
      skills: ["Skills"],
      projects: "Projects",
      hire: "Hire Me",
    },
    hero: {
      title: ["Creative Thinker", "Minimalism Lover"],
      description:
        "Hi, I'm Emre. I'm a software developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
    },
    profile: {
      title: "Profile",
      aboutTitle: "About Me",
      locationTitle: "Location",
      location: "Istanbul, Tr",
      about1:
        "Hi, I'm Emre, a software developer and a dentist from Yeditepe University. My journey from dentistry to tech has sharpened my precision and passion for detail, qualities I bring to every web development project. I specialize in JavaScript, React, and Node.js, Java and Spring Boot with a focus on creating seamless, user-friendly websites.",
      about2:
        "Driven by a love for continuous learning and innovation, I'm always ready to dive into new challenges and collaborate on projects that blend creativity with functionality. ",
      birthDateTitle: "Birthday",
      birthDate: "20.10.1997",
      eduTitle: "Education",
      edu: "Yeditepe Uni. Dentistry 2021",
      roleTitle: "Preferred Role",
      role: "Frontend, UI",
    },
    skillsTitle: "Skills",
    skills: [
      { image: Images.skills.jsLogo, title: "JAVASCRIPT" },
      { image: Images.skills.reactLogo, title: "REACT" },
      { image: Images.skills.reduxLogo, title: "REDUX" },
      { image: Images.skills.nodeLogo, title: "NODE" },
      { image: Images.skills.tailwindLogo, title: "TAILWIND" },
      { image: Images.skills.figmaLogo, title: "FIGMA" },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        title: "Pizza Delivery Site",
        image: Images.projects.pizzaProject,
        description:
          "Imagine a pizza ordering platform where customers can choose various extra toppings, the thickness of the dough, and the size of their pizza. After entering the customer's name and special notes, the quantity of the order is determined and placed. In the final stage, customers are presented with a detailed summary of their order.",
        skills: ["react", "axios", "Yup", "router"],
        github: "GitHub",
        githubUrl: "https://github.com/aemreakyuz/fsweb-s7-challenge-pizza",
        view: "View Site",
        url: "https://fun-code-pizza.vercel.app/",
      },
      {
        title: "Fav Movie Watchlist",
        image: Images.projects.movieProject,
        description:
          "Movies to add to your watchlist... This list allows you to add and remove selected movies at your convenience. Thus, when deciding what to watch or when you have time, you can choose from your curated collection of films. Your list will always be waiting for you to dive into a new adventure at any moment.",
        skills: ["react", "redux", "router", "axios"],
        github: "GitHub",
        githubUrl: "https://github.com/aemreakyuz/fsweb-s10g3-redux-watchlist",
        view: "View Site",
        url: "https://movie-watchlist-blush.vercel.app",
      },
      {
        title: "Netflix Clone",
        image: Images.projects.netflixClone,
        description: "Netflix.v2",
        skills: ["react", "redux", "router", "axios"],
        github: "GitHub",
        githubUrl: "https://github.com/aemreakyuz/netflix-clone-redux",
        view: "View Site",
        url: "https://netflix-clone-redux-amber.vercel.app/",
      },
    ],
    footer: ["Let's work together on ", "your next project"],
  },
};
