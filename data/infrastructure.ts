export interface PlantMachineryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  column: "left" | "right";
  order: number;
}

export const PLANTS_AND_MACHINERY: PlantMachineryItem[] = [
  // ==========================================
  // LEFT COLUMN (11 Items)
  // ==========================================
  {
    id: "crush-metro-1",
    title: "Crush Metro 220TPH",
    image: "/images/fleet/machinery1.jpg",
    alt: "Crush Metro 220TPH Crushing Plant & Aggregate Conveyor",
    column: "left",
    order: 1,
  },
  {
    id: "hot-mix-1",
    title: "Hot Mix Plant (Batch Type)",
    image: "/images/fleet/machinery3.jpg",
    alt: "Hot Mix Plant (Batch Type) Mixing Tower & Facility",
    column: "left",
    order: 2,
  },
  {
    id: "hot-mix-2",
    title: "Hot Mix Plant (Batch Type)",
    image: "/images/fleet/machinery5.jpg",
    alt: "Hot Mix Plant (Batch Type) Stationary Asphalt Mixing Plant",
    column: "left",
    order: 3,
  },
  {
    id: "kyc-conmat-1",
    title: "KYC Conmat (Batching Plant) 75cum",
    image: "/images/fleet/machinery7.jpg",
    alt: "KYC Conmat (Batching Plant) 75cum Concrete Mixing Facility with Transit Mixer",
    column: "left",
    order: 4,
  },
  {
    id: "rmc-plant-control",
    title: "RMC Plant,",
    image: "/images/fleet/machinery9.jpg",
    alt: "RMC Plant, Ready Mix Concrete Control Center and Cooling Tower",
    column: "left",
    order: 5,
  },
  {
    id: "milling-hywa",
    title: "Milling Machine with Hywa",
    image: "/images/fleet/m1.jpg",
    alt: "Milling Machine with Hywa Tipper Truck on Runway Pavement",
    column: "left",
    order: 6,
  },
  {
    id: "hywa-fleet",
    title: "Hywa",
    image: "/images/fleet/m3.jpg",
    alt: "Hywa Heavy Tipper Trucks Staging Fleet",
    column: "left",
    order: 7,
  },
  {
    id: "light-tower",
    title: "Light Tower",
    image: "/images/fleet/m5.jpg",
    alt: "Light Tower C.P. ARORA Mobile Lighting Unit QLT M10",
    column: "left",
    order: 8,
  },
  {
    id: "ptr-t220",
    title: "PTR T220",
    image: "/images/fleet/m7.jpg",
    alt: "Volvo PTR T220 Pneumatic Tyre Multi-Wheel Compaction Roller",
    column: "left",
    order: 9,
  },
  {
    id: "water-tanker",
    title: "Water Tanker",
    image: "/images/fleet/m9.jpg",
    alt: "Water Tanker Truck C P ARORA Engineers Contractors Pvt Ltd",
    column: "left",
    order: 10,
  },
  {
    id: "soil-compactor",
    title: "Soil Compactor",
    image: "/images/fleet/m11.jpg",
    alt: "Heavy Vibratory Single Drum Soil Compactor Stenciled C P ARORA",
    column: "left",
    order: 11,
  },

  // ==========================================
  // RIGHT COLUMN (11 Items)
  // ==========================================
  {
    id: "crush-metro-2",
    title: "Crush Metro 220TPH",
    image: "/images/fleet/machinery2.jpg",
    alt: "Crush Metro 220TPH Crushing Plant Aerial View with Stockpiles",
    column: "right",
    order: 1,
  },
  {
    id: "hot-mix-3",
    title: "Hot Mix Plant (Batch Type)",
    image: "/images/fleet/machinery4.jpg",
    alt: "Hot Mix Plant (Batch Type) Continuous Asphalt Plant Operations",
    column: "right",
    order: 2,
  },
  {
    id: "kyc-conmat-2",
    title: "KYC Conmat (Batching Plant) 75cum",
    image: "/images/fleet/machinery6.jpg",
    alt: "KYC Conmat (Batching Plant) 75cum Batching Tower & Cement Silos",
    column: "right",
    order: 3,
  },
  {
    id: "rmc-plant",
    title: "RMC Plant,",
    image: "/images/fleet/machinery8.jpg",
    alt: "RMC Plant, Ready Mix Concrete Staging & Aggregate Facility",
    column: "right",
    order: 4,
  },
  {
    id: "rmc-plant-chute",
    title: "RMC Plant",
    image: "/images/fleet/machinery10_rmc.jpg",
    alt: "RMC Plant Concrete Batching Plant with Transit Mixer Ramp",
    column: "right",
    order: 5,
  },
  {
    id: "laying-vogele",
    title: "Laying through Vogele",
    image: "/images/fleet/m2.jpg",
    alt: "Laying through Vogele Tracked Electronic Sensor Paver",
    column: "right",
    order: 6,
  },
  {
    id: "transition-mixture",
    title: "Transition Mixture",
    image: "/images/fleet/m4.jpg",
    alt: "Transition Mixture Fleet of Company-Owned Concrete Transit Mixers",
    column: "right",
    order: 7,
  },
  {
    id: "air-compresso",
    title: "Air Compresso",
    image: "/images/fleet/m6.jpg",
    alt: "Air Compresso C.P. ARORA Heavy Pneumatic Compressor Unit",
    column: "right",
    order: 8,
  },
  {
    id: "vibratory-road-roller",
    title: "Vibratory Road Roller",
    image: "/images/fleet/m8.jpg",
    alt: "Volvo Vibratory Tandem Road Roller Compacting Asphalt Course",
    column: "right",
    order: 9,
  },
  {
    id: "tractor-broomer",
    title: "Tractor with Broomer",
    image: "/images/fleet/m10.jpg",
    alt: "Tractor with Mechanical Broomer Road Cleaning Sweeper",
    column: "right",
    order: 10,
  },
  {
    id: "wmm-plant",
    title: "Wet Mix Macadam Plant",
    image: "/images/fleet/m12.jpg",
    alt: "Wet Mix Macadam (WMM) Soil-Aggregate Blending Plant",
    column: "right",
    order: 11,
  },
];

export interface MachineryScheduleItem {
  sNo: number;
  name: string;
  nos: number;
  make: string;
  model: string;
  remark: string;
}

export const MACHINERY_SCHEDULE_LIST: MachineryScheduleItem[] = [
  { sNo: 1, name: "CRUSHER PLANT", nos: 2, make: "METSO", model: "220 TPH", remark: "-" },
  { sNo: 2, name: "HOT MIX PLANT BATCH TYPE", nos: 2, make: "APOLLO", model: "120-140TPH", remark: "-" },
  { sNo: 3, name: "HOT MIX PLANT BATCH TYPE", nos: 1, make: "APOLLO", model: "90 TPH", remark: "-" },
  { sNo: 4, name: "WET MIX PLANT", nos: 2, make: "APOLLO", model: "100 TPH", remark: "-" },
  { sNo: 5, name: "CONCRETE BATCHING PLANT 75 CUM", nos: 1, make: "KYB CONMAT", model: "75 CUM", remark: "-" },
  { sNo: 6, name: "CONCRETE BATCHING PLANT 70 CUM", nos: 1, make: "MACONS", model: "70 CUM", remark: "-" },
  { sNo: 7, name: "CONCRETE BATCHING PLANT 60 CUM", nos: 1, make: "KYB CONMAT", model: "60 CUM", remark: "-" },
  { sNo: 8, name: "CONCRETE BATCHING PLANT 30 CUM", nos: 2, make: "SCHWING STETTER", model: "30 CUM", remark: "-" },
  { sNo: 9, name: "CONCRETE BATCHING PLANT 30 CUM", nos: 1, make: "KYB CONMAT", model: "30 CUM", remark: "-" },
  { sNo: 10, name: "CONCRETE BATCHING PLANT 18 CUM", nos: 1, make: "SCHWING", model: "18 CUM", remark: "-" },
  { sNo: 11, name: "SLIPFORM PAVER", nos: 1, make: "WIRTGEN", model: "SP 25 (3.5 Mtr)", remark: "-" },
  { sNo: 12, name: "FIXFORM PAVER", nos: 1, make: "-", model: "-", remark: "-" },
  { sNo: 13, name: "SCREED PAVER", nos: 2, make: "ATLAS COPCO", model: "-", remark: "-" },
  { sNo: 14, name: "CEMENT / FLYASH SILO", nos: 6, make: "KAMAL ENTERPRISES/ VAK INDUSTRIES", model: "2017", remark: "-" },
  { sNo: 15, name: "CHILLAR PLANT", nos: 1, make: "-", model: "-", remark: "-" },
  { sNo: 16, name: "HYVA", nos: 70, make: "TATA, ASHOK LEYLAND, BHARAT BENZ", model: "-", remark: "-" },
  { sNo: 17, name: "MILLING MACHINE", nos: 1, make: "TATA, ASHOK LEYLAND, BHARAT BENZ", model: "W 100H", remark: "-" },
  { sNo: 18, name: "VSS MACRO PAVER MACHINE WITH MAN CHASSIS", nos: 2, make: "VSS MACRO", model: "-", remark: "-" },
  { sNo: 19, name: "VOGELE PAVER 13 MTR", nos: 1, make: "VOGELE", model: "13 MTR.", remark: "-" },
  { sNo: 20, name: "VOGELE PAVER 9 MTR.", nos: 1, make: "VOGELE", model: "9 MTR.", remark: "-" },
  { sNo: 21, name: "APOLLO MODEL AP-550 HYDROSTATIC SENSOR PAVER", nos: 3, make: "APOLLO", model: "AP-550", remark: "-" },
  { sNo: 22, name: "WET MIX PAVER FINISHER", nos: 3, make: "APOLLO", model: "WM6 HES", remark: "-" },
  { sNo: 23, name: "PTR", nos: 1, make: "VOLVO", model: "PT 220", remark: "-" },
  { sNo: 24, name: "TANDEM ROLLER", nos: 8, make: "VOLVO, DYNAPAC, AMMANN, WIRTGEN", model: "-", remark: "-" },
  { sNo: 25, name: "TRANSIT MIXER 7 CUM", nos: 10, make: "TATA", model: "-", remark: "-" },
  { sNo: 26, name: "TRAILER (LOW BED)", nos: 4, make: "ASHOK LEYLAND", model: "-", remark: "-" },
  { sNo: 27, name: "SWEEPING MACHINE WITH EICHER CHASSIS", nos: 2, make: "TPS WITH EICHER CHASSIS", model: "-", remark: "-" },
  { sNo: 28, name: "EXCAVATOR", nos: 9, make: "KOBELCO, TATA HITACHI", model: "SK210 / SK220", remark: "-" },
  { sNo: 29, name: "WHEEL LOADER", nos: 8, make: "LIUGONG, JCB, HINDUSTAN", model: "835 / 836", remark: "-" },
  { sNo: 30, name: "BACKHOE LOADER (JCB)", nos: 8, make: "CASE, JCB", model: "770EX", remark: "-" },
  { sNo: 31, name: "MOTOR GRADER", nos: 8, make: "LIUGONG, CASE", model: "4180D", remark: "-" },
  { sNo: 32, name: "SOIL COMPACTOR", nos: 9, make: "INGERSOLL RAND, ESCORTS, HAMM, DYNAPAC", model: "SD 110", remark: "-" },
  { sNo: 33, name: "MINI ROLLER", nos: 2, make: "CASE, INGERSOLL RAND", model: "450 DX", remark: "-" },
  { sNo: 34, name: "AIR COMPRESSOR", nos: 4, make: "ATLAS COPCO", model: "XA 157", remark: "-" },
  { sNo: 35, name: "DIESEL BROWSER", nos: 4, make: "MAHINDRA", model: "DI 3200", remark: "-" },
  { sNo: 36, name: "BITUMEN BROWSER", nos: 1, make: "EICHER", model: "-", remark: "-" },
  { sNo: 37, name: "WATER TANKER 12 KL", nos: 6, make: "EICHER", model: "20.16", remark: "-" },
];

export interface FleetItem {
  id: string;
  title: string;
  category: "hot-mix" | "paving" | "compaction" | "concrete" | "milling-earthwork" | "auxiliary";
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  verifiedDetails: string[];
}

export interface PlantFacility {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
}

export const FLEET_CATEGORIES = [
  { id: "all", label: "Complete Fleet" },
  { id: "hot-mix", label: "Asphalt & WMM Plants" },
  { id: "paving", label: "Sensor Pavers" },
  { id: "compaction", label: "Compaction Rollers" },
  { id: "concrete", label: "Concrete Production" },
  { id: "milling-earthwork", label: "Milling & Earthwork" },
  { id: "auxiliary", label: "Support & Power" },
] as const;

export const FLEET_ITEMS: FleetItem[] = [
  {
    id: "m2",
    title: "Vögele Super 1800-3 Electronic Sensor Paver",
    category: "paving",
    categoryLabel: "Paving Fleet",
    image: "/images/fleet/m2.jpg",
    alt: "Vögele Super 1800-3 tracked asphalt sensor paver branded C P Arora",
    description:
      "Heavy-duty tracked asphalt paver equipped with electronic sensors for automatic level and slope control, ensuring a smooth and even road surface.",
    verifiedDetails: [
      "Brand: Vögele Super 1800-3 (Tracked)",
      "Branding: C P Arora corporate livery stenciled",
      "Operation: Precision electronic sensor control",
      "Application: National highways, expressways & airfield runways",
    ],
  },
  {
    id: "machinery3",
    title: "Apollo Asphalt Batch Mix Plant",
    category: "hot-mix",
    categoryLabel: "Asphalt Plants",
    image: "/images/fleet/machinery3.jpg",
    alt: "Apollo asphalt batch mix tower plant with multi-deck screens and loading hopper",
    description:
      "Computer-controlled asphalt batch mix plant with aggregate dryer drum, vibrating screens, bitumen metering, and baghouse pollution filters.",
    verifiedDetails: [
      "Brand: Apollo Asphalt Batch Mix Plant",
      "Components: Multi-tier mixing tower, drying drum, baghouse filter",
      "Discharge: Direct truck loading hopper for dump tippers",
      "Compliance: Baghouse dust collection for environmental standards",
    ],
  },
  {
    id: "machinery5",
    title: "Stationary Asphalt Batch Mix Facility",
    category: "hot-mix",
    categoryLabel: "Asphalt Plants",
    image: "/images/fleet/machinery5.jpg",
    alt: "Modern asphalt batch mix tower plant with multi-cyclone dust collector and bitumen tanks",
    description:
      "Modern asphalt batch mix plant with rotary drying drum, dust filters, insulated bitumen storage tanks, and computer-controlled batching.",
    verifiedDetails: [
      "Configuration: Stationary multi-deck tower with rotary dryer",
      "Dust Abatement: Multi-cyclone separator & baghouse filtration stack",
      "Storage: Insulated bitumen service tanks & cold feed bins",
      "Quality Control: Computerized automated recipe batching",
    ],
  },
  {
    id: "machinery4",
    title: "Continuous Asphalt Drum Mix Plant",
    category: "hot-mix",
    categoryLabel: "Asphalt Plants",
    image: "/images/fleet/machinery4.jpg",
    alt: "Continuous asphalt drum mix plant with 4-bin cold aggregate feeder",
    description:
      "Continuous asphalt drum mix plant with cold aggregate bins and burner drum, designed for high-volume asphalt production.",
    verifiedDetails: [
      "Configuration: Continuous parallel-flow drying & coating drum",
      "Feeding: Four-compartment cold aggregate proportioning bins",
      "Conveyance: Heavy-duty slinger belt to burner drum",
      "Application: High-volume bituminous macadam production",
    ],
  },
  {
    id: "m12",
    title: "Wet Mix Macadam (WMM) Batching Plant",
    category: "hot-mix",
    categoryLabel: "Asphalt Plants",
    image: "/images/fleet/m12.jpg",
    alt: "Wet Mix Macadam aggregate batching plant with pug mill mixer and operator cabin",
    description:
      "Wet Mix Macadam (WMM) plant equipped with cold aggregate storage bins, twin-shaft pugmill mixer, and an air-conditioned operator cabin.",
    verifiedDetails: [
      "Unit: Wet Mix Macadam (WMM) soil-aggregate plant",
      "Mixing: Twin-shaft continuous forced pugmill",
      "Control: Dedicated operator cabin with electrical control console",
      "Application: Highway sub-base and WMM course blending",
    ],
  },
  {
    id: "m8",
    title: "Volvo Tandem Vibratory Compactor Roller",
    category: "compaction",
    categoryLabel: "Compaction",
    image: "/images/fleet/m8.jpg",
    alt: "Volvo vibratory tandem roller unit 5 stenciled C P Arora Engineers Contractors Pvt. Ltd.",
    description:
      "Double-drum vibratory roller with water spray bars and precision steering for compacting asphalt layers to required density.",
    verifiedDetails: [
      "Brand: Volvo Heavy Construction",
      "Branding: C P Arora Engineers Contractors Pvt. Ltd. nameplate stenciled",
      "Fleet Tag: Unit No. 5",
      "Role: High-frequency bituminous layer compaction",
    ],
  },
  {
    id: "m7",
    title: "Volvo PT220 Pneumatic Tyre Roller (PTR)",
    category: "compaction",
    categoryLabel: "Compaction",
    image: "/images/fleet/m7.jpg",
    alt: "Volvo PT220 pneumatic tyre roller stenciled C P Arora",
    description:
      "Multi-wheel pneumatic tyre roller designed for final surface kneading, sealing asphalt layers, and giving runways and roads a smooth finish.",
    verifiedDetails: [
      "Model: Volvo PT220 Pneumatic Tyre Roller",
      "Branding: C P Arora corporate stencil",
      "Compaction Action: Multi-wheel pneumatic kneading action",
      "Application: Final surface sealing, friction courses & runway finishes",
    ],
  },
  {
    id: "m11",
    title: "Single Drum Vibratory Soil Compactor",
    category: "compaction",
    categoryLabel: "Compaction",
    image: "/images/fleet/m11.jpg",
    alt: "Heavy vibratory single drum soil compactor stenciled C P Arora compacting subgrade",
    description:
      "High-amplitude single drum roller used for compacting subgrades, stone aggregate layers, and road foundations.",
    verifiedDetails: [
      "Drum: Smooth steel drum with high dynamic compaction force",
      "Branding: C P Arora stencil applied on chassis body",
      "Deployment: Subgrade, granular sub-base & airfield embankment compaction",
      "Drive: Heavy rear pneumatic drive tyres with all-terrain traction",
    ],
  },
  {
    id: "machinery10",
    title: "CPA Concrete Batching Plant & Transit Station",
    category: "concrete",
    categoryLabel: "Concrete Fleet",
    image: "/images/fleet/machinery10.jpg",
    alt: "CPA concrete batching plant and control cabin with Tata transit mixer truck",
    description:
      "Concrete batching plant with automated cement conveyors, aggregate weighing hoppers, and direct loading for transit mixer trucks.",
    verifiedDetails: [
      "Branding: C P Arora stenciled on mixing hopper & control station",
      "Loading Setup: Drive-through ramp for continuous transit mixer charging",
      "Conveyance: Enclosed inclined screw conveyor from bulk cement silo",
      "Fleet Integration: Direct dispatch to CPA Tata transit mixers",
    ],
  },
  {
    id: "machinery6",
    title: "KYB-Conmat Concrete Batching Plant",
    category: "concrete",
    categoryLabel: "Concrete Fleet",
    image: "/images/fleet/machinery6.jpg",
    alt: "KYB-Conmat concrete batch mix plant with vertical cement silos and transit truck loading",
    description:
      "Concrete batch mix plant with vertical cement silos, aggregate transfer conveyors, and automated batching for airport and bridge works.",
    verifiedDetails: [
      "Brand: KYB-Conmat Stationary Concrete Plant",
      "Silos: Twin vertical bulk cement and fly-ash storage silos",
      "Mix Quality: Electronic load-cell aggregate weighing",
      "Application: PQC concrete for runways, expressways & major structures",
    ],
  },
  {
    id: "machinery7",
    title: "CPA Transit Mixer Fleet Charging Unit",
    category: "concrete",
    categoryLabel: "Concrete Fleet",
    image: "/images/fleet/machinery7.jpg",
    alt: "CPA branded concrete transit mixer truck loading under batch plant chute",
    description:
      "Transit mixer truck fleet for transporting fresh concrete from batching plants directly to highway and runway paving sites.",
    verifiedDetails: [
      "Fleet Type: Heavy-duty transit mixer trucks stenciled C P Arora",
      "Function: Fresh concrete transport under continuous drum rotation",
      "Capacity: Heavy-duty multi-axle chassis with auxiliary-driven drums",
      "Readiness: Mobilized for municipal structures, runway paving & rigid slabs",
    ],
  },
  {
    id: "machinery9",
    title: "Concrete Mix Chilling Plant & Water Cooling Tower",
    category: "concrete",
    categoryLabel: "Concrete Fleet",
    image: "/images/fleet/machinery9.jpg",
    alt: "Industrial chilled water plant and cooling tower for temperature-controlled concrete",
    description:
      "Industrial water chilling plant and cooling tower used to keep concrete mix temperatures cool during hot summer paving work.",
    verifiedDetails: [
      "Equipment: Industrial cooling tower & chilled water plant",
      "Piping: Insulated process circulation piping with industrial pumps",
      "Engineering Role: Temperature regulation for Mass Concrete / PQC as per IRC & MoRTH",
      "Location: Concrete batching yard staging installation",
    ],
  },
  {
    id: "m1",
    title: "Cold Milling Machine & Runway Discharging",
    category: "milling-earthwork",
    categoryLabel: "Milling Fleet",
    image: "/images/fleet/m1.jpg",
    alt: "Cold milling machine with discharge conveyor stripping runway asphalt into CPA tipper",
    description:
      "Track-mounted cold milling machine used to remove old, damaged asphalt layers with high precision without harming the road base.",
    verifiedDetails: [
      "Equipment: Track-mounted asphalt cold milling planer",
      "Discharge: High-angle folding front discharge conveyor",
      "Precision: Automatic grade sensing for mill-and-fill operations",
      "Application: Runway resurfacing at Delhi IGI Airport and expressway rehabilitation",
    ],
  },
  {
    id: "machinery2",
    title: "Primary & Secondary Stone Aggregate Crushing Plant",
    category: "hot-mix",
    categoryLabel: "Aggregate Processing",
    image: "/images/fleet/machinery2.jpg",
    alt: "Crush Metro 220TPH aggregate crushing and screening plant with dual stockpiling conveyors",
    description:
      "Crush Metro 220TPH stone crushing and screening plant producing graded stone aggregates for asphalt and concrete production.",
    verifiedDetails: [
      "Configuration: Jaw crusher primary + cone crusher secondary + multi-deck vibrating screen",
      "Capacity: 220 TPH (Tonnes Per Hour) continuous throughput",
      "Stockpiling: Radial stacking conveyor systems for graded aggregates",
      "Quality Assurance: Ensures uniform aggregate grading for bituminous concrete & PQC",
    ],
  },
  {
    id: "machinery8",
    title: "Aggregate Stockpiling & Conveyor Loading Station",
    category: "hot-mix",
    categoryLabel: "Aggregate Processing",
    image: "/images/fleet/machinery8.jpg",
    alt: "High-angle radial conveyor elevating stone aggregates onto batching stockpile",
    description:
      "High-angle conveyor and aggregate stockpile management station ensuring continuous feeding to asphalt and concrete mixing plants.",
    verifiedDetails: [
      "System: High-capacity aggregate belt conveyor with electric drive",
      "Material: Multi-grade crushed stone aggregate stockpiles",
      "Feed Role: Continuous aggregate supply for concrete and asphalt batching",
      "Safety: Guarded pulleys and emergency pull-cord trip switches",
    ],
  },
  {
    id: "m10",
    title: "Heavy DG Power Generation & Auxiliary Fleet",
    category: "auxiliary",
    categoryLabel: "Auxiliary Fleet",
    image: "/images/fleet/m10.jpg",
    alt: "Heavy-duty soundproof diesel generator set powering plant site operations",
    description:
      "Silent diesel generators providing reliable, round-the-clock electric power for asphalt plants, lighting towers, and field offices.",
    verifiedDetails: [
      "Enclosure: Acoustic soundproof weatherproof canopy",
      "Output: Continuous-rated prime diesel power generation",
      "Deployment: Independent power for batch plants and night runway paving",
      "Safety: Integrated circuit breakers and emergency shut-off",
    ],
  },
];

export const PLANT_FACILITIES: PlantFacility[] = [
  {
    id: "corporate-office",
    title: "Corporate Headquarters & Operations Center",
    image: "/images/corporate/office.jpg",
    alt: "C P Arora Corporate Headquarters in Delhi",
    description:
      "Our main corporate office housing our project planning teams, estimation engineers, accounting department, and senior leadership.",
    features: [
      "Project management and planning teams",
      "Tendering and estimation department",
      "Financial and compliance administration",
      "Executive management offices",
    ],
  },
  {
    id: "mobilization-yard",
    title: "Plant Yard & Equipment Mobilization Depot",
    image: "/images/corporate/office-out.jpg",
    alt: "C P Arora Equipment Staging and Maintenance Yard",
    description:
      "Our heavy machinery maintenance yard where road pavers, rollers, and plant equipment are serviced, stored, and prepared for rapid dispatch to project sites.",
    features: [
      "Heavy machinery maintenance workshop",
      "Spare parts inventory and maintenance stores",
      "Rapid equipment dispatch and transport staging",
      "Fleet safety inspections and maintenance checks",
    ],
  },
];
