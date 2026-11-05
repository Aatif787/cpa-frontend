export type ProjectCategory =
  | "Highways & Expressways"
  | "Aviation Infrastructure"
  | "Urban Civil & Underpasses"
  | "Corridor Operations & Maintenance";

export type ProjectStatusType = "Ongoing" | "Completed" | "Landmark";

export interface ProjectCardStat {
  label: string;
  value: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  client?: string;
  status: ProjectStatusType;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  technicalScope: string[];
  specification?: string;
  pavementType?: string;
  href: string;
  featuredOnHub?: boolean;
  stats?: ProjectCardStat[];
  projectCost?: string;
  workOrderDate?: string;
}

export const PROJECTS_DATA: ProjectRecord[] = [
  // =========================================================================
  // ONGOING PROJECTS
  // =========================================================================
  {
    id: "nh16-puintola-tangi-odisha",
    title:
      "Six/Four Laning of NH-5 (New NH 16) from Puintola to Tangi (Km. 284.00 to Km 355.00) in the state of Odisha on EPC Mode.",
    category: "Highways & Expressways",
    location: "Odisha (Km. 284.00 to Km 355.00)",
    client: "NHAI/ Punj Llyod Ltd, Gurugram",
    status: "Ongoing",
    imageUrl: "/images/projects/project1.jpg",
    imageAlt:
      "Six/Four Laning of NH-5 (New NH 16) from Puintola to Tangi in the state of Odisha on EPC Mode",
    summary:
      "Major six/four laning of NH-5 (New NH 16) from Puintola to Tangi (Km. 284.00 to Km 355.00) in the state of Odisha on EPC Mode with project cost of 438.00 Crore.",
    technicalScope: [
      "Sub-base grading and compaction across Km. 284.00 to Km 355.00",
      "Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC) highway paving",
      "Sensor paver automated grade and slope control for high-speed corridor smoothness",
      "Heavy civil roadbed stabilization, culverts, and reinforced highway drainage",
    ],
    specification: "MoRTH Section 500 / EPC Highway Specs",
    pavementType: "Six/Four Lane Bituminous EPC Corridor",
    href: "/ongoing-projects",
    featuredOnHub: true,
    projectCost: "438.00 Crore",
    workOrderDate: "04-06-2021",
    stats: [
      { label: "Project Cost", value: "438.00 Crore" },
      { label: "Work Order", value: "04-06-2021" },
      { label: "Client", value: "NHAI / Punj Lloyd" },
    ],
  },
  {
    id: "igi-airport-airside-security-structures",
    title:
      "Construction of various security Structures at Airside at IGI Airport New Delhi",
    category: "Aviation Infrastructure",
    location: "IGI Airport, New Delhi",
    client: "GMR, DIAL,IGI Airport New Delhi",
    status: "Ongoing",
    imageUrl: "/images/projects/project2.jpg",
    imageAlt:
      "Construction of various security Structures at Airside at IGI Airport New Delhi",
    summary:
      "Construction of specialized security structures and elevated observation watchtowers across the high-security Airside perimeter at Indira Gandhi International Airport.",
    technicalScope: [
      "Structural steel fabrication and erection of elevated security watch cabins",
      "High-load foundation civil works compliant with BCAS & aviation security norms",
      "Airside ground stabilization, perimeter access pedestals, and perimeter security integration",
      "Strict compliance with 24/7 active airport operational and airside security clearances",
    ],
    specification: "BCAS & DIAL Airside Construction Standards",
    pavementType: "Airside Reinforced Structural & Foundation Civil Works",
    href: "/ongoing-projects",
    featuredOnHub: true,
    workOrderDate: "07-01-2021",
    stats: [
      { label: "Work Order", value: "07-01-2021" },
      { label: "Client", value: "GMR, DIAL" },
      { label: "Zone", value: "IGI Airport Airside" },
    ],
  },
  {
    id: "igi-airport-landside-armo-road-works",
    title:
      "ARMO Contract for Road works in Landside Area at IGI Airport, New Delhi New Delhi",
    category: "Aviation Infrastructure",
    location: "IGI Airport, New Delhi",
    client: "GMR, DIAL,IGI Airport New Delhi.",
    status: "Ongoing",
    imageUrl: "/images/projects/project3.jpg",
    imageAlt:
      "ARMO Contract for Road works in Landside Area at IGI Airport, New Delhi New Delhi",
    summary:
      "Annual Repair and Maintenance Operations (ARMO) contract for terminal road networks, approach corridors, and circulation highways at IGI Airport New Delhi.",
    technicalScope: [
      "Milling of distressed asphalt surfaces and high-performance bituminous resurfacing",
      "Round-the-clock traffic management on high-density airport passenger circulation routes",
      "Precision sensor paving and rapid compaction using company-owned heavy tandem rollers",
      "Night-shift execution minimizing passenger disruptions across airport terminal roads",
    ],
    specification: "Aviation Landside Highway & Pavement Standards",
    pavementType: "Heavy-Duty Bituminous Resurfacing",
    href: "/ongoing-projects",
    featuredOnHub: true,
    workOrderDate: "07-01-2021",
    stats: [
      { label: "Work Order", value: "07-01-2021" },
      { label: "Client", value: "GMR, DIAL" },
      { label: "Zone", value: "IGI Airport Landside" },
    ],
  },
  {
    id: "igi-airport-road-marking-furniture",
    title:
      "Annual rate contract of Road Marking Road furniture work in Land Site Area of T1,T2 and T3 of IGI Airport, New Delhi",
    category: "Aviation Infrastructure",
    location: "IGI Airport (T1, T2, T3), New Delhi",
    client: "GMR, DIAL,IGI Airport New Delhi",
    status: "Ongoing",
    imageUrl: "/images/projects/igi-terminal-furniture.jpg",
    imageAlt:
      "Annual rate contract of Road Marking Road furniture work in Land Site Area of T1,T2 and T3 of IGI Airport, New Delhi",
    summary:
      "Annual rate contract delivering specialized thermoplastic road marking, reflective road furniture, retro-reflective signages, and pedestrian zebra crossings across Terminal 1, Terminal 2, and Terminal 3 landside areas at IGI Airport.",
    technicalScope: [
      "Hot-applied retro-reflective thermoplastic road markings with glass bead reflectivity",
      "Pedestrian crossings, rumble strips, and traffic lane delineators across T1, T2 & T3",
      "Road furniture installation, crash barriers, bollards, and directional overhead signages",
      "24/7 round-the-clock maintenance on high-density airport passenger terminal approaches",
    ],
    specification: "MoRTH Section 800 & Airport Landside Standards",
    pavementType: "Thermoplastic Marking & Road Furniture",
    href: "/ongoing-projects",
    featuredOnHub: true,
    workOrderDate: "14-12-2021",
    stats: [
      { label: "Work Order", value: "14-12-2021" },
      { label: "Client", value: "GMR, DIAL" },
      { label: "Terminals", value: "T1, T2 & T3" },
    ],
  },
  {
    id: "pankha-road-janakpuri-strengthening",
    title:
      "Strengthening of Pankha Road Bhagwan Mahavir Mandir Marg (KaliMata Mandir To Dabri Flyover) and Shani Bazar Road (Shri Radha Krishna Thakur Marg (ID-1160) from Vidya Marg to Dabri road Janakpuri under Division WR-1, Janakpuri,New Delhi",
    category: "Urban Civil & Underpasses",
    location: "Janakpuri, New Delhi",
    client: "PWD, Delhi",
    status: "Ongoing",
    imageUrl: "/images/projects/janakpuri-under-division.jpg",
    imageAlt:
      "Strengthening of Pankha Road Bhagwan Mahavir Mandir Marg and Shani Bazar Road Janakpuri under Division WR-1, New Delhi",
    summary:
      "Road pavement strengthening, bituminous overlay resurfacing, and corridor upgrades on Pankha Road from KaliMata Mandir to Dabri Flyover and Shani Bazar Road under Division WR-1, Janakpuri, New Delhi.",
    technicalScope: [
      "Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC) resurfacing",
      "Milling of distressed urban pavements and mechanical profile correction",
      "Sensor paver automated screed leveling across major arterial traffic routes",
      "Upgradation of central verge, drainage kerbs, and road shoulder transitions",
    ],
    specification: "Delhi PWD & MoRTH Urban Highway Specifications",
    pavementType: "Dense Bituminous Asphalt Pavement",
    href: "/ongoing-projects",
    featuredOnHub: true,
    workOrderDate: "26-05-2020",
    stats: [
      { label: "Work Order", value: "26-05-2020" },
      { label: "Client", value: "PWD, Delhi" },
      { label: "Division", value: "WR-1 Janakpuri" },
    ],
  },
  {
    id: "south-west-road-division-comprehensive-maintenance",
    title:
      "Comprehensive Maintenance various road under South west Road Division-- 2 PWD, New Delhi (SH: Civil works cleaning of Roads including carriage way, Footpaths, Central Verge, Service Road etc. within the right way)",
    category: "Corridor Operations & Maintenance",
    location: "South West Road Division-- 2, New Delhi",
    client: "PWD, Delhi",
    status: "Ongoing",
    imageUrl: "/images/projects/project4.jpg",
    imageAlt:
      "Comprehensive Maintenance various road under South west Road Division-- 2 PWD, New Delhi",
    summary:
      "Comprehensive maintenance operations for various roads under South West Road Division-2 PWD, New Delhi, encompassing carriage way rehabilitation, footpath paving, central verge restoration, and service road cleaning within the right-of-way.",
    technicalScope: [
      "Carriageway asphalt repairs, pothole patching, and routine bituminous resurfacing",
      "Interlocking concrete paver block repairs for pedestrian walkways and footpaths",
      "Restoration and maintenance of central verge median barriers and service roads",
      "Continuous heavy roller compaction and automated mechanized road sweeping operations",
    ],
    specification: "PWD Delhi Comprehensive Maintenance Standards",
    pavementType: "Civil Maintenance, Pavement & Footpaths",
    href: "/ongoing-projects",
    featuredOnHub: true,
    workOrderDate: "14-02-2020",
    stats: [
      { label: "Work Order", value: "14-02-2020" },
      { label: "Client", value: "PWD, Delhi" },
      { label: "Division", value: "South West Division-2" },
    ],
  },
  {
    id: "pankha-road-swr2-strengthening",
    title:
      "Strengthening of roads of pankha road (ID 1155) underPWD,SWR-II Division New Delhi .B Strengthening of roads of Pt. Vishnu Dutt Marg (ID 1224) and Connecting road (ID 1225) at Janak Puri under PWD SWR-II division New Delhi. Strengthening of Palam Dabri Road",
    category: "Urban Civil & Underpasses",
    location: "Janak Puri, New Delhi",
    client: "PWD, Delhi",
    status: "Ongoing",
    imageUrl: "/images/projects/pankha-swr2-roller.jpg",
    imageAlt:
      "Strengthening of roads of pankha road under PWD SWR-II Division New Delhi",
    summary:
      "Comprehensive road strengthening, pavement resurfacing, and corridor rehabilitation on Pankha Road (ID 1155), Pt. Vishnu Dutt Marg (ID 1224), Connecting Road (ID 1225), and Palam Dabri Road under PWD SWR-II Division, Janak Puri, New Delhi.",
    technicalScope: [
      "Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC) resurfacing",
      "Milling and profile leveling across major Janak Puri and Palam Dabri traffic arteries",
      "Automated sensor paver roadway surfacing maintaining strict MoRTH smoothness",
      "Kerbstone alignment, storm-water drainage integration, and central verge restoration",
    ],
    specification: "Delhi PWD & MoRTH Road Strengthening Standards",
    pavementType: "Dense Asphalt Concrete Pavement",
    href: "/ongoing-projects",
    featuredOnHub: true,
    workOrderDate: "09-01-2020",
    stats: [
      { label: "Work Order", value: "09-01-2020" },
      { label: "Client", value: "PWD, Delhi" },
      { label: "Division", value: "SWR-II Janak Puri" },
    ],
  },
  {
    id: "nh-widening-north",
    title: "National Highway Widening & Bituminous Overlay",
    category: "Highways & Expressways",
    location: "Northern Regional Corridors",
    client: "Public Works Department",
    status: "Ongoing",
    imageUrl: "/images/projects/key-pro-1.jpg",
    imageAlt: "Electronic sensor paver laying bituminous concrete on highway corridor",
    summary:
      "Multi-lane highway widening, strong foundation work, and smooth asphalt paving built to official MoRTH highway standards.",
    technicalScope: [
      "Dense asphalt base and smooth top driving layer (DBM and BC)",
      "Smooth, level road paving using electronic sensor pavers",
      "Roadside drainage culverts and reinforced road shoulders",
      "Strict temperature checks and stone testing as per highway standards",
    ],
    specification: "MoRTH Section 500",
    pavementType: "Flexible Bituminous",
    href: "/ongoing-projects",
    featuredOnHub: true,
    stats: [
      { label: "Specification", value: "MoRTH Sec 500" },
      { label: "Pavement", value: "DBM & BC Overlays" },
    ],
  },
  {
    id: "highway-expansion-sensor",
    title: "Highway Expansion & Sensor Paver Operations",
    category: "Highways & Expressways",
    location: "Regional Highway Division",
    client: "State Infrastructure Authority",
    status: "Ongoing",
    imageUrl: "/images/projects/key-pro-2.jpg",
    imageAlt: "Highway asphalt paving machinery in active operation",
    summary:
      "Highway road paving using electronic sensor pavers to ensure a smooth, durable driving surface.",
    technicalScope: [
      "Foundation compaction and Wet Mix Macadam (WMM) base laying",
      "Sensor paver road laying with automatic slope and level control",
      "Heavy roller compaction to achieve high asphalt density",
    ],
    specification: "IRC:111 / MoRTH",
    pavementType: "Dense Asphalt Mat",
    href: "/ongoing-projects",
    stats: [
      { label: "Technology", value: "Sensor Paver" },
      { label: "Scope", value: "WMM & Surface Mat" },
    ],
  },
  {
    id: "arterial-subbase-pavement",
    title: "Arterial Highway Sub-Base & Bituminous Pavement",
    category: "Highways & Expressways",
    location: "Arterial Road Network",
    client: "Public Works Department",
    status: "Ongoing",
    imageUrl: "/images/projects/key-pro-3.jpg",
    imageAlt: "Heavy compaction rollers on arterial roadway corridor",
    summary:
      "Strong road foundation and heavy-duty asphalt paving built to handle heavy commercial trucks.",
    technicalScope: [
      "Stone sub-base grading and strong roller compaction",
      "Automated bitumen tack coat spraying for strong layer bonding",
      "On-site core drilling and laboratory density testing",
    ],
    specification: "MoRTH Section 400 & 500",
    pavementType: "Asphalt Concrete",
    href: "/ongoing-projects",
    stats: [
      { label: "Scope", value: "Sub-Base & Paving" },
      { label: "Testing", value: "Core Density Tests" },
    ],
  },
  {
    id: "corridor-surface-course",
    title: "Heavy Highway Corridor Widening & Surface Course",
    category: "Highways & Expressways",
    location: "National Highway Division",
    client: "Road Construction Authority",
    status: "Ongoing",
    imageUrl: "/images/projects/key-pro-4.jpg",
    imageAlt: "Asphalt concrete overlay on national corridor stretch",
    summary:
      "Road widening project including complete asphalt resurfacing, central divider barriers, and storm water drains.",
    technicalScope: [
      "Road widening from 2 to 4 lanes",
      "Durable, high-stability asphalt top layer",
      "Bright reflective lane markings and road signs",
    ],
    specification: "IRC Specifications",
    pavementType: "Bituminous Concrete",
    href: "/ongoing-projects",
    stats: [
      { label: "Scope", value: "Multi-Lane Widening" },
      { label: "Safety", value: "Reflective Markings" },
    ],
  },

  // =========================================================================
  // EXECUTED PROJECTS
  // =========================================================================
  {
    id: "janakpuri-underpass",
    title: "Janakpuri Underpass Approaches & Arterial Carriageway",
    category: "Urban Civil & Underpasses",
    location: "Janakpuri, National Capital Region (Delhi)",
    client: "Municipal Corporation / PWD Delhi",
    status: "Completed",
    imageUrl: "/images/projects/janakpuri-under-division.jpg",
    imageAlt: "Completed urban underpass carriageway and civil infrastructure",
    summary:
      "Underpass approach roads, heavy-duty asphalt surfaces, and storm water drainage built safely in heavy city traffic.",
    technicalScope: [
      "Strong concrete retaining walls and underpass base",
      "Heavy-duty asphalt pavement built for heavy city buses",
      "Deep storm water drainage channels to prevent waterlogging",
      "Safe traffic diversions and barricades to keep public traffic moving",
    ],
    specification: "CPWD / MoRTH Standards",
    pavementType: "Urban Arterial Carriageway",
    href: "/executed-projects",
    featuredOnHub: true,
    stats: [
      { label: "Civil Scope", value: "Carriageway & Drainage" },
      { label: "Delivery", value: "Completed & Handed Over" },
    ],
  },
  {
    id: "urban-grade-separator",
    title: "Urban Grade Separator & Arterial Link Roadway",
    category: "Urban Civil & Underpasses",
    location: "National Capital Region",
    client: "Municipal Civil Division",
    status: "Completed",
    imageUrl: "/images/projects/key-pro-12.jpg",
    imageAlt: "Completed municipal grade separator and road division",
    summary:
      "Road junction upgrades, flyover approaches, and roadside drainage built and handed over to municipal authorities.",
    technicalScope: [
      "Dense asphalt base with durable top driving surface",
      "Precast concrete kerbs and central median dividers",
      "Storm water drain lines and utility crossings",
    ],
    specification: "Municipal Civil Specifications",
    pavementType: "Dense Bituminous",
    href: "/executed-projects",
    stats: [
      { label: "Classification", value: "Flyover Approach" },
      { label: "Handover", value: "Approved & Handed Over" },
    ],
  },
  {
    id: "municipal-road-drainage",
    title: "Municipal Road Infrastructure & Storm Drainage",
    category: "Urban Civil & Underpasses",
    location: "Regional Municipal Division",
    client: "Urban Local Authority",
    status: "Completed",
    imageUrl: "/images/projects/key-pro-13.jpg",
    imageAlt: "Completed urban municipal roadway and drainage civil works",
    summary:
      "Rebuilding key city roads, installing concrete box drains, and laying smooth, anti-skid asphalt.",
    technicalScope: [
      "Full-depth asphalt road rebuilding in busy city sectors",
      "Concrete box drains and roadside channels",
      "Road safety signs, pedestrian zebra crossings, and kerb painting",
    ],
    specification: "State PWD / MCD Codes",
    pavementType: "Flexible Asphalt",
    href: "/executed-projects",
    stats: [
      { label: "Infrastructure", value: "Roads & Culverts" },
      { label: "Standard", value: "MCD Class-1" },
    ],
  },
  {
    id: "highway-carriageway-overlay",
    title: "Highway Carriageway Overlay & Surface Dressing",
    category: "Highways & Expressways",
    location: "Northern Regional Highway",
    client: "State Highway Authority",
    status: "Completed",
    imageUrl: "/images/projects/key-pro-14.jpg",
    imageAlt: "Finished national highway corridor with clear road markings",
    summary:
      "Road resurfacing, high-grip asphalt overlay, and steel crash barriers on a busy inter-district route.",
    technicalScope: [
      "Milling of old road surface to an even level",
      "Application of smooth, long-lasting polymer asphalt overlay",
      "W-beam steel crash barriers and clear road markings",
    ],
    specification: "IRC Guidelines",
    pavementType: "Polymer-Modified Asphalt",
    href: "/executed-projects",
    stats: [
      { label: "Pavement Renewal", value: "Smooth Surface Overlay" },
      { label: "Safety", value: "W-Beam Barriers" },
    ],
  },
  {
    id: "urban-corridor-strengthening",
    title: "Urban Civil Corridor & Pavement Strengthening",
    category: "Urban Civil & Underpasses",
    location: "Metropolitan Civil Zone",
    client: "Public Works Department",
    status: "Completed",
    imageUrl: "/images/projects/project5.jpg",
    imageAlt: "Urban road paving and completed asphalt surface",
    summary:
      "Road strengthening, improved foundation drainage, and high-quality asphalt paving on busy delivery routes.",
    technicalScope: [
      "Road foundation repairs and fresh asphalt concrete resurfacing",
      "Pedestrian walkways, concrete interlocking paver blocks, and kerbs",
      "Smoothness testing to ensure a bump-free ride",
    ],
    specification: "MoRTH & Municipal Norms",
    pavementType: "Asphalt Concrete",
    href: "/executed-projects",
    stats: [
      { label: "Scope", value: "Pavement & Footpaths" },
      { label: "Quality", value: "Smoothness Tested" },
    ],
  },

  // =========================================================================
  // MAJOR LANDMARK PROJECTS
  // =========================================================================
  {
    id: "igi-airport-delhi",
    title: "Indira Gandhi International Airport Runway Overlays & Airside Works",
    category: "Aviation Infrastructure",
    location: "New Delhi, India",
    client: "Delhi International Airport Limited (DIAL) / GMR Group",
    status: "Landmark",
    imageUrl: "/images/projects/gmr1.jpg",
    imageAlt: "Airport runway pavement works at Delhi Airport",
    summary:
      "Runway milling, smooth anti-skid asphalt paving, and taxiway civil work completed during scheduled night closures.",
    technicalScope: [
      "Runway and taxiway pavement milling with millimeter precision",
      "High-grip asphalt paving completed within tight 4 to 6-hour night shifts",
      "Strict runway cleanliness with zero loose debris left on site",
      "Runway safety meeting official DGCA and ICAO aviation standards",
    ],
    specification: "ICAO / DGCA / DIAL Specifications",
    pavementType: "Aviation Friction Course",
    href: "/major-projects",
    featuredOnHub: true,
    stats: [
      { label: "Pavement Scope", value: "Runway Surface Course" },
      { label: "Work Shift", value: "Night Closures" },
    ],
  },
  {
    id: "igi-taxiway-apron",
    title: "IGI Airport Taxiway & Apron Pavement Rehabilitation",
    category: "Aviation Infrastructure",
    location: "New Delhi, India",
    client: "DIAL / Aviation Authorities",
    status: "Landmark",
    imageUrl: "/images/projects/gmr2.jpg",
    imageAlt: "Airport taxiway and apron paving works at Delhi International Airport",
    summary:
      "Resurfacing airplane parking bays, repairing taxiways, and applying protective seal coats built for heavy aircraft.",
    technicalScope: [
      "Repairing aircraft parking bays built for heavy wheel loads",
      "Joint sealing and protective asphalt coating for long runway life",
      "Fast equipment removal and site clearance before morning flights start",
    ],
    specification: "Aviation Pavement Norms",
    pavementType: "Heavy-Duty Airfield Surface",
    href: "/major-projects",
    stats: [
      { label: "Operational Zone", value: "Taxiways & Aprons" },
      { label: "Safety", value: "Zero Debris Policy" },
    ],
  },
  {
    id: "nh-16-puintola-tangi",
    title: "National Highway 16 Widening & Pavement Strengthening",
    category: "Highways & Expressways",
    location: "Odisha, India",
    client: "National Highways Authority of India (NHAI) / Consortium",
    status: "Landmark",
    imageUrl: "/images/projects/highway1.jpg",
    imageAlt: "NH-16 national highway corridor widening and asphalt pavement",
    summary:
      "Four-lane highway construction, foundation work, and asphalt paving on the NH-16 Puintola–Tangi corridor.",
    technicalScope: [
      "Four-lane highway construction while managing live highway traffic",
      "Granular foundation, Wet Mix Macadam, and dense asphalt layers",
      "Smooth top asphalt layer with roadside storm water drains",
      "Steel crash barriers and reflective highway signs",
    ],
    specification: "MoRTH Section 500 / NHAI",
    pavementType: "Multi-Lane Flexible Highway",
    href: "/major-projects",
    featuredOnHub: true,
    stats: [
      { label: "Corridor", value: "NH-16 Puintola–Tangi" },
      { label: "Execution", value: "4-Laning & DBM/BC" },
    ],
  },
  {
    id: "delhi-gurugram-nh8",
    title: "Delhi–Gurugram Expressway (NH-8) Pavement Rehabilitation",
    category: "Corridor Operations & Maintenance",
    location: "Delhi NCR – Haryana, India",
    client: "Highway Corridor Authority / Toll Concessionaire",
    status: "Landmark",
    imageUrl: "/images/projects/highway2.jpg",
    imageAlt: "High-density Delhi-Gurugram highway corridor paving",
    summary:
      "Road repairs, night-time surface milling, micro-surfacing, and smooth asphalt paving on one of India's busiest expressways.",
    technicalScope: [
      "Night-time road milling and asphalt paving while managing busy traffic",
      "Micro-surfacing to prevent skidding and protect the road surface",
      "Pothole repairs, joint sealing, and road edge stabilization",
      "Safe traffic management designed for high vehicle volume",
    ],
    specification: "IRC Pavement Maintenance Guidelines",
    pavementType: "High-Traffic Asphalt & Micro-Surfacing",
    href: "/major-projects",
    featuredOnHub: true,
    stats: [
      { label: "Corridor", value: "Delhi–Gurugram NH-8" },
      { label: "Work Time", value: "Night-Time Milling & Paving" },
    ],
  },
  {
    id: "nh-544-thrissur-edappally",
    title: "NH-544 Heavy Corridor Resurfacing (Thrissur–Edappally)",
    category: "Highways & Expressways",
    location: "Kerala, India",
    client: "National Highways Division",
    status: "Landmark",
    imageUrl: "/images/projects/banner1.jpg",
    imageAlt: "NH-544 national highway corridor paving in rolling terrain",
    summary:
      "Four-lane road widening, smooth asphalt overlay, roadside drains, and safety barriers built to withstand heavy monsoon rains.",
    technicalScope: [
      "Rain-resistant asphalt surface using specialized polymer binder",
      "Underground road drains and slope protection against water buildup",
      "Central divider repairs and bright reflective lane markings",
      "Smooth riding surface across hilly terrain",
    ],
    specification: "MoRTH Heavy Rainfall Pavement Specs",
    pavementType: "Monsoon-Resilient Asphalt",
    href: "/major-projects",
    stats: [
      { label: "Corridor", value: "NH-544 Kerala" },
      { label: "Engineering", value: "Rain-Resistant Design" },
    ],
  },
];

// Helper query selectors
export function getFeaturedHubProjects(): ProjectRecord[] {
  return PROJECTS_DATA.filter((p) => p.featuredOnHub);
}

export function getOngoingProjects(): ProjectRecord[] {
  return PROJECTS_DATA.filter((p) => p.status === "Ongoing");
}

export function getExecutedProjects(): ProjectRecord[] {
  return PROJECTS_DATA.filter((p) => p.status === "Completed");
}

export function getMajorProjects(): ProjectRecord[] {
  return PROJECTS_DATA.filter((p) => p.status === "Landmark");
}

export function getProjectById(id: string): ProjectRecord | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}

// =========================================================================
// DOCUMENTED WORK ORDERS & CONTRACT SCHEDULE (EXACT FROM REFERENCE SLIDE)
// =========================================================================
export interface WorkOrderScheduleItem {
  sNo: number;
  principal: string;
  workOrderRef: string;
  description: string;
  value: string;
  numericValue: number;
}

export const WORK_ORDER_SCHEDULE: WorkOrderScheduleItem[] = [
  {
    sNo: 1,
    principal: "NHAI/ Punj Lloyd Ltd. Gurugram",
    workOrderRef: "LOA Dt. 04.06.2018",
    description: "Six/Four Laning of NH-5 (New NH 16) from Puintola to Tangi (Km. 284.00 to Km 355.00) in the state of Odisha on EPC Mode.",
    value: "4,38,27,76,000",
    numericValue: 4382776000,
  },
  {
    sNo: 2,
    principal: "Millennium City Expressways Pvt.Ltd.",
    workOrderRef: "MCEPL/CPA/ 03-21/56 dated 08.03.2021",
    description: "Conversion of Delhi-Gurgaon Section of National Highway-8 from Km.14.3 to Km.42 into an access control 8/6 Lane Highway from Rao Tula Ram Marg junction(Km 14/300) to Narsinghpur (Km 42/000) on BOT basis - Workorder for major maintenance work including laying of BC & DBM work on MCW and BC on Service road from Km 14.300 to 42.000 LHS (Delhi to Jaipur side) along the project highway of NH-8 as lump-sum Contract-reg.",
    value: "95,57,03,705",
    numericValue: 955703705,
  },
  {
    sNo: 3,
    principal: "Millennium City Expressways Pvt.Ltd.",
    workOrderRef: "MCEPL/CPA/ 12-20/52",
    description: "Conversion of Delhi-Gurgaon Section of National Highway-8 from Km. 14.3 to Km.42 into an access control 8/6 Lane Expressway on BOT basis",
    value: "40,00,14,043",
    numericValue: 400014043,
  },
  {
    sNo: 4,
    principal: "Bharat Road Network Ltd",
    workOrderRef: "WO/BRNL/HO/ O&M/03 dated 04.06.2021",
    description: "Work order for major maintenance works between Thrissur to Edapally section of NH 544 in the state of Kerala",
    value: "50,07,00,000",
    numericValue: 500700000,
  },
  {
    sNo: 5,
    principal: "Yamuna International Airport Pvt.Ltd.",
    workOrderRef: "PO No.YIAPL/ 2021-22/034 Dated 02/09/2021",
    description: "Cleaning and Grubbing work & Supply and Installation of Precast Boundry Wall System at Noida International Airport.",
    value: "11,21,79,650",
    numericValue: 112179650,
  },
  {
    sNo: 6,
    principal: "PWD",
    workOrderRef: "NIT No.41/EE/ PWD/WR 1/2019-20",
    description: "Strengthening of Pankha Road Bhagwan Mahavir Mandir Marg (KaliMata Mandir To Dabri Flyover) and Shani Bazar Road (Shri Radha Krishna Thakur Marg (ID-1160) from Vidya Marg to Dabri road Janakpuri under Division WR-1, Janakpuri, New Delhi",
    value: "2,66,29,697",
    numericValue: 26629697,
  },
  {
    sNo: 7,
    principal: "GMR, DIAL, IGI Airport New Delhi",
    workOrderRef: "PO No.5000012166 dated 02.03.2021",
    description: "Civil work for construction of Airside access road along with Associate Utilities (Drain, Street, Lights) for Development of GSE workshop near Fire station No.3 at IGI Airport New Delhi",
    value: "1,11,95,366",
    numericValue: 11195366,
  },
  {
    sNo: 8,
    principal: "PWD",
    workOrderRef: "NIT No. 71/EE/SWR-1/ PWD/2020-21 dated 08.02.2021",
    description: "Road Restoration of Vandemataram marg from Opp.CPRH to shankar chowk dug by DTL Under PWD Division South west road-I during 2020-21 under sub division-IV",
    value: "21,54,679",
    numericValue: 2154679,
  },
  {
    sNo: 9,
    principal: "PWD",
    workOrderRef: "NIT No. 72/EE/SWR-1/ PWD/2020-21 dated 08.02.2021",
    description: "Road Restoration of Various road cut by delhi transco limited from R.K.Puram Sector-2 to Starting ring road near shani mandir on Africa Avenue Marg under PWD Division South west Road-I during 2020-21 under sub division-II.",
    value: "21,48,633",
    numericValue: 2148633,
  },
  {
    sNo: 10,
    principal: "PWD",
    workOrderRef: "NIT No. 73/EE/SWR-1/ PWD/2020-21 dated 08.02.2021",
    description: "Road Restoration of Various road cut by delhi transco limited from Directorate general of NDRFCD to R.K.Puram Bus Stop 1 and 4 and Ravidass Dharmsasthan to DTC Bus Stop R.K Puram sector 1 and 4 and Directorate General of NDRFCD to Ring Road Near IOCL Petrol Pump and Shani Mandir under PWD Division South west Road-I during 2020-21 under sub division-II.",
    value: "34,39,919",
    numericValue: 3439919,
  },
  {
    sNo: 11,
    principal: "PWD",
    workOrderRef: "NIT No. 74/EE/SWR-1/ PWD/2020-21 dated 08.02.2021",
    description: "Road Restoration of Various road cut by delhi transco limited for Laying of 220 KV D/C Under Ground XLPE From Venkateshwara Mandir to DTC Bus Stop R.K.Puram Sector-2 under PWD Division South west Road-I during 2020-21 under sub division-II",
    value: "25,52,373",
    numericValue: 2552373,
  },
  {
    sNo: 12,
    principal: "GMR, DIAL, IGI Airport New Delhi",
    workOrderRef: "PO NO. 5000065121 Dt.07.01.2021",
    description: "ARMO Contract for Road works in Landside Area at IGI Airport, New Delhi New Delhi",
    value: "36,52,128",
    numericValue: 3652128,
  },
  {
    sNo: 13,
    principal: "PWD",
    workOrderRef: "NIT No. 70/EE/SWR-1/ PWD/2020-21 dated 08.02.2021",
    description: "Road Restoration of Vandemataram marg from dyal chowk to shanker chowk (LHS) dug by ECIL for laying OFC cable for delhi police CCTV project Under PWD Division South west road-I during 2020-21 under sub division-IV",
    value: "32,24,405",
    numericValue: 3224405,
  },
  {
    sNo: 14,
    principal: "GMR, DIAL, IGI Airport New Delhi",
    workOrderRef: "PO No.5200066774-1 Dated 09.07.2021",
    description: "T2-BMA Surface repair works at IGI Airport, New Delhi",
    value: "18,05,180",
    numericValue: 1805180,
  },
  {
    sNo: 15,
    principal: "GMR, DIAL, IGI Airport New Delhi",
    workOrderRef: "PO NO. 5000012045-1 Dt. 07.01.2021",
    description: "Construction of various security Structures at Airside at IGI Airport New Delhi",
    value: "65,23,815",
    numericValue: 6523815,
  },
  {
    sNo: 16,
    principal: "GMR, DIAL, IGI Airport New Delhi",
    workOrderRef: "PO NO. 5000064933 Dt.14.12.2020",
    description: "Annual rate contract of Road Marking Road furniture work in Land Site Area of T1, T2 and T3 of IGI Airport, New Delhi",
    value: "14,94,470",
    numericValue: 1494470,
  },
];

export const TOTAL_WORK_ORDER_VALUE = "6,41,81,94,863.00";

export const WORK_ORDER_SCHEDULE_PART_1: WorkOrderScheduleItem[] = WORK_ORDER_SCHEDULE.filter(
  (item) => item.sNo <= 11
);

export const WORK_ORDER_SCHEDULE_PART_2: WorkOrderScheduleItem[] = WORK_ORDER_SCHEDULE.filter(
  (item) => item.sNo > 11
);

export interface KeyExecutedProject {
  title: string;
  image: string;
  alt: string;
  projectCost: string;
  workOrderDate: string;
  client: string;
}

export const KEY_EXECUTED_PROJECTS: KeyExecutedProject[] = [
  // =========================================================================
  // SLIDE 1
  // =========================================================================
  {
    title:
      "Construction of Six/Four Laning of NH-5 (New NH-16) from Puintola to Tangi (Km. 284.000 to 355.000) in the state of Odisha on EPC Mode.",
    image: "/images/projects/executed-cert-nhai-hd.jpg",
    alt: "NHAI Completion Certificate - Six/Four Laning of NH-5 (New NH-16) from Puintola to Tangi, Odisha on EPC Mode",
    projectCost: "100.67 Crore",
    workOrderDate: "2021",
    client: "National Highway Authority Of India",
  },
  {
    title:
      "Annual Contracts for Construction /Reconstruction / Resurfacing of Runway/Taxiways /Aprons and Pheripheral Roads Including Rigid/Flexible Road and Drainage Structure of Box Culverts , Pipe Culverts, RCC Drains in The Area of Delhi International Airport 2016–2019.",
    image: "/images/projects/executed-cert-dial-hd.jpg",
    alt: "DIAL / GMR Completion Certificate - Annual Contracts for Runway, Taxiways, Aprons & Peripheral Roads at Delhi International Airport",
    projectCost: "47.42 Crore",
    workOrderDate: "2019",
    client: "Delhi International Airport Limited / GMR",
  },
  {
    title: "",
    image: "/images/projects/executed-cert-vijay-nirman-hd.jpg",
    alt: "Performance Certificate - Vijay Nirman Company Pvt. Ltd. & Delhi International Airport Limited / GMR",
    projectCost: "25.66 Crore,\n47.42 Crore",
    workOrderDate: "2018,\n2019",
    client: "Vijay Nirman Company Pvt. Ltd. ,\nDelhi International Airport Limited / GMR.",
  },

  // =========================================================================
  // SLIDE 2
  // =========================================================================
  {
    title:
      "Strengthening of Najafgarh Road ( Shivaji Marg) From Raja Garden to Zakhira.",
    image: "/images/projects/executed-cert-pwd-najafgarh-hd.jpg",
    alt: "PWD Delhi Certificate - Strengthening of Najafgarh Road (Shivaji Marg) From Raja Garden to Zakhira",
    projectCost: "21.85 Crore",
    workOrderDate: "2013",
    client: "PWD Delhi",
  },
  {
    title: "",
    image: "/images/projects/executed-cert-vijay-nirman-hd.jpg",
    alt: "Performance Certificate - Vijay Nirman Company Pvt. Ltd. & Delhi International Airport Limited / GMR",
    projectCost: "25.66 Crore,\n47.42 Crore",
    workOrderDate: "2018,\n2019",
    client: "Vijay Nirman Company Pvt. Ltd.,\nDelhi International Airport Limited / GMR.",
  },
  {
    title:
      "Strengthning of the existing 2 lanes carrigeaway , constructing additional 4 lanes , service road, footpath, drainage , X drainage works, fixing kerb stone constructing culverts etc. at Dwarka project Phase-1 , Group-I New Delhi.",
    image: "/images/projects/executed-cert-unitech-hd.jpg",
    alt: "Unitech Ltd. Certificate - Strengthening and Construction of Carriageway at Dwarka Project Phase-1, New Delhi",
    projectCost: "27.13 Crore",
    workOrderDate: "2004",
    client: "Unitech Ltd.",
  },

  // =========================================================================
  // SLIDE 3
  // =========================================================================
  {
    title:
      "C/O proposed Link road from NH-8 through Southern Boundry of Airport Authority. SH: Construction of road, footpath, S.W. Drian (Harvesting system ), Bridge Abutments and Approach of R.U.B.",
    image: "/images/projects/executed-cert-valecha-hd.jpg",
    alt: "Valecha Engineering Ltd. Certificate - Proposed Link Road from NH-8 through Southern Boundary of Airport Authority",
    projectCost: "18.73 Crore",
    workOrderDate: "2006",
    client: "Valecha Engineering Ltd.",
  },
  {
    title:
      '"Widening and Upgradation of Road –from Karbala Junction to Amer Road Junction on Delhi Bypass Road, Jaipur (Package No. JAI/ST/05).',
    image: "/images/projects/executed-amer-road-jaipur-hd.jpg",
    alt: "Widening and Upgradation of Road from Karbala Junction to Amer Road Junction on Delhi Bypass Road, Jaipur",
    projectCost: "11.70 Crore",
    workOrderDate: "2007",
    client: "RUIDP/ Valecha Engineering Ltd.",
  },
  {
    title:
      "Development of parking lot for DTC for Commonwealth Games, Near IP Station at Ring Road, New Delhi",
    image: "/images/projects/executed-dtc-commonwealth-hd.jpg",
    alt: "Development of parking lot for DTC for Commonwealth Games, Near IP Station at Ring Road, New Delhi",
    projectCost: "8.83 Crore",
    workOrderDate: "2011",
    client: "PWD Govt. of Delhi",
  },

  // =========================================================================
  // SLIDE 4
  // =========================================================================
  {
    title:
      'Strengthening of road no. 25 (Dev Prakash Shastri Marg) from T junction Loha Mandi to "R" Block New rajinder Nagar, New Delhi.',
    image: "/images/projects/executed-karol-bagh-hd.jpg",
    alt: "Strengthening of road no. 25 (Dev Prakash Shastri Marg) from T junction Loha Mandi to R Block New Rajinder Nagar, New Delhi",
    projectCost: "6.5 Crore",
    workOrderDate: "2011",
    client: "PWD Govt. of Delhi",
  },
  {
    title:
      "Strengthening of Road No. 17 (Nelson Mandela Marg) from T point Baba Gang Nath Marg to T point Mehroli-Mahipalpur Road & Mathura Road to Bhogal ROB to Neela Gumbad, New Delhi.",
    image: "/images/projects/executed-nelson-mandela-hd.jpg",
    alt: "Strengthening of Road No. 17 (Nelson Mandela Marg) from T point Baba Gang Nath Marg to Mehroli-Mahipalpur Road & Mathura Road, New Delhi",
    projectCost: "12.81 Crore",
    workOrderDate: "2010",
    client: "PWD Govt. of Delhi / K.R. Anand",
  },
  {
    title:
      "Street Scraping, work at and adjoining Lodhi road for Common Wealth Games 2010-2011.",
    image: "/images/projects/executed-lodhi-road-hd.jpg",
    alt: "Street Scraping, work at and adjoining Lodhi road for Commonwealth Games 2010-2011",
    projectCost: "11.00 Crore",
    workOrderDate: "2011",
    client: "MCD/ M/s MBL Infrastructure Ltd.",
  },

  // =========================================================================
  // SLIDE 5
  // =========================================================================
  {
    title:
      "Bituminous work at Jawaharlal Nehru Stadium parking area.",
    image: "/images/projects/executed-jn-stadium-parking-hd.jpg",
    alt: "Bituminous work at Jawaharlal Nehru Stadium parking area",
    projectCost: "10 Crore (Approx)",
    workOrderDate: "2011",
    client: "Punj Loyd",
  },
  {
    title:
      "Work order for the execution of Bitumen Macadam, Bituminous Concrete, Prime Coat & Tack Coat including of all accessories, machineries etc. for Central Spine Road at IGI Airport, New Delhi.",
    image: "/images/projects/executed-igi-central-spine-hd.jpg",
    alt: "Bituminous works for Central Spine Road at IGI Airport, New Delhi",
    projectCost: "12.81 Crore",
    workOrderDate: "2011",
    client: "GMR DIAL / New India Infra",
  },
  {
    title:
      "Supply & Laying of various type of Bituminous finished projects like Bituminous Macadam , Dense Bituminous Macadam, Dense Bituminous Concrete & Stone Mastic Asphalt at IGI Airport New Delhi for DIAL Project.",
    image: "/images/projects/executed-igi-dial-bituminous-hd.jpg",
    alt: "Bituminous finished works for DIAL Project at IGI Airport New Delhi",
    projectCost: "5.63 Crore",
    workOrderDate: "2011",
    client: "GMR DIAL / M/s Larsen & Toubro Ltd.",
  },

  // =========================================================================
  // SLIDE 6
  // =========================================================================
  {
    title:
      '"Widening and Upgradation of Road -Rohtak-Kharkhoda Delhi Border (SH-18) Km.10200 to 40.760".',
    image: "/images/projects/executed-rohtak-kharkhoda-hd.jpg",
    alt: "Widening and Upgradation of Road - Rohtak-Kharkhoda Delhi Border (SH-18)",
    projectCost: "17.49 Crore",
    workOrderDate: "2010",
    client: "Unity Infra Projects Ltd.",
  },
  {
    title:
      "Improvement and upgradation of Mehroli-Badarpur Road.",
    image: "/images/projects/executed-mehroli-badarpur-hd.jpg",
    alt: "Improvement and upgradation of Mehroli-Badarpur Road",
    projectCost: "17.49 Crore",
    workOrderDate: "2011",
    client: "PWD Govt. of Delhi",
  },
  {
    title:
      "Improvement & Maintenance of Roads and Drains at Jhilmil Industrial Area Block 'A' & 'B'.",
    image: "/images/projects/executed-jhilmil-industrial-hd.jpg",
    alt: "Improvement & Maintenance of Roads and Drains at Jhilmil Industrial Area Block A & B",
    projectCost: "16.74 Crore",
    workOrderDate: "2015",
    client: "DSIIDC Undertaking Govt. Of Delhi",
  },

  // =========================================================================
  // SLIDE 7
  // =========================================================================
  {
    title:
      "Rehabilitation of Airside Pavements and Associated Works at Indira Gandhi International Airport, New Delhi.",
    image: "/images/projects/executed-igi-airside-pavements-hd.jpg",
    alt: "Rehabilitation of Airside Pavements and Associated Works at Indira Gandhi International Airport, New Delhi",
    projectCost: "12.48 Crore",
    workOrderDate: "2016",
    client: "GMR, DIAL, IGI Airport New Delhi",
  },
  {
    title:
      "Strengthening of roads Improvement of footpath and drain providing and fixing retro reflective signage upgradation of street light in South Pitam Pura Delhi under PWD Zone M-3.SH Strengthening of roads and improvement of footpath and drain.",
    image: "/images/projects/executed-south-pitampura-hd.jpg",
    alt: "Strengthening of roads, footpath, drain & signage in South Pitampura Delhi under PWD Zone M-3",
    projectCost: "14.28 Crore",
    workOrderDate: "2013",
    client: "PWD Govt. of Delhi",
  },
  {
    title:
      "Strengthening of Najafgarh Jharoda Road upto Bahadurgarh Border New Delhi",
    image: "/images/projects/executed-najafgarh-jharoda-hd.jpg",
    alt: "Strengthening of Najafgarh Jharoda Road upto Bahadurgarh Border New Delhi",
    projectCost: "15.66 Crore",
    workOrderDate: "2013",
    client: "PWD Govt. of Delhi",
  },
];
