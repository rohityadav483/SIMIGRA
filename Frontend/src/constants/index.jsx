
// Icons 
import { Building2 } from "lucide-react";
import { Home } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import { Plane } from "lucide-react";
import { Languages } from "lucide-react";

// Animations 
import animation1 from "../animations/Travel.json";
import animation2 from "../animations/Food.json";
import animation3 from "../animations/Home.json";
import animation4 from "../animations/Cultural.json";
import animation5 from "../animations/Jobs.json";

// Navbar Items 
export const navItems = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Features", href: "#Features" },
  { label: "Contacts", href: "#Contacts" },
];

// Why Choose Simigra
export const whyData = [
  {
    text: "All-in-One Platform",
    description:
      "Say goodbye to scattered information! SIMIGRA integrates everything you need for a successful migration into one intuitive platform – from jobs and housing to cultural guidance and community support.",
  },
  {
    text: "Personalized Experience",
    description:
      "Every migration journey is unique. SIMIGRA tailors its services to your destination, skills, preferences, and goals, ensuring a customized solution that meets your needs.",
  },
  {
    text: "Comprehensive Guidance",
    description:
      "Whether it’s securing a job, finding accommodation, or understanding local customs, SIMIGRA provides end-to-end support to help you settle in confidently and comfortably.",
  },
];

// Features 
export const feature = [
  {
    icon: <Building2 />,
    id: "1",
    text: "Custom Job Listing",
    description:
      "SIMIGRA offers personalized job recommendations tailored to your skills, qualifications, and preferred destination. By leveraging advanced algorithms, our platform displays job opportunities in real-time, ensuring you have access to the best options that align with your career goals. Whether you’re looking for a full-time position, freelance work, or internships, SIMIGRA makes it easy to search, filter, and apply for jobs that match your professional profile.",
  },
  {
    icon: <Home />,
    id: "2",
    text: "Accomodation Finder",
    description:
      "SIMIGRA simplifies the accommodation search by providing a curated list of housing options within your budget and desired location. Our platform displays real-time listings for apartments, shared accommodations, and short-term rentals. With price comparisons, user reviews, and detailed descriptions, SIMIGRA helps you make an informed decision and secure your ideal home without the hassle",
  },
  {
    icon: <UtensilsCrossed />,
    id: "3",
    text: "Food Assistance",
    description:
      "SIMIGRA's Food Assistance feature helps migrants explore local eateries, tiffin services, and grocery stores tailored to their preferences and budget. It provides monthly cost estimates, dietary-specific options, and user reviews. With integrated maps and directions, users can easily discover affordable and suitable food options, ensuring a seamless culinary experience.",
  },
  {
    icon: <Plane />,
    id: "4",
    text: "Travel Assistance",
    description:
      "SIMIGRA's Travel Assistance feature simplifies local transportation for migrants by comparing options like buses, taxis, and rickshaws based on cost, convenience, and availability. It offers route planning, fare estimates, and real-time updates to ensure smooth commuting. This feature helps users navigate their new city confidently and cost-effectively..",
  },
  {
    icon: <Languages />,
    id: "5",
    text: "Cultural Adaptation Assistance",
    description:
      "Understanding the culture and local customs is essential for a smooth transition to a new country. SIMIGRA offers resources to help you adapt to your new environment, including language learning tools, cultural guides, and tips on local traditions and social norms. Our platform ensures you have everything you need to integrate easily into your new community and feel at home.",
  },
]

//Footer Links
export const QuickLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "About" },
  { href: "#", text: "Features" },
  { href: "#", text: "Contacts" },
  { href: "#", text: "FAQ" },
];

export const Contacts = [
  { href: "#", text: "Email: support@simigra.com" },
  { href: "#", text: "Phone: +91 12345-67890" },
  { href: "#", text: "Telephone: 0123-4567" },
  { href: "#", text: "Address: 123 Migration Lane, Suite 456, City, Country" },
];

export const FollowUs = [
  { href: "#", text: "Intagram" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "Youtube" },
  { href: "#", text: "Twitter" },
  { href: "#", text: "LinkedIn" },
];


// Sidebar options 
export const SidebarData = [
  {title: "Dashboard", icon: <Languages/>,},
  {title: "Travel", icon: <Languages/>},
  {title: "Food", icon: <Languages/>},
  {title: "Cultural", icon: <Languages/>},
  {title: "Accomodation", icon: <Languages/>},
]

// Dashboard options 
export const DashboardData = [
  {
    title: "Travel Assistance",
    description:
      "Find local eateries, restaurants, and tiffin services near your destination. Explore affordable dining options that cater to your tastes and dietary preferences. View monthly meal plans and budget-friendly food services to ensure a seamless culinary experience in your new city.",
    button: "Plan Your Commute",
    animation: animation1,
  },
  {
    title: "Food Assistance",
    description:
      "Compare various modes of transportation, such as buses, taxis, rickshaws, and more. Get insights into costs, routes, and convenience to make informed decisions about your daily commute and travel within the city. Simplify navigation and save time with clear travel options.",
    button: "Discover Local Eats",
    animation: animation2,
  },
  {
    title: "Accomodation Finder",
    description:
      "Discover a wide range of housing options tailored to your budget and preferences. Whether you’re looking for shared apartments, single rooms, or family homes, explore verified listings in your destination. Filter through available accommodations and choose a place that feels like home in your new location.",
    button: "Explore Housing Options",
    animation: animation3,
  },
  {
    title: "Cultural Adaptation Assistance",
    description:
      "Navigate your new environment effortlessly with resources for cultural integration. Learn the local language with easy-to-use tools, understand customs and traditions, and gain insights into social norms. Feel confident and connected as you settle into your new community.",
    button: "Learn & Adapt",
    animation: animation4,
  },  {
    title: "Custom Job Listings",
    description:
      "Access a curated list of job opportunities tailored to your skills, qualifications, and destination. Filter job listings by industry, location, and job type to find the perfect match for your career goals. Simplify your job search with personalized recommendations designed to help you start your new journey with confidence.",
    button: "Find Jobs Near Me",
    animation: animation5,
  },
];