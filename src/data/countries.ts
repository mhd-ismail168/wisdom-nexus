export const studyAbroadCountries = [
    {
        id: "canada",
        name: "Canada",
        flag: "🇨🇦",
        image: "/images/countries/canada.png",
        tagline: "World-Class Education with Strong PR Pathways",
        tuition: "CAD 15,000–35,000/year",
        living: "CAD 10,000–15,000/year",
        work: "20 hrs/week",
        postStudy: "PGWP up to 3 years",
        prPathway: "High Opportunity (Express Entry, PNP)",
        universities: [
            { name: "University of Toronto", city: "Toronto", desc: "Top-ranked global research university." },
            { name: "University of British Columbia", city: "Vancouver", desc: "World leader in research and teaching." },
            { name: "McGill University", city: "Montreal", desc: "Canada's most international university." },
            { name: "University of Waterloo", city: "Waterloo", desc: "Renowned for co-op programs and engineering." }
        ],
        whyStudy: [
            "High quality of life and extremely safe environment.",
            "Globally recognized degrees from top-tier institutions.",
            "Immigration-friendly post-study work policies.",
            "Bilingual environment (English & French opportunities)."
        ],
        popularCourses: ["Computer Science", "Engineering", "Business & Finance", "Healthcare"],
        requirements: {
            academic: "High school diploma / Bachelor's degree with 65%+",
            english: "IELTS 6.5+ or TOEFL iBT 88+",
            documents: "Transcripts, LORs, SOP, Passport, Financial proof"
        }
    },
    {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        image: "/images/countries/uk.png",
        tagline: "Fast-Track Degrees with Global Recognition",
        tuition: "£12,000–30,000/year",
        living: "£9,000-12,000/year",
        work: "20 hrs/week",
        postStudy: "Graduate Route (2 years)",
        prPathway: "Moderate Opportunity",
        universities: [
            { name: "University of Oxford", city: "Oxford", desc: "Oldest university in the English-speaking world." },
            { name: "University of Cambridge", city: "Cambridge", desc: "Global leader in scientific research." },
            { name: "Imperial College London", city: "London", desc: "Focused purely on science, engineering, and business." },
            { name: "University of Manchester", city: "Manchester", desc: "Largest single-site university in the UK." }
        ],
        whyStudy: [
            "1-year Master's programs saving time and money.",
            "Home to some of the world's oldest and best universities.",
            "Reinstated 2-year post-study work visa.",
            "Rich cultural experience in cosmopolitan cities."
        ],
        popularCourses: ["Management & Business", "Data Science", "Law", "Art & Design"],
        requirements: {
            academic: "60%+ in previous qualifications",
            english: "IELTS 6.0-7.0 depending on program",
            documents: "Academic transcripts, CV, Personal Statement, References"
        }
    },
    {
        id: "australia",
        name: "Australia",
        flag: "🇦🇺",
        image: "/images/countries/australia.png",
        tagline: "Study, Work & Build Your Future",
        tuition: "AUD 20,000–45,000/year",
        living: "AUD 24,000/year",
        work: "48 hrs/fortnight",
        postStudy: "Up to 4 years post-study work rights",
        prPathway: "High Opportunity",
        universities: [
            { name: "University of Melbourne", city: "Melbourne", desc: "Australia's top-ranked university." },
            { name: "Australian National University", city: "Canberra", desc: "Leading center for public policy and research." },
            { name: "University of Sydney", city: "Sydney", desc: "A world-class research and teaching institution." },
            { name: "Monash University", city: "Melbourne", desc: "Largest university in Australia." }
        ],
        whyStudy: [
            "Excellent climate and outdoor lifestyle.",
            "Focus on practical and industry-based learning.",
            "Generous work rights during and after studies.",
            "High minimum wage for student jobs."
        ],
        popularCourses: ["Accounting", "IT & Cyber Security", "Engineering", "Nursing"],
        requirements: {
            academic: "Recognized prior qualifications with good grades.",
            english: "IELTS 6.5 (no band less than 6.0)",
            documents: "GTE (Genuine Temporary Entrant) statement, transcripts, health cover"
        }
    },
    {
        id: "germany",
        name: "Germany",
        flag: "🇩🇪",
        image: "/images/countries/germany.png",
        tagline: "Tuition-Free Public Universities",
        tuition: "Mostly free public universities",
        living: "€8,000–12,000/year",
        work: "120 full days/year",
        postStudy: "18-month job seeker visa",
        prPathway: "High Opportunity (EU Blue Card)",
        universities: [
            { name: "Technical University of Munich", city: "Munich", desc: "Top choice for engineering and innovation." },
            { name: "Heidelberg University", city: "Heidelberg", desc: "Germany's oldest university with a rich history." },
            { name: "RWTH Aachen University", city: "Aachen", desc: "Leading technical university in Europe." }
        ],
        whyStudy: [
            "Virtually zero tuition fees at public institutions.",
            "Engineering and technology powerhouse.",
            "Strong economy with excellent job prospects.",
            "Travel freely across the Schengen area."
        ],
        popularCourses: ["Mechanical Engineering", "Automotive Engineering", "Computer Science", "Physics"],
        requirements: {
            academic: "Excellent academic record, required entrance exams in some cases.",
            english: "IELTS/TOEFL for English programs. TestDaF/DSH for German.",
            documents: "Blocked account for living expenses, transcripts, motivation letter."
        }
    },
    {
        id: "ireland",
        name: "Ireland",
        flag: "🇮🇪",
        image: "/images/countries/ireland.png",
        tagline: "Europe’s English-Speaking Tech Hub",
        tuition: "€12,000–25,000/year",
        living: "€10,000-14,000/year",
        work: "20 hrs/week",
        postStudy: "Up to 2 years",
        prPathway: "High Opportunity (Critical Skills)",
        universities: [
            { name: "Trinity College Dublin", city: "Dublin", desc: "Historic and highly prestigious university." },
            { name: "University College Dublin", city: "Dublin", desc: "Ireland's global university." }
        ],
        whyStudy: [
            "European base for major tech companies (Google, Meta).",
            "Only English-speaking country in the Eurozone.",
            "Friendly and welcoming culture.",
            "High employability post-graduation."
        ],
        popularCourses: ["IT & Software", "Pharmaceutical Sciences", "Business Analytics"],
        requirements: {
            academic: "Good academic standing in previous degree.",
            english: "IELTS 6.5+",
            documents: "Transcripts, SOP, English proficiency proof"
        }
    },
    {
        id: "france",
        name: "France",
        flag: "🇫🇷",
        image: "/images/countries/france.png",
        tagline: "Affordable European Education",
        tuition: "€2,770-€3,770/year (Public)",
        living: "€10,000-14,000/year",
        work: "964 hours/year",
        postStudy: "1-2 years APS visa",
        prPathway: "Moderate Opportunity",
        universities: [
            { name: "Sorbonne University", city: "Paris", desc: "World-renowned research university." },
            { name: "HEC Paris", city: "Paris", desc: "One of the best business schools globally." }
        ],
        whyStudy: [
            "Highly subsidized tuition at public universities.",
            "Rich culture, art, and history.",
            "Excellent business and engineering schools.",
            "Housing subsidies available for international students."
        ],
        popularCourses: ["Luxury Management", "Engineering", "Fine Arts", "Business"],
        requirements: {
            academic: "Relevant degree or diploma.",
            english: "IELTS/TOEFL. French B2+ if studying in French.",
            documents: "Campus France process, transcripts, motivation letter"
        }
    },
    {
        id: "newzealand",
        name: "New Zealand",
        flag: "🇳🇿",
        image: "/images/countries/newzealand.png",
        tagline: "Safe & High-Quality Education",
        tuition: "NZD 25,000–40,000/year",
        living: "NZD 15,000-20,000/year",
        work: "20 hrs/week",
        postStudy: "Up to 3 years post-study work visa",
        prPathway: "High Opportunity",
        universities: [
            { name: "University of Auckland", city: "Auckland", desc: "New Zealand's largest and highest-ranked university." },
            { name: "University of Otago", city: "Dunedin", desc: "Oldest university in NZ, known for health sciences." }
        ],
        whyStudy: [
            "Extremely safe and peaceful country.",
            "All 8 universities are globally ranked.",
            "Focus on research and innovation.",
            "High quality of life and stunning landscapes."
        ],
        popularCourses: ["Agriculture", "Environmental Science", "IT", "Hospitality"],
        requirements: {
            academic: "Good grades from recognized institutions.",
            english: "IELTS 6.0 - 6.5",
            documents: "Academic records, health and character certificates"
        }
    },
    {
        id: "switzerland",
        name: "Switzerland",
        flag: "🇨🇭",
        image: "/images/countries/switzerland.png",
        tagline: "Premium Education & Hospitality Excellence",
        tuition: "CHF 1,500-4,000/year (Public)",
        living: "CHF 18,000-28,000/year",
        work: "15 hrs/week (after 6 months)",
        postStudy: "6 months to seek employment",
        prPathway: "Difficult (Highly Competitive)",
        universities: [
            { name: "ETH Zurich", city: "Zurich", desc: "Top-tier STEM and engineering institution." },
            { name: "University of Zurich", city: "Zurich", desc: "Largest university in Switzerland." },
            { name: "EHL Hospitality Business School", city: "Lausanne", desc: "World's #1 hospitality school." }
        ],
        whyStudy: [
            "World leader in hospitality and banking.",
            "Exceptionally high standard of living.",
            "Multilingual environment.",
            "Extremely low tuition at public universities."
        ],
        popularCourses: ["Hospitality Management", "Banking & Finance", "Engineering", "Life Sciences"],
        requirements: {
            academic: "Strong academic background.",
            english: "IELTS/TOEFL. German/French/Italian depending on canton.",
            documents: "Transcripts, motivation letter, CV."
        }
    },
    {
        id: "uae",
        name: "UAE (Dubai)",
        flag: "🇦🇪",
        image: "/images/countries/uae.png",
        tagline: "International Campuses in a Global Hub",
        tuition: "AED 40,000–100,000/year",
        living: "AED 30,000-50,000/year",
        work: "Permitted with university NOC",
        postStudy: "1-year post-study or long-term Golden Visa",
        prPathway: "Golden Visa (Skill/Investment Based)",
        universities: [
            { name: "University of Birmingham Dubai", city: "Dubai", desc: "UK top 100 university campus in Dubai." },
            { name: "Heriot-Watt University Dubai", city: "Dubai", desc: "Renowned for engineering and business." }
        ],
        whyStudy: [
            "Global branch campuses offering UK/US/AUS degrees.",
            "Tax-free income and high career prospects.",
            "Proximity to India with strong cultural ties.",
            "Safe, modern, and cosmopolitan lifestyle."
        ],
        popularCourses: ["Business Administration", "Engineering", "Architecture", "Tourism"],
        requirements: {
            academic: "Standard high school/bachelor's credentials.",
            english: "IELTS widely accepted.",
            documents: "Passport, academic transcripts, visa application."
        }
    },
    {
        id: "saudiarabia",
        name: "Saudi Arabia",
        flag: "🇸🇦",
        image: "/images/countries/saudiarabia.png",
        tagline: "Scholarship Opportunities & Strong Engineering Programs",
        tuition: "Many fully-funded scholarships available",
        living: "SAR 20,000-30,000/year",
        work: "Restricted",
        postStudy: "Employment visa required post-study",
        prPathway: "Premium Residency (Specific Categories)",
        universities: [
            { name: "King Saud University", city: "Riyadh", desc: "Premier university in the Kingdom." },
            { name: "King Abdulaziz University", city: "Jeddah", desc: "Highly ranked globally for engineering and math." }
        ],
        whyStudy: [
            "Generous scholarships covering tuition and living.",
            "State-of-the-art research facilities.",
            "Deep cultural and historical heritage.",
            "Rapidly transforming economy under Vision 2030."
        ],
        popularCourses: ["Petroleum Engineering", "Islamic Finance", "Computer Science"],
        requirements: {
            academic: "High academic merit for scholarships.",
            english: "IELTS/TOEFL depending on the program.",
            documents: "Transcripts, medical report, police clearance."
        }
    }
];
