import walmart from "../images/Walmart.png";
import volvo from "../images/Volvo.png";
import cisco from "../images/cisco.png";
import okta from "../images/okta.png";
import Deloitte from "../images/deloitte.png";
import diamond from "../images/item1.png";
import Xd from "../images/item2.png";
import figma from "../images/item3.png";
import N from "../images/item4.png";
import vmware from "../images/vmware.png";
import docSign from "../images/docSign.png";
import frog from "../images/frog.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";

// data for navbar
export const navbarItems = [
  {
    title: "Product",
    to: "#product",
    children: [
      {
        title: "Feature 1",
        to: "#feature1",
      },
      {
        title: "Feature 2",
        to: "#feature2",
      },
    ],
  },
  {
    title: "Solutions",
    to: "#solutions",
    children: [
      {
        title: "Solution A",
        to: "#solutionA",
      },
      {
        title: "Solution B",
        to: "#solutionB",
      },
    ],
  },
  {
    title: "Resources",
    to: "#resources",
    children: [
      {
        title: "Resource 1",
        to: "#resource1",
      },
      {
        title: "Resource 2",
        to: "#resource2",
      },
    ],
  },
  {
    title: "Enterprise",
    to: "#enterprise",
  },
  {
    title: "Pricing",
    to: "#pricing",
  },
];

// data for sponsor component
export const sponsors = [
  { name: "Walmart", image: walmart },
  { name: "Cisco", image: cisco },
  { name: "Volvo", image: volvo },
  { name: "Deloitte", image: Deloitte },
  { name: "Okta", image: okta },
];

//data for brainstorming component buttons
export const brainstormingButtons = [
  {
    name: "Brainstorming",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities - the list goes on.",
  },
  {
    name: "Diagramming",
    description:
      "Create visual representations to simplify complex concepts and enhance understanding.",
  },
  {
    name: "Meetings & Workshops",
    description:
      "Facilitate effective communication and collaboration during meetings and workshops.",
  },
  {
    name: "Scrum Events",
    description:
      "Optimize Scrum processes and enhance collaboration during Scrum events.",
  },
  {
    name: "Mapping",
    description:
      "Visualize and organize information spatially for better comprehension and analysis.",
  },
  {
    name: "Research & Design",
    description:
      "Support research and design processes with visual aids and collaborative tools.",
  },
  {
    name: "Strategic Planning",
    description:
      "Plan and implement strategic initiatives with clarity and efficiency.",
  },
];

//data for brainstorming component buttons
export const uxDesignButtons = [
  {
    name: "UI & Design",
  },
  {
    name: "Marketing",
  },
  {
    name: "Product Management",
  },
  {
    name: "Engineering",
  },
  {
    name: "Consultants",
  },
  {
    name: "Agile Coaches",
  },
  {
    name: "Sales",
  },
];

// data for ux tools
export const uxTools = [
  { name: "Diamond", image: diamond },
  { name: "XD", image: Xd },
  { name: "Figma", image: figma },
  { name: "N", image: N },
];

//data for teams component
export const teamsData = [
  {
    img: vmware,
    desc: '"When the pandemic hit, those of us who thrive on in-person collaboration were worried that out creativity and productivity would suffer. Mio was the perfect tool to help us with collaboration, whiteboarding, and retrospective while remote."',
  },
  {
    img: docSign,
    desc: '"Miro helps solve one of the major gaps in project design: how to manage tasks across product designers whose projects are in different tools."',
  },
  {
    img: frog,
    desc: '"As we used Miro we moved from skepticism to belief to innovation and now we have a toll that\'s at the core of what we do and will continue to extend into the future."',
  },
];

export const reviewerInfo = [
  {
    avatar: person1,
    name: "Roxanne Mustafa",
    designation: "Design Team Lead at VMware",
  },
  {
    avatar: person2,
    name: "Jane Ashley",
    designation: "Head of Design at DocuSign",
  },
  {
    avatar: person3,
    name: "Laura Baird",
    designation: "Associate Design Director at frog",
  },
];
