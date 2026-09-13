export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tavern is the kind of place where dinner somehow turns into an entire evening. The food is exceptional, but the atmosphere is what keeps bringing us back.",
    name: "Ayesha Khan",
    role: "Regular Guest",
    location: "Islamabad",
  },
  {
    quote:
      "Everything feels considered without ever feeling formal. Great plates, great drinks, and a room that makes you want to stay.",
    name: "Hamza Ali",
    role: "Food Enthusiast",
    location: "Islamabad",
  },
  {
    quote:
      "From the first course to the last drink, Tavern gets the little things right. It feels warm, effortless, and genuinely memorable.",
    name: "Sara Ahmed",
    role: "Tavern Guest",
    location: "Islamabad",
  },
];