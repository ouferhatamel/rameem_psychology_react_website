import vector from "../../assets/Vector.svg"

export const NavlinkData = [
    {
      id: 1,
      link: "About Us",
      src : '/',
      style: "text-second",
    },
    {
      id: 2,
      link: "Services",
      src : 'services',
      style: "text-second",
    },
    {
      id: 7,
      link: "Get Help",
      src : 'getHelp',
      style: "text-second",
    },
    {
      id: 3,
      link: "Provide Help",
      src : 'provideHelp',
      style: "text-second",
    },
    {
      id: 4,
      link: "Log In",
      src : 'logIn',
      style: "text-primary",
    },

  ];

export const AboutUsHome = [
    {
      id: 1,
      title: "people",
      number : "1M.",
      description : "have already received help",
      
    },

    {
      id: 2,
      title: "practitioners",
      number : "200K.",
      description : "use our platform",
      
    },

    {
      id: 3,
      title: "sessions",
      number : "4,5M.",
      description : "already completed",
      
    },

  ];

export const AboutSpacialist = [
  {
    id: 1,
    title: "Experienced Practitioners",
    description : "We have a collection of professionals with at least 2 years of experience.",
    src:"Illustration_2.svg",
    style:"bg-primary bg-opacity-10 border-transparent"

  },
  {
    id: 2,
    title: "Multiple Areas of Psychology",
    description : "Depending on your request, we select the practitionist specialised in what you need.",
    src:"Ilustration_1.svg",
    style:""
  },
  {
    id: 3,
    title: "Confidentiality",
    description : "Information about you is protected, records are not kept and cannot be distributed anywhere.",
    src:"Ilustration_3.svg",
    style:""

  },

];

export const presentationData = [
  {
    id: 1,
    description : "Elementum hac ornare Quam maecenas cras quisque.",
    
  },

  {
    id: 2,
    description : "Quam porta mauris interdum dapibus ipsum bibendum, mi consectetur felis et erat fames placerat dictumst varius.",
    
  },

  {
    id: 3,
    description : "Diam, quis auctor justo taciti cras purus elementum convallis risus turpis.",
    
  },

];

export const AccordionData = [
  {
    id: 1,
    question: 'Lorem ipsum in gravida pulvinar nostra?',
    answer:'Lorem ipsum in gravida pulvinar nostra?'
    
  },

  {
    id: 2,
    question: 'Lorem ipsum in gravida pulvinar nostra?',
    answer:'Lorem ipsum in gravida pulvinar nostra?'
  },

  {
    id: 3,
    question: 'Lorem ipsum in gravida pulvinar nostra?',
    answer:'Lorem ipsum in gravida pulvinar nostra?'
    
  },

];


export const PlansData = [
  {
    id: 1,
    title: 'Remote counseling',
    description:'Online sessions that could be booked and use anytime anywhere.'
    
  },

  {
    id: 2,
    title: 'Counseling at the clinic',
    description:'Pick an available date and time for a real life session at the clinic.'
    
  },

];

export const CostData = [

    { id: 1,
      title: "Session cost",
      itemOne: "2000 DA",
     itemTwo: "3500 DA" ,
     style:""
    },
    { id: 2,
      title: "Platform fee",
      itemOne: "10%",
     itemTwo: "0%" ,
     style:"bg-graytab bg-opacity-20"
    },
    { id: 3,
      title: "Method",
      itemOne: "CCP/CIB",
     itemTwo: "Cash" ,
     style:""
    },

];


export const ComparisonData = [

  { id: 1,
    title: "Lower cost",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"",
   others:"",
  },
  { id: 2,
    title: "Lower time consumption",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"bg-graytab bg-opacity-20",
   others:"",
  },
  { id: 3,
    title: "Location",
    itemOne: "Anywhere (Internet required)",
   itemTwo: "Clinics in your area" ,
   style:"",
   others:"text-second",
  },
  { id: 4,
    title: "Less efforts",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"bg-graytab bg-opacity-20",
   others:"",
  },
  { id: 5,
    title: "Better doctors availability",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"",
   others:"",
  },
  { id: 6,
    title: "Better appointment flexibility",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"bg-graytab bg-opacity-20",
   others:"",
  },

];
