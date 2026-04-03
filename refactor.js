const fs = require('fs');
const path = require('path');

const routes = [
  { dir: 'src/app', title: 'Wisdom Nexus | Elite Admission Architects', desc: 'Strategic academic counsel for families seeking admissions to top universities.' },
  { dir: 'src/app/about', title: 'About Us | Wisdom Nexus', desc: 'Learn more about Wisdom Nexus and our mission to guide students to global success.' },
  { dir: 'src/app/colleges', title: 'Top Colleges & Universities | Wisdom Nexus', desc: 'Explore top colleges and universities across India and abroad with Wisdom Nexus.' },
  { dir: 'src/app/contact', title: 'Contact Us | Wisdom Nexus', desc: 'Get in touch with Elite Admission Architects for strategic academic counseling.' },
  { dir: 'src/app/dmit', title: 'DMIT Assessment | Wisdom Nexus', desc: 'Discover your intrinsic abilities with our scientific DMIT assessments.' },
  { dir: 'src/app/study-abroad', title: 'Study Abroad Programs | Wisdom Nexus', desc: 'Unlock global opportunities with our expert international admission handling and visa support.' },
];

routes.forEach(route => {
  const pagePath = path.join(process.cwd(), route.dir, 'page.tsx');
  const clientPath = path.join(process.cwd(), route.dir, 'page-client.tsx');
  
  if (fs.existsSync(pagePath)) {
    fs.renameSync(pagePath, clientPath);
    
    const serverPageCode = `import { Metadata } from "next";
import ClientPage from "./page-client";

export const metadata: Metadata = {
  title: "${route.title}",
  description: "${route.desc}",
};

export default function Page() {
  return <ClientPage />;
}
`;
    fs.writeFileSync(pagePath, serverPageCode);
    console.log(`Refactored ${route.dir}`);
  }
});
