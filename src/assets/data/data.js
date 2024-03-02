import walmart from "../images/Walmart.png";
import volvo from "../images/Volvo.png";
import cisco from "../images/cisco.png";
import okta from "../images/okta.png";
import Deloitte from "../images/deloitte.png";

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
