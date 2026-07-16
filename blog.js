document.addEventListener("DOMContentLoaded", function () {
  const articles = [
    {
      id: "tomorrows-researchers-today",
      featured: true,
      title: "Tomorrow’s researchers today",
      category: "Research",
      tags: [
        "McNair Scholars",
        "Student Research",
        "Mentorship"
      ],
      date: "August 21, 2024",
      sortDate: "2024-08-21",
      readTime: "1 min read",
      image: "./assets/images/student-research-lab.png",
      imageAlt:
        "Students and faculty conducting scientific research",
      summary:
        "K-State faculty mentors prepare McNair Scholars for graduate education through summer research and academic guidance.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/tomorrows-researchers-today/",
      content: `
        <p>
          Some of K-State’s brightest students are preparing
          for graduate school through McNair Scholarship
          research internships and faculty mentoring.
        </p>

        <p>
          Each summer, faculty guide students through research
          projects, theoretical frameworks and preparation for
          advanced academic study.
        </p>

        <p>
          Scholars conclude the programme by presenting their
          findings to the K-State community.
        </p>
      `
    },

    {
      id: "leading-with-purpose",
      featured: true,
      title: "Leading with purpose",
      category: "Leadership",
      tags: [
        "Leadership",
        "Women",
        "Nigeria",
        "Social Change"
      ],
      date: "July 17, 2024",
      sortDate: "2024-07-17",
      readTime: "2 min read",
      image: "./assets/images/leading-with-purpose.png",
      imageAlt:
        "Chibuzor Mirian Azubuike photographed outdoors",
      summary:
        "Scholar-practitioner Chibuzor Mirian Azubuike combines research, leadership and community action.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/leading-with-purpose/",
      content: `
        <p>
          Chibuzor Mirian Azubuike is an author, public
          speaker, doctoral researcher and founder of the
          Haske Water Aid and Empowerment Foundation.
        </p>

        <p>
          Her foundation has provided clean water to more than
          60,000 people in Nigeria.
        </p>

        <blockquote>
          “A scholar-practitioner is one who not only does
          research but also implements solutions in real-life
          situations.”
        </blockquote>
      `
    },

    {
      id: "digging-up-success",
      featured: false,
      title: "Digging up success",
      category: "Design",
      tags: [
        "Interior Design",
        "Wellbeing",
        "Competition"
      ],
      date: "July 17, 2024",
      sortDate: "2024-07-17",
      readTime: "2 min read",
      image: "./assets/images/burrow-design.png",
      imageAlt:
        "The Burrow student wellness-space presentation board",
      summary:
        "K-State interior design students earned national recognition with a nature-inspired student wellness space.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/digging-up-success/",
      content: `
        <p>
          Four K-State interior design students created
          “Burrow,” a 50-square-metre wellness space designed
          to support college student mental health.
        </p>

        <p>
          The team earned second place in the 2024 Interior
          Design Educators Council student competition.
        </p>
      `
    },

    {
      id: "aviators-gift",
      featured: false,
      title: "Aviators’ gift",
      category: "Community",
      tags: [
        "Aviation",
        "Student Leadership",
        "Fundraising"
      ],
      date: "July 16, 2024",
      sortDate: "2024-07-16",
      readTime: "1 min read",
      image: "./assets/images/aviators-gift.png",
      imageAlt:
        "K-State Salina aviation students outside a hospital",
      summary:
        "K-State Salina aviation students raised more than $2,000 and delivered gifts to hospitalised children.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/aviators-gift/",
      content: `
        <p>
          K-State Salina’s Pilots For Kids chapter visited more
          than 40 children at Wesley Medical Center in Wichita.
        </p>

        <p>
          Students raised more than $2,000 for toys and custom
          K-State Salina pilot shirts.
        </p>
      `
    },

    {
      id: "sci-fi-realities",
      featured: false,
      title: "Sci-fi realities",
      category: "Technology",
      tags: [
        "Engineering",
        "Machine Learning",
        "Adaptive Structures"
      ],
      date: "July 16, 2024",
      sortDate: "2024-07-16",
      readTime: "1 min read",
      image: "./assets/images/sci-fi-realities.png",
      imageAlt: "Engineering professor Raj Kumar Pal",
      summary:
        "K-State engineer Raj Kumar Pal is developing structures capable of changing shape autonomously.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/sci-fi-realities/",
      content: `
        <p>
          Raj Kumar Pal received a $400,000 Department of
          Defense grant to develop shape-changing structures
          using reservoir computing.
        </p>

        <p>
          Possible applications include satellites, adaptive
          structures and medical robotics.
        </p>
      `
    },

    {
      id: "bonds-beyond-the-bell",
      featured: false,
      title: "Bonds beyond the bell",
      category: "Education",
      tags: [
        "Rural Education",
        "Teaching",
        "Kansas"
      ],
      date: "July 9, 2024",
      sortDate: "2024-07-09",
      readTime: "2 min read",
      image: "./assets/images/bonds-beyond-bell.png",
      imageAlt:
        "A teacher speaking with students in a classroom",
      summary:
        "Rural Kansas educators describe teaching as a role connected to mentorship and community leadership.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/bonds-beyond-the-bell/",
      content: `
        <p>
          Teaching in Goodland, Kansas, means becoming part of
          a close community where educators are also mentors,
          coaches and trusted guides.
        </p>

        <p>
          Rural schools offer opportunities to create strong
          relationships with students and families.
        </p>
      `
    },

    {
      id: "enhancing-accessibility",
      featured: true,
      title: "Enhancing accessibility",
      category: "Technology",
      tags: [
        "Accessibility",
        "Artificial Intelligence",
        "Robotics"
      ],
      date: "July 9, 2024",
      sortDate: "2024-07-09",
      readTime: "2 min read",
      image: "./assets/images/enhancing-accessibility.png",
      imageAlt:
        "A visually impaired person navigating an indoor space",
      summary:
        "The MABLE project uses AI, robotics and crowdsensing to improve indoor navigation for people with disabilities.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/enhancing-accessibility/",
      content: `
        <p>
          The Mapping for Accessibility in Built Environments
          project is developing responsive indoor navigation
          for people with visual and mobility disabilities.
        </p>

        <p>
          The technology combines artificial intelligence,
          robotics and crowdsensing.
        </p>
      `
    },

    {
      id: "digital-revival",
      featured: true,
      title: "Digital revival",
      category: "Technology",
      tags: [
        "Digital Twin",
        "3D Scanning",
        "Rural Development"
      ],
      date: "July 9, 2024",
      sortDate: "2024-07-09",
      readTime: "2 min read",
      image: "./assets/images/digital-revival.png",
      imageAlt:
        "A technician scanning the inside of a historic building",
      summary:
        "K-State created a precise digital twin to support redevelopment of a historic rural school.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/digital-revival/",
      content: `
        <p>
          K-State’s Technology Development Institute scanned
          Hill City’s former Memorial School Building in only
          four hours.
        </p>

        <p>
          The resulting digital twin is accurate to within
          approximately five millimetres and allows developers
          to evaluate the building remotely.
        </p>
      `
    },

    {
      id: "pawsitive-pain-relief",
      featured: false,
      title: "Pawsitive pain relief",
      category: "Research",
      tags: [
        "Veterinary Medicine",
        "Animal Health",
        "Pharmacology"
      ],
      date: "July 2, 2024",
      sortDate: "2024-07-02",
      readTime: "2 min read",
      image: "./assets/images/pawsitive-pain-relief.png",
      imageAlt: "A veterinarian examining a dog",
      summary:
        "K-State researchers patented a new canine pain-relief formula designed to improve treatment.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/pawsitive-pain-relief/",
      content: `
        <p>
          K-State veterinary researchers developed a new
          methadone-based formulation for moderate to severe
          canine pain.
        </p>

        <p>
          The formulation also includes an ingredient intended
          to deter human opioid misuse.
        </p>
      `
    },

    {
      id: "kstate-student-play",
      featured: false,
      title:
        "K-State student’s play lights up Kentucky stage",
      category: "Arts",
      tags: [
        "Theatre",
        "Playwriting",
        "Student Success"
      ],
      date: "July 2, 2024",
      sortDate: "2024-07-02",
      readTime: "2 min read",
      image: "./assets/images/kstate-student-play.png",
      imageAlt:
        "Actors reading scripts during a theatre event",
      summary:
        "K-State theatre student Emmett Spaw turned an idea written during a debate tournament into a produced comedy.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/k-state-students-play-lights-up-kentucky-stage/",
      content: `
        <p>
          Emmett Spaw first wrote “Three Shot” while waiting
          through an eight-hour high-school debate tournament.
        </p>

        <p>
          The play was later professionally produced during a
          comedy event in Kentucky.
        </p>
      `
    },

    {
      id: "sales-savvy-giving-spirit",
      featured: false,
      title: "Sales savvy and giving spirit",
      category: "Business",
      tags: [
        "Sales",
        "Fundraising",
        "Philanthropy"
      ],
      date: "July 1, 2024",
      sortDate: "2024-07-01",
      readTime: "2 min read",
      image: "./assets/images/sales-savvy.png",
      imageAlt:
        "K-State students at a formal awards event",
      summary:
        "K-State students raised more than $180,000 through a benefit auction supporting scholarships and charity.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/sales-savvy-and-giving-spirit/",
      content: `
        <p>
          Students in K-State’s Advanced Selling course planned
          and managed an auction that raised more than $180,000.
        </p>

        <p>
          Proceeds supported scholarships, student merit awards
          and Coming Together for a Cure.
        </p>
      `
    },

    {
      id: "championing-animal-wellbeing",
      featured: false,
      title: "Championing animal well-being",
      category: "Research",
      tags: [
        "Veterinary Medicine",
        "Diagnostics",
        "Animal Health"
      ],
      date: "June 25, 2024",
      sortDate: "2024-06-25",
      readTime: "2 min read",
      image: "./assets/images/animal-wellbeing-lab.png",
      imageAlt:
        "Researchers working inside a veterinary laboratory",
      summary:
        "The Kansas State Veterinary Diagnostic Laboratory performs more than 500 kinds of animal-health tests.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/championing-animal-well-being/",
      content: `
        <p>
          The Kansas State Veterinary Diagnostic Laboratory
          diagnoses and tracks diseases affecting pets,
          livestock and the wider agricultural economy.
        </p>

        <p>
          Its staff perform more than 500 types of diagnostic
          tests.
        </p>
      `
    },

    {
      id: "masters-of-persuasion",
      featured: false,
      title: "Masters of persuasion",
      category: "Education",
      tags: [
        "Debate",
        "Communication",
        "Student Outreach"
      ],
      date: "June 25, 2024",
      sortDate: "2024-06-25",
      readTime: "2 min read",
      image: "./assets/images/masters-of-persuasion.png",
      imageAlt:
        "High-school debate students at K-State",
      summary:
        "K-State Debate helps students strengthen research, public speaking and analytical skills.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/masters-of-persuasion/",
      content: `
        <p>
          K-State Debate hosts a week-long summer camp and
          additional clinics for high-school students.
        </p>

        <p>
          Participants develop research, argumentation,
          communication and problem-solving abilities.
        </p>
      `
    },

    {
      id: "global-supply-chains",
      featured: false,
      title:
        "K-State professor drives business success",
      category: "Research",
      tags: [
        "Business",
        "Supply Chains",
        "Industry 4.0"
      ],
      date: "June 20, 2024",
      sortDate: "2024-06-20",
      readTime: "2 min read",
      image: "./assets/images/global-supply-chains.png",
      imageAlt: "Professor Ike Ehie smiling",
      summary:
        "Professor Ike Ehie studies strategic investment and the future of global manufacturing.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/revolutionizing-global-supply-chains/",
      content: `
        <p>
          Professor Ike Ehie examines how companies can align
          manufacturing investment with long-term strategy.
        </p>

        <p>
          His work draws on data from more than 1,000 global
          firms.
        </p>
      `
    },

    {
      id: "culture-through-language",
      featured: true,
      title: "Experiencing culture through language",
      category: "Education",
      tags: [
        "Japanese",
        "Language",
        "Culture"
      ],
      date: "June 11, 2024",
      sortDate: "2024-06-11",
      readTime: "3 min read",
      image: "./assets/images/japan girl 1.png",
      imageAlt:
        "A person in traditional Japanese clothing",
      summary:
        "Japanese tutor Celina Trojnar shares how language learning created opportunities for travel and connection.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/experiencing-culture-through-language/",
      content: `
        <p>
          Celina Trojnar’s interest in Japanese began through
          linguistics and developed into a love for travel,
          teaching and communication.
        </p>

        <blockquote>
          “Practicing openly and earnestly is one of the best
          ways to progress.”
        </blockquote>
      `
    },

    {
      id: "elevating-design",
      featured: false,
      title: "Elevating design",
      category: "Design",
      tags: [
        "Fabrication",
        "Architecture",
        "Prototyping"
      ],
      date: "June 11, 2024",
      sortDate: "2024-06-11",
      readTime: "2 min read",
      image: "./assets/images/fabrication-welding.png",
      imageAlt:
        "Students welding in a fabrication laboratory",
      summary:
        "The APDesign fabrication laboratory helps students transform digital ideas into physical prototypes.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/elevating-design/",
      content: `
        <p>
          The 20,000-square-foot Farris Family Fabrication
          Laboratory gives students access to CNC routers,
          3D printers, kilns and specialist equipment.
        </p>

        <p>
          Students use the facility to test designs physically,
          rather than limiting their work to computer screens.
        </p>
      `
    },

    {
      id: "courts-and-columns",
      featured: true,
      title:
        "From Missouri to the New York Times: a story of resilience, triumph and cookies",
      category: "Profile",
      tags: [
        "Athletics",
        "Journalism",
        "Title IX"
      ],
      date: "June 6, 2024",
      sortDate: "2024-06-06",
      readTime: "4 min read",
      image: "./assets/images/leann.png",
      imageAlt:
        "LeAnn Wilcox Plutnicki embracing another contestant",
      summary:
        "LeAnn Wilcox Plutnicki reflects on Title IX, K-State athletics, journalism and Squid Game: The Challenge.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/courts-and-columns/",
      content: `
        <p>
          LeAnn Wilcox Plutnicki’s journey spans the early
          implementation of Title IX, K-State athletics,
          journalism at the New York Times and Netflix’s
          “Squid Game: The Challenge.”
        </p>

        <blockquote>
          “Title IX opened the door to scholarships and gave
          girls a chance to change their lives.”
        </blockquote>
      `
    },

    {
      id: "healing-horses-learning-vets",
      featured: false,
      title: "Healing horses, learning vets",
      category: "Community",
      tags: [
        "Veterinary Medicine",
        "Animal Welfare",
        "Education"
      ],
      date: "May 20, 2024",
      sortDate: "2024-05-20",
      readTime: "1 min read",
      image: "./assets/images/healing-horses-cover.png",
      imageAlt: "A rescued horse outdoors",
      summary:
        "Rainbow Meadows gives rescued horses a second chance while helping veterinary students gain experience.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/healing-horses-learning-vets/",
      content: `
        <p>
          Rainbow Meadows Equine Rescue has cared for more
          than 1,000 horses since 2005.
        </p>

        <p>
          K-State veterinary students gain hands-on experience
          while supporting the horses’ care and rehabilitation.
        </p>
      `
    },

    {
      id: "kansas-space-age-makeover",
      featured: true,
      title: "Kansas gets a space-age makeover",
      category: "Technology",
      tags: [
        "Spatial Computing",
        "Immersive Learning",
        "Aerospace"
      ],
      date: "May 20, 2024",
      sortDate: "2024-05-20",
      readTime: "2 min read",
      image: "./assets/images/k-aires.avif",
      imageAlt: "Partners at the K-AIRES launch",
      summary:
        "A $41 million partnership is bringing immersive technology and spatial computing to K-State Salina.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/kansas-gets-a-space-age-makeover/",
      content: `
        <p>
          K-State Salina and Pure Imagination Studios are
          creating K-AIRES, a $41 million immersive-learning
          and spatial-computing centre.
        </p>

        <p>
          The centre will support aerospace, public safety,
          interdisciplinary learning and regional economic
          development.
        </p>
      `
    },

    {
      id: "sensory-symphony",
      featured: false,
      title: "Sensory Symphony",
      category: "Design",
      tags: [
        "Inclusive Design",
        "Neurodiversity",
        "Accessibility"
      ],
      date: "March 25, 2024",
      sortDate: "2024-03-25",
      readTime: "1 min read",
      image: "./assets/images/sensory-symphony.png",
      imageAlt:
        "Interior-design samples and floor plans",
      summary:
        "K-State interior design students created an award-winning project about sensory-inclusive spaces.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/sensory-symphony/",
      content: `
        <p>
          Four K-State students earned first place in the IDEC
          Video Competition with a project examining sensory
          needs and neurodivergent experiences.
        </p>

        <p>
          Their work promotes adaptable lighting, sound and
          temperature.
        </p>
      `
    },

    {
      id: "paws-for-a-cause",
      featured: false,
      title: "Paws for a cause",
      category: "Community",
      tags: [
        "Veterinary Medicine",
        "Service Dogs",
        "Eye Care"
      ],
      date: "March 22, 2024",
      sortDate: "2024-03-22",
      readTime: "1 min read",
      image: "./assets/images/paws-for-a-cause.png",
      imageAlt:
        "A veterinary ophthalmologist examining a dog",
      summary:
        "K-State veterinary ophthalmologists provide free eye examinations for service and working dogs.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/paws-for-a-cause/",
      content: `
        <p>
          K-State veterinary ophthalmologists offer free eye
          examinations to service and working dogs.
        </p>

        <p>
          The national programme has provided more than 76,000
          free examinations since 2008.
        </p>
      `
    },

    {
      id: "building-resilience-madagascar",
      featured: true,
      title: "Building resilience in Madagascar",
      category: "Global Impact",
      tags: [
        "Food Security",
        "Climate Change",
        "Agriculture"
      ],
      date: "March 7, 2024",
      sortDate: "2024-03-07",
      readTime: "2 min read",
      image: "./assets/images/madagascar-resilience.png",
      imageAlt: "Sorghum growing in a field",
      summary:
        "A USAID-supported project is helping Malagasy farmers build food security through resilient crops.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/building-resilience-in-madagascar/",
      content: `
        <p>
          A $2.5 million USAID-supported partnership is
          promoting peanuts, sorghum and pearl millet in
          Madagascar.
        </p>

        <p>
          The initiative supports soil health, resilient crops,
          local markets, nutrition and women farmers.
        </p>
      `
    },

    {
      id: "sprouting-local",
      featured: false,
      title: "Sprouting local",
      category: "Community",
      tags: [
        "Local Food",
        "Kansas",
        "Agriculture"
      ],
      date: "February 13, 2024",
      sortDate: "2024-02-13",
      readTime: "2 min read",
      image: "./assets/images/sprouting-local.png",
      imageAlt: "A local farmers’ market",
      summary:
        "K-State is supporting 34 paid fellowships designed to strengthen local food systems across Kansas.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/sprouting-local/",
      content: `
        <p>
          K-State’s Local Food Systems programme is funding
          34 fellowships across Kansas.
        </p>

        <p>
          Fellows will promote farmers’ markets, connect
          producers with consumers and improve local food access.
        </p>
      `
    },

    {
      id: "from-flush-to-fortune",
      featured: false,
      title: "From flush to fortune",
      category: "Research",
      tags: [
        "Wastewater",
        "Sustainability",
        "Engineering"
      ],
      date: "January 24, 2024",
      sortDate: "2024-01-24",
      readTime: "2 min read",
      image: "./assets/images/flush-to-fortune.png",
      imageAlt:
        "A researcher holding a wastewater sample",
      summary:
        "K-State researchers are developing systems that turn wastewater into energy and reusable nutrients.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/from-flush-to-fortune/",
      content: `
        <p>
          K-State researchers use anaerobic membrane
          bioreactors to recover methane and nutrients from
          wastewater.
        </p>

        <p>
          The technology is also being adapted for livestock
          manure and agricultural operations.
        </p>
      `
    },

    {
      id: "future-of-water",
      featured: false,
      title: "The future of water",
      category: "Research",
      tags: [
        "Water",
        "Ogallala Aquifer",
        "Climate Change"
      ],
      date: "December 5, 2023",
      sortDate: "2023-12-05",
      readTime: "2 min read",
      image: "./assets/images/future-of-water.png",
      imageAlt:
        "A researcher using environmental monitoring equipment",
      summary:
        "K-State research combines climate models, remote sensing and machine learning to improve irrigation.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/the-future-of-water/",
      content: `
        <p>
          Vaishali Sharda studies irrigation, climate, soil and
          water management across the Ogallala Aquifer region.
        </p>

        <p>
          Satellite imagery, drones and machine learning help
          researchers understand crop-water needs.
        </p>
      `
    },

    {
      id: "unleash-inner-globetrotter",
      featured: false,
      title: "Unleash your inner globetrotter",
      category: "Education",
      tags: [
        "Study Abroad",
        "Scholarships",
        "Global Learning"
      ],
      date: "December 5, 2023",
      sortDate: "2023-12-05",
      readTime: "3 min read",
      image: "./assets/images/inner-globetrotter.png",
      imageAlt:
        "Students snorkelling over a coral reef",
      summary:
        "Study-abroad scholarships help K-State students gain independence and cross-cultural experience.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/unleash-your-inner-globetrotter/",
      content: `
        <p>
          K-State scholarships make study-abroad experiences
          more accessible to students.
        </p>

        <p>
          Participants develop independence, adaptability,
          communication skills and global awareness.
        </p>
      `
    },

    {
      id: "buzzworthy-invention",
      featured: true,
      title: "Buzzworthy invention",
      category: "Technology",
      tags: [
        "Artificial Intelligence",
        "Bees",
        "Conservation"
      ],
      date: "November 2023",
      sortDate: "2023-11-15",
      readTime: "2 min read",
      image: "./assets/images/buzzworthy-invention.png",
      imageAlt:
        "A bumblebee feeding on a flower",
      summary:
        "An AI-powered app helps users identify bee species and contribute to conservation.",
      sourceUrl:
        "https://ksufoundation.org/impact/global-impact/buzzworthy-invention/",
      content: `
        <p>
          Brian Spiesman created Beemachine, an app that uses
          artificial intelligence to identify bee species from
          photographs.
        </p>

        <p>
          The project aims to make native bee conservation more
          accessible to the public.
        </p>
      `
    },

    {
      id: "start-small-go-big",
      featured: false,
      title: "Start small, go big",
      category: "Business",
      tags: [
        "Entrepreneurship",
        "Start-ups",
        "Accelerator"
      ],
      date: "November 2023",
      sortDate: "2023-11-14",
      readTime: "2 min read",
      image: "./assets/images/start-small-go-big.png",
      imageAlt: "A staff member presenting wine",
      summary:
        "K-State’s Accelerator programme connects entrepreneurs with faculty, alumni mentors and student consultants.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/start-small-go-big/",
      content: `
        <p>
          The K-State Accelerator programme supports promising
          Kansas start-ups through workshops, mentorship and
          student research.
        </p>

        <p>
          Liquid Art Winery used the programme while developing
          its business.
        </p>
      `
    },

    {
      id: "art-of-giving",
      featured: false,
      title: "The art of giving",
      category: "Donor Stories",
      tags: [
        "Scholarships",
        "Philanthropy",
        "Art"
      ],
      date: "November 2023",
      sortDate: "2023-11-13",
      readTime: "2 min read",
      image: "./assets/images/art-of-giving-students.png",
      imageAlt:
        "Portrait painting of Anita K. Laurent",
      summary:
        "Anita K. Laurent’s estate gift has supported generations of K-State students.",
      sourceUrl:
        "https://ksufoundation.org/impact/donor-stories/the-art-of-giving/",
      content: `
        <p>
          Anita K. Laurent established a scholarship trust that
          began supporting K-State students in 1974.
        </p>

        <p>
          Hundreds of students have benefited from her
          philanthropic legacy.
        </p>
      `
    },

    {
      id: "bug-brilliance",
      featured: false,
      title: "Bug Brilliance",
      category: "Arts",
      tags: [
        "Entomology",
        "Archives",
        "Scientific Illustration"
      ],
      date: "November 2023",
      sortDate: "2023-11-12",
      readTime: "2 min read",
      image: "./assets/images/bug-brilliance.png",
      imageAlt:
        "Historic scientific insect illustrations",
      summary:
        "K-State students are working to preserve historic insect illustrations for future teaching.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/bug-brilliance/",
      content: `
        <p>
          Charles V. Riley’s historic silk insect canvases
          remain valuable scientific teaching aids.
        </p>

        <p>
          K-State students are raising support for their
          restoration and preservation.
        </p>
      `
    },

    {
      id: "creative-mathematics",
      featured: true,
      title: "Creative Mathematics",
      category: "Education",
      tags: [
        "Mathematics",
        "Indigenous Education",
        "Navajo Nation"
      ],
      date: "November 2023",
      sortDate: "2023-11-11",
      readTime: "3 min read",
      image: "./assets/images/creative-mathematics.png",
      imageAlt:
        "An educator speaking with Indigenous students",
      summary:
        "The Navajo Nation Math Circles programme combines collaborative mathematics with Indigenous culture.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/creative-mathematics/",
      content: `
        <p>
          The Navajo Nation Math Circles programme integrates
          mathematical problem-solving with Indigenous culture
          and community learning.
        </p>

        <p>
          Activities include camps, festivals, workshops and
          mentoring for teachers and students.
        </p>
      `
    },

    {
      id: "mid-century-marvel",
      featured: true,
      title: "A mid-century marvel",
      category: "Donor Stories",
      tags: [
        "Architecture",
        "Mid-century Design",
        "Estate Gift"
      ],
      date: "November 2023",
      sortDate: "2023-11-10",
      readTime: "2 min read",
      image: "./assets/images/mid-century-marvel.png",
      imageAlt:
        "Architect Robert Batt beside a drafting table",
      summary:
        "A 1958 K-State architect-designed house became a viral sensation and generated support for students.",
      sourceUrl:
        "https://ksufoundation.org/impact/campus-impact/a-mid-century-marvel/",
      content: `
        <p>
          Robert Batt designed the Salina home after graduating
          from K-State’s architecture programme.
        </p>

        <p>
          The proceeds from its eventual sale supported future
          architecture students.
        </p>
      `
    },

    {
      id: "saving-streambanks",
      featured: false,
      title: "Saving streambanks",
      category: "Research",
      tags: [
        "Forestry",
        "Erosion",
        "Native Nations"
      ],
      date: "November 2023",
      sortDate: "2023-11-09",
      readTime: "3 min read",
      image: "./assets/images/saving-streambanks.png",
      imageAlt: "A wooded Kansas streambank",
      summary:
        "K-State researchers and Native American tribes are testing nature-based solutions to erosion.",
      sourceUrl:
        "https://ksufoundation.org/impact/community-impact/saving-streambanks/",
      content: `
        <p>
          Researchers anchor eastern redcedar trees along
          eroding streambanks to trap sediment and support
          natural vegetation.
        </p>

        <p>
          The work includes collaboration with Potawatomi and
          Kickapoo communities.
        </p>
      `
    }
  ];

  const sortedArticles = [...articles].sort(function (firstArticle, secondArticle) {
    return new Date(secondArticle.sortDate) - new Date(firstArticle.sortDate);
  });

  const featuredArticles = sortedArticles.filter(function (article) {
    return article.featured === true;
  });

  const articleGrid = document.getElementById("article-grid");
  const resultsCount = document.getElementById("results-count");
  const noArticles = document.getElementById("no-articles");

  const featuredStage = document.getElementById("featured-stage");
  const previousButton = document.getElementById("featured-previous");
  const nextButton = document.getElementById("featured-next");

  const homeFeaturedStage = document.getElementById("home-featured-stage");
  const homePreviousButton = document.getElementById("home-featured-previous");
  const homeNextButton = document.getElementById("home-featured-next");

  const modal = document.getElementById("article-modal");
  const modalContent = document.getElementById("article-modal-content");

  let featuredIndex = 0;
  let homeFeaturedIndex = 0;
  let featuredTimer = null;
  let homeFeaturedTimer = null;
  let lastFocusedElement = null;

  const carouselDelay = 6500;

  function createArticleCard(article) {
    const card = document.createElement("article");
    card.className = "writing-card";

    card.innerHTML = `
      <button
        class="writing-card-button"
        type="button"
        aria-label="Read ${article.title}"
      >
        <span class="writing-card-image">
          <img
            src="${article.image}"
            alt="${article.imageAlt}"
            loading="lazy"
          >

          <span class="writing-card-category">
            ${article.category}
          </span>
        </span>

        <span class="writing-card-content">
          <span class="writing-card-meta">
            <span>${article.date}</span>
            <span>${article.readTime}</span>
          </span>

          <span class="writing-card-title">
            ${article.title}
          </span>

          <span class="writing-card-summary">
            ${article.summary}
          </span>

          <span class="writing-card-read">
            Read article
            <i class="bx bx-right-arrow-alt"></i>
          </span>
        </span>
      </button>
    `;

    const button = card.querySelector(".writing-card-button");

    button.addEventListener("click", function () {
      openArticle(article.id);
    });

    return card;
  }

  function renderArticles() {
    if (!articleGrid) {
      return;
    }

    articleGrid.innerHTML = "";

    sortedArticles.forEach(function (article) {
      articleGrid.appendChild(createArticleCard(article));
    });

    if (resultsCount) {
      resultsCount.textContent = `${sortedArticles.length} stories`;
    }

    if (noArticles) {
      noArticles.hidden = true;
    }
  }

  function renderFeatured() {
    if (!featuredStage || !featuredArticles.length) {
      return;
    }

    featuredIndex =
      (featuredIndex + featuredArticles.length) % featuredArticles.length;

    const article = featuredArticles[featuredIndex];
    const reverseClass = featuredIndex % 2 === 1 ? "featured-slide-reverse" : "";

    featuredStage.innerHTML = `
      <article class="featured-slide ${reverseClass}">
        <button
          class="featured-slide-image"
          type="button"
          data-open-featured="${article.id}"
          aria-label="Read ${article.title}"
        >
          <img src="${article.image}" alt="${article.imageAlt}">

          <span class="featured-slide-number">
            ${String(featuredIndex + 1).padStart(2, "0")}
          </span>
        </button>

        <div class="featured-slide-content">
          <div class="featured-slide-meta">
            <span>${article.category}</span>
            <span>${article.date}</span>
            <span>${article.readTime}</span>
          </div>

          <h3>${article.title}</h3>
          <p>${article.summary}</p>

          <button
            class="featured-read-button"
            type="button"
            data-open-featured="${article.id}"
          >
            Read story
            <i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </article>
    `;

    featuredStage.querySelectorAll("[data-open-featured]").forEach(function (button) {
      button.addEventListener("click", function () {
        openArticle(button.dataset.openFeatured);
      });
    });
  }

  function renderHomeFeatured() {
    if (!homeFeaturedStage || !featuredArticles.length) {
      return;
    }

    homeFeaturedIndex =
      (homeFeaturedIndex + featuredArticles.length) % featuredArticles.length;

    const article = featuredArticles[homeFeaturedIndex];

    homeFeaturedStage.innerHTML = `
      <article class="home-featured-card">
        <a
          class="home-featured-image"
          href="blog.html#${article.id}"
          aria-label="Read ${article.title}"
        >
          <img src="${article.image}" alt="${article.imageAlt}">
        </a>

        <div class="home-featured-content">
          <span class="featured-blog-category">${article.category}</span>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>

          <a class="featured-blog-read" href="blog.html#${article.id}">
            Read article
            <i class="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </article>
    `;
  }

  function showNextFeatured() {
    featuredIndex += 1;
    renderFeatured();
  }

  function showPreviousFeatured() {
    featuredIndex -= 1;
    renderFeatured();
  }

  function showNextHomeFeatured() {
    homeFeaturedIndex += 1;
    renderHomeFeatured();
  }

  function showPreviousHomeFeatured() {
    homeFeaturedIndex -= 1;
    renderHomeFeatured();
  }

  function stopFeaturedCarousel() {
    if (featuredTimer !== null) {
      window.clearInterval(featuredTimer);
      featuredTimer = null;
    }
  }

  function startFeaturedCarousel() {
    if (!featuredStage) {
      return;
    }

    stopFeaturedCarousel();
    featuredTimer = window.setInterval(showNextFeatured, carouselDelay);
  }

  function stopHomeCarousel() {
    if (homeFeaturedTimer !== null) {
      window.clearInterval(homeFeaturedTimer);
      homeFeaturedTimer = null;
    }
  }

  function startHomeCarousel() {
    if (!homeFeaturedStage) {
      return;
    }

    stopHomeCarousel();
    homeFeaturedTimer = window.setInterval(showNextHomeFeatured, carouselDelay);
  }

  function openArticle(articleId) {
    const article = articles.find(function (item) {
      return item.id === articleId;
    });

    if (!article) {
      return;
    }

    if (!modal || !modalContent) {
      window.location.href = `blog.html#${article.id}`;
      return;
    }

    lastFocusedElement = document.activeElement;
    stopFeaturedCarousel();

    const limitedTags = (article.tags || [])
      .slice(0, 2)
      .map(function (tag) {
        return `<span class="article-tag">${tag}</span>`;
      })
      .join("");

    modalContent.innerHTML = `
      <header class="modal-article-header">
        <div class="modal-article-meta">
          <span>${article.category}</span>
          <span>${article.date}</span>
          <span>${article.readTime}</span>
        </div>

        <h1 id="modal-title">${article.title}</h1>
        <p class="article-deck">${article.summary}</p>

        <div class="article-credit">
          Written by Lilly Majors
        </div>
      </header>

      <img
        class="article-hero-image"
        src="${article.image}"
        alt="${article.imageAlt}"
      >

      <div class="article-reader-layout">
        <div class="article-content">
          ${article.content}
        </div>

        <aside class="article-sidebar">
          <h2>Article information</h2>

          ${limitedTags ? `<div class="article-tag-list">${limitedTags}</div>` : ""}

          <p>
            Originally published by the Kansas State University Foundation.
          </p>

          <a
            class="article-source-link"
            href="${article.sourceUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View original
            <i class="bx bx-link-external"></i>
          </a>
        </aside>
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    window.history.replaceState(null, "", `#${article.id}`);

    const closeButton = modal.querySelector(".article-modal-close");

    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeArticle() {
    if (!modal) {
      return;
    }

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    window.history.replaceState(null, "", window.location.pathname);
    startFeaturedCarousel();

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  if (previousButton) {
    previousButton.addEventListener("click", function () {
      showPreviousFeatured();
      startFeaturedCarousel();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      showNextFeatured();
      startFeaturedCarousel();
    });
  }

  if (homePreviousButton) {
    homePreviousButton.addEventListener("click", function () {
      showPreviousHomeFeatured();
      startHomeCarousel();
    });
  }

  if (homeNextButton) {
    homeNextButton.addEventListener("click", function () {
      showNextHomeFeatured();
      startHomeCarousel();
    });
  }

  if (featuredStage) {
    featuredStage.addEventListener("mouseenter", stopFeaturedCarousel);
    featuredStage.addEventListener("mouseleave", startFeaturedCarousel);
    featuredStage.addEventListener("focusin", stopFeaturedCarousel);
    featuredStage.addEventListener("focusout", startFeaturedCarousel);
  }

  if (homeFeaturedStage) {
    homeFeaturedStage.addEventListener("mouseenter", stopHomeCarousel);
    homeFeaturedStage.addEventListener("mouseleave", startHomeCarousel);
    homeFeaturedStage.addEventListener("focusin", stopHomeCarousel);
    homeFeaturedStage.addEventListener("focusout", startHomeCarousel);
  }

  document.querySelectorAll("[data-close-modal]").forEach(function (element) {
    element.addEventListener("click", closeArticle);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && modal.classList.contains("open")) {
      closeArticle();
    }
  });

  renderArticles();
  renderFeatured();
  renderHomeFeatured();
  startFeaturedCarousel();
  startHomeCarousel();

  const articleFromHash = window.location.hash.replace("#", "");

  if (articleFromHash && modal && modalContent) {
    openArticle(articleFromHash);
  }
});
/* =========================================================
   HOMEPAGE FEATURED BLOG
   ========================================================= */

function initialiseHomeFeaturedBlog() {
  const homeStage =
    document.getElementById("home-featured-stage");

  const previousButton =
    document.getElementById("home-featured-previous");

  const nextButton =
    document.getElementById("home-featured-next");

  if (
    !homeStage ||
    !previousButton ||
    !nextButton ||
    !featuredArticles.length
  ) {
    return;
  }

  let homeFeaturedIndex = 0;
  let homeCarouselTimer = null;

  const homeCarouselDelay = 3000;

  function renderHomeFeatured() {
    homeFeaturedIndex =
      (
        homeFeaturedIndex +
        featuredArticles.length
      ) % featuredArticles.length;

    const article =
      featuredArticles[homeFeaturedIndex];

    homeStage.innerHTML = `
      <article class="home-featured-card">

        <a
          class="home-featured-image"
          href="blog.html#${article.id}"
          aria-label="Read ${article.title}"
        >
          <img
            src="${article.image}"
            alt="${article.imageAlt}"
          >
        </a>

        <div class="home-featured-content">

          <span class="section-label">
            ${article.category}
          </span>

          <h3>
            ${article.title}
          </h3>

          <p>
            ${article.summary}
          </p>

          <div class="home-featured-meta">
            <span>${article.date}</span>
            <span>${article.readTime}</span>
          </div>

          <a
            class="featured-blog-read"
            href="blog.html#${article.id}"
          >
            Read article
            <i class="bx bx-right-arrow-alt"></i>
          </a>

        </div>

      </article>
    `;
  }

  function showNextHomeFeatured() {
    homeFeaturedIndex += 1;
    renderHomeFeatured();
  }

  function showPreviousHomeFeatured() {
    homeFeaturedIndex -= 1;
    renderHomeFeatured();
  }

  function stopHomeCarousel() {
    if (homeCarouselTimer !== null) {
      window.clearInterval(homeCarouselTimer);
      homeCarouselTimer = null;
    }
  }

  function startHomeCarousel() {
    stopHomeCarousel();

    homeCarouselTimer =
      window.setInterval(
        showNextHomeFeatured,
        homeCarouselDelay
      );
  }

  previousButton.addEventListener(
    "click",
    function () {
      showPreviousHomeFeatured();
      startHomeCarousel();
    }
  );

  nextButton.addEventListener(
    "click",
    function () {
      showNextHomeFeatured();
      startHomeCarousel();
    }
  );

  homeStage.addEventListener(
    "mouseenter",
    stopHomeCarousel
  );

  homeStage.addEventListener(
    "mouseleave",
    startHomeCarousel
  );

  renderHomeFeatured();
  startHomeCarousel();
}

initialiseHomeFeaturedBlog();