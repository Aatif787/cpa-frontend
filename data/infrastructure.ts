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
      "Heavy soil compactor roller with a steel vibratory drum and high-traction tires, used for compacting ground layers and road foundations.",
    verifiedDetails: [
      "Type: Articulated single drum vibratory soil compactor",
      "Branding: C P Arora corporate stencil",
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
    alt: "KYB-Conmat concrete batching plant with twin cement silos and transit mixer loading",
    description:
      "Stationary concrete batching plant by KYB-Conmat with twin cement silos, automatic mixer, and on-site generator power.",
    verifiedDetails: [
      "Manufacturer: KYB-Conmat Concrete Technologies",
      "Storage: Twin vertical bulk cement and flyash storage silos",
      "Auxiliary Power: Skid-mounted acoustic enclosed diesel generator",
      "Output: Structural grade concrete for bridges, culverts & rigid pavements",
    ],
  },
  {
    id: "machinery7",
    title: "Ready-Mix Batching Tower & CPA Mixer Truck",
    category: "concrete",
    categoryLabel: "Concrete Fleet",
    image: "/images/fleet/machinery7.jpg",
    alt: "Concrete batching plant with cement silo and CPA transit mixer unit 12",
    description:
      "Concrete batching tower with bulk storage silos and automated chute for fast loading into transit mixer trucks.",
    verifiedDetails: [
      "Fleet Unit: CPA Tata Transit Mixer Unit #12",
      "Branding: CPA insignia on truck sun-visor",
      "Components: Bulk vertical silo, screw feeder, overhead discharge chute",
      "Application: Structural concrete delivery to active project sites",
    ],
  },
  {
    id: "m4",
    title: "CPA Transit Mixer Concrete Transport Fleet",
    category: "concrete",
    categoryLabel: "Concrete Fleet",
    image: "/images/fleet/m4.jpg",
    alt: "Fleet of white Tata transit mixers with CPA branding lined up in staging yard",
    description:
      "Dedicated fleet of company-owned Tata transit mixer trucks that keep concrete mixed and fresh while driving to construction sites.",
    verifiedDetails: [
      "Fleet: Dedicated fleet of Tata concrete transit mixers",
      "Branding: CPA stenciled on cab fronts with individual unit IDs (#1, #2, etc.)",
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
    alt: "Cold milling machine loading reclaimed asphalt into CPA multi-axle tipper on runway",
    description:
      "High-output cold milling machine that shaves off old road surfaces to the exact depth and loads the milled asphalt directly into dump trucks.",
    verifiedDetails: [
      "Operation: Precision asphalt milling on airport runway / highway corridor",
      "Tipper Truck: CPA multi-axle dump truck #5 with full corporate livery",
      "Discharge: High-capacity front loading conveyor belt",
      "Sustainability: RAP recycling and milling without damaging base course",
    ],
  },
  {
    id: "machinery2",
    title: "Mobile Aggregate Crushing & Screening Plant",
    category: "milling-earthwork",
    categoryLabel: "Crushing & Screening",
    image: "/images/fleet/machinery2.jpg",
    alt: "Mobile aggregate crushing and multi-deck screening plant with conveyor discharge stockpiles",
    description:
      "Mobile crushing and screening plant that crushes stones and separates them into precise aggregate sizes for asphalt and concrete.",
    verifiedDetails: [
      "Equipment: Multi-stage aggregate crushing & sizing plant",
      "Conveyors: Multi-directional radial discharge conveyor belts",
      "Grading: Simultaneously separates into multi-fraction aggregate stockpiles",
      "Application: Specification-compliant aggregate production for IRC/MoRTH mixes",
    ],
  },
  {
    id: "machinery8",
    title: "High-Volume Aggregate Stockpiling & Scraping Unit",
    category: "milling-earthwork",
    categoryLabel: "Material Handling",
    image: "/images/fleet/machinery8.jpg",
    alt: "Aggregate dragline scraper and stockpiling boom loading batching bins",
    description:
      "Automated aggregate scraper and boom that moves large piles of stone into batching bins quickly and evenly.",
    verifiedDetails: [
      "Mechanism: Radial dragline scraper boom with bucket",
      "Handling: High-volume mineral aggregate stockpiling & bin charging",
      "Stockpile: Segregated clean stone chips and crushed sand reserves",
      "Efficiency: Continuous automated feed into batching bins",
    ],
  },
  {
    id: "m3",
    title: "CPA Heavy-Duty Tipper Dump Truck Fleet",
    category: "auxiliary",
    categoryLabel: "Transport Fleet",
    image: "/images/fleet/m3.jpg",
    alt: "Lineup of yellow BharatBenz multi-axle tippers stenciled CPA in staging yard",
    description:
      "Fleet of heavy-duty BharatBenz multi-axle tipper dump trucks for transporting hot asphalt mix, stones, and soil to job sites.",
    verifiedDetails: [
      "Fleet: BharatBenz multi-axle heavy-duty tippers",
      "Branding: CPA 05 windshield banner markings",
      "Capacity: High-volume thermal-insulated hydraulic tipper bodies",
      "Deployment: Transporting hot asphalt mix, WMM aggregates & earthwork fill",
    ],
  },
  {
    id: "m9",
    title: "CPA Mobile Water Tanker & Bitumen Bowser",
    category: "auxiliary",
    categoryLabel: "Site Support",
    image: "/images/fleet/m9.jpg",
    alt: "Tata water tanker truck stenciled C P Arora Engineers Contractors Pvt. Ltd.",
    description:
      "Multi-purpose water tanker truck used for road curing, roller spray supply, and dust control on construction sites.",
    verifiedDetails: [
      "Vehicle: Tata commercial chassis with heavy cylindrical tank body",
      "Branding: C P Arora Engineers Contractors Pvt. Ltd. stenciled on tank",
      "Fleet Tag: Unit No. 1",
      "Function: Subgrade moisture conditioning, roller spray bar supply & site cleaning",
    ],
  },
  {
    id: "m10",
    title: "Tractor-Towed Mechanical Road Sweeper",
    category: "auxiliary",
    categoryLabel: "Site Support",
    image: "/images/fleet/m10.jpg",
    alt: "Tractor towing mechanical rotary road sweeper cleaning highway surface",
    description:
      "Tractor-towed mechanical road sweeper that clears dust and loose gravel from the road before asphalt is laid.",
    verifiedDetails: [
      "Configuration: Heavy-duty utility tractor with trailing rotary brush unit",
      "Function: High-velocity sweeping of milled and granular pavement surfaces",
      "Quality Impact: Ensures clean substrate for maximum bitumen prime/tack coat adhesion",
      "Application: Mandatory surface preparation step on all highway and runway contracts",
    ],
  },
  {
    id: "m5",
    title: "Atlas Copco QLT M10 Mobile Lighting Tower",
    category: "auxiliary",
    categoryLabel: "Support & Power",
    image: "/images/fleet/m5.jpg",
    alt: "Atlas Copco QLT M10 mobile light tower stenciled C P Arora unit 2",
    description:
      "Mobile diesel-powered light tower providing bright floodlights for safe round-the-clock night paving on highways and runways.",
    verifiedDetails: [
      "Model: Atlas Copco QLT M10 Mobile Light Tower",
      "Branding: C P ARORA stencil with Unit #2 tag",
      "Mobility: Single-axle towable trailer with stabilizing outriggers",
      "Role: 24/7 night-time illumination on high-traffic corridors and airport runways",
    ],
  },
  {
    id: "m6",
    title: "Atlas Copco XAMS 157 Mobile Air Compressor",
    category: "auxiliary",
    categoryLabel: "Support & Power",
    image: "/images/fleet/m6.jpg",
    alt: "Atlas Copco XAMS 157 mobile air compressor stenciled C P Arora unit 4 at airfield",
    description:
      "High-pressure portable air compressor used to blow away dust and clean runway surfaces before asphalt laying.",
    verifiedDetails: [
      "Model: Atlas Copco XAMS 157 High-Pressure Mobile Compressor",
      "Branding: C P ARORA stencil with Unit #4 tag",
      "Site Context: Active airfield tarmac (visible aircraft tail in background)",
      "Role: High-pressure air jetting to purge dust and debris prior to asphalt sealing",
    ],
  },
];

export const PLANT_FACILITIES: PlantFacility[] = [
  {
    id: "central-staging-yard",
    title: "Central Equipment & Machinery Yard",
    image: "/images/corporate/office-out.jpg",
    alt: "CPA equipment mobilization yard with plant structures and staging areas",
    description:
      "Company yard and maintenance depot housing machinery, batching plants, workshop bays, and stone stockpiles for quick dispatch across Delhi-NCR and North India.",
    features: [
      "Heavy machinery repair and maintenance workshop",
      "Covered spare parts storage and lubricant reserves",
      "Stone aggregate storage areas and digital weighing bridge",
      "Direct highway connectivity for fast equipment dispatch",
    ],
  },
  {
    id: "corporate-operations-center",
    title: "Corporate Head Office",
    image: "/images/corporate/office.jpg",
    alt: "C P Arora corporate office building exterior",
    description:
      "New Delhi corporate office managing engineering designs, project estimates, tender coordination, and government approvals.",
    features: [
      "Project planning and billing division",
      "Technical survey and design team",
      "Laboratory testing records and quality reports",
      "Executive management and government liaison offices",
    ],
  },
];
