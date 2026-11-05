"use client";

import React from "react";

// =========================================================================
// 1. REUSABLE WHEAT PLANT CLUSTER (4 SHEAVES MOUNTED ON HARROW BAR)
// =========================================================================
const WheatCluster: React.FC<{ cx: number; baseY: number; height?: number }> = ({
  cx,
  baseY,
  height = 11,
}) => (
  <g className="wheat-ear select-none pointer-events-none">
    {/* Central Stalk Stem */}
    <line x1={cx} y1={baseY} x2={cx} y2={baseY - height} stroke="#D97706" strokeWidth={0.8} />
    {/* Tier 1 (Lower Grains Pair) */}
    <path
      d={`M${cx} ${baseY - 3} Q${cx - 3.5} ${baseY - 4.5} ${cx - 2.5} ${baseY - 6.5} Q${cx - 0.5} ${baseY - 5} ${cx} ${baseY - 3} Z`}
      fill="#F59E0B"
      stroke="#D97706"
      strokeWidth={0.6}
    />
    <path
      d={`M${cx} ${baseY - 3} Q${cx + 3.5} ${baseY - 4.5} ${cx + 2.5} ${baseY - 6.5} Q${cx + 0.5} ${baseY - 5} ${cx} ${baseY - 3} Z`}
      fill="#F59E0B"
      stroke="#D97706"
      strokeWidth={0.6}
    />
    {/* Tier 2 (Middle Grains Pair) */}
    <path
      d={`M${cx} ${baseY - 6} Q${cx - 3.5} ${baseY - 7.5} ${cx - 2.5} ${baseY - 9.5} Q${cx - 0.5} ${baseY - 8} ${cx} ${baseY - 6} Z`}
      fill="#F59E0B"
      stroke="#D97706"
      strokeWidth={0.6}
    />
    <path
      d={`M${cx} ${baseY - 6} Q${cx + 3.5} ${baseY - 7.5} ${cx + 2.5} ${baseY - 9.5} Q${cx + 0.5} ${baseY - 8} ${cx} ${baseY - 6} Z`}
      fill="#F59E0B"
      stroke="#D97706"
      strokeWidth={0.6}
    />
    {/* Tier 3 (Top Golden Grain Tip) */}
    <path
      d={`M${cx} ${baseY - 9} Q${cx - 2.5} ${baseY - 10.5} ${cx} ${baseY - 12} Q${cx + 2.5} ${baseY - 10.5} ${cx} ${baseY - 9} Z`}
      fill="#FBBF24"
      stroke="#D97706"
      strokeWidth={0.6}
    />
  </g>
);

// =========================================================================
// 2. VEHICLE 1: HIGHWAY ASPHALT DUMP TRUCK / TIPPER
//    ViewBox: 0 0 144 56 — All 3 wheels touch baseline y = 56
// =========================================================================
const HighwayDumpTruckVehicle: React.FC = () => (
  <div className="relative w-[144px] h-[56px] select-none pointer-events-none drop-shadow-xs">
    <svg viewBox="0 0 144 56" className="w-full h-full overflow-visible">
      {/* Asphalt Aggregate Load in Dump Bed */}
      <path d="M12 20 Q30 14 55 15 Q72 13 88 20 Z" fill="#334155" stroke="#1E293B" strokeWidth="1" />

      {/* Dump Bed Body (Yellow) */}
      <path
        d="M10 20 L86 20 L94 15 L94 22 L86 38 L14 38 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth="1.4"
      />
      {/* Dump Bed Stiffener Ribs */}
      <line x1="28" y1="21" x2="28" y2="37" stroke="#D97706" strokeWidth="1.4" />
      <line x1="46" y1="21" x2="46" y2="37" stroke="#D97706" strokeWidth="1.4" />
      <line x1="64" y1="21" x2="64" y2="37" stroke="#D97706" strokeWidth="1.4" />

      {/* Rear Mudguard / Fender */}
      <path d="M22 42 L80 42" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      {/* Underbody Chassis & Fuel Tank */}
      <rect x="74" y="38" width="16" height="7" rx="1.5" fill="#64748B" stroke="#1E293B" strokeWidth="1" />

      {/* TRUCK CAB (Yellow with Cyan Windshield) */}
      <path
        d="M92 18 L114 18 L126 30 L136 34 L136 46 L92 46 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Cyan Windshield & Side Window */}
      <polygon points="98,21 112,21 123,30 98,30" fill="#00B4D8" stroke="#1E293B" strokeWidth="1.2" />
      <polygon points="103,22 108,22 105,29 100,29" fill="#FFFFFF" opacity="0.65" />
      {/* Front Hood & Grille */}
      <rect x="127" y="34" width="8" height="10" fill="#E2E8F0" stroke="#1E293B" strokeWidth="1" />
      <line x1="129" y1="36" x2="133" y2="36" stroke="#1E293B" strokeWidth="0.8" />
      <line x1="129" y1="38" x2="133" y2="38" stroke="#1E293B" strokeWidth="0.8" />
      <line x1="129" y1="40" x2="133" y2="40" stroke="#1E293B" strokeWidth="0.8" />
      {/* Headlight */}
      <rect x="133" y="36" width="2" height="3" fill="#FEF08A" stroke="#1E293B" strokeWidth="0.6" />
      {/* Front Black Bumper */}
      <rect x="130" y="44" width="8" height="4" rx="1" fill="#1E293B" />

      {/* Exhaust Stack behind Cab */}
      <line x1="91" y1="26" x2="91" y2="10" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      <line x1="91" y1="10" x2="92.5" y2="8" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />

      {/* REAR TANDEM AXLE WHEEL 1: Center (34, 44), Radius 12 -> Bottom touches y = 56 */}
      <g>
        <circle cx="34" cy="44" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth="1.4" />
        <circle cx="34" cy="44" r="7.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="34" cy="44" r="3.2" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.8" />
          <line x1="34" y1="38" x2="34" y2="50" stroke="#1E293B" strokeWidth="0.9" />
          <line x1="28" y1="44" x2="40" y2="44" stroke="#1E293B" strokeWidth="0.9" />
          <circle cx="34" cy="44" r="1.5" fill="#1E293B" />
        </g>
      </g>

      {/* REAR TANDEM AXLE WHEEL 2: Center (62, 44), Radius 12 -> Bottom touches y = 56 */}
      <g>
        <circle cx="62" cy="44" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth="1.4" />
        <circle cx="62" cy="44" r="7.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="62" cy="44" r="3.2" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.8" />
          <line x1="62" y1="38" x2="62" y2="50" stroke="#1E293B" strokeWidth="0.9" />
          <line x1="56" y1="44" x2="68" y2="44" stroke="#1E293B" strokeWidth="0.9" />
          <circle cx="62" cy="44" r="1.5" fill="#1E293B" />
        </g>
      </g>

      {/* FRONT STEERING WHEEL: Center (114, 44), Radius 12 -> Bottom touches y = 56 */}
      <g>
        <circle cx="114" cy="44" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth="1.4" />
        <circle cx="114" cy="44" r="7.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="114" cy="44" r="3.2" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.8" />
          <line x1="114" y1="38" x2="114" y2="50" stroke="#1E293B" strokeWidth="0.9" />
          <line x1="108" y1="44" x2="120" y2="44" stroke="#1E293B" strokeWidth="0.9" />
          <circle cx="114" cy="44" r="1.5" fill="#1E293B" />
        </g>
      </g>
    </svg>
  </div>
);

// =========================================================================
// 3. VEHICLE 2: ICONIC JCB 3DX BACKHOE LOADER WITH REAR EXCAVATOR & FRONT BUCKET
//    ViewBox: 0 0 156 56 — All tires touch baseline at exact y = 56
// =========================================================================
const JCBBackhoeVehicle: React.FC = () => (
  <div className="relative w-[156px] h-[56px] select-none pointer-events-none drop-shadow-xs">
    <svg viewBox="0 0 156 56" className="w-full h-full overflow-visible">
      {/* ================= 1. REAR BACKHOE EXCAVATOR ARM (FOLDED IN TRANSPORT) ================= */}
      <g className="rear-backhoe">
        {/* Rear Kingpost / Swing Mount attached to chassis */}
        <rect x="34" y="32" width="8" height="16" rx="1.5" fill="#1E293B" stroke="#0F172A" strokeWidth={1.2} />
        <circle cx="38" cy="38" r="2.2" fill="#F8FAFC" stroke="#1E293B" strokeWidth={1} />

        {/* Main Curved Boom Arm (Yellow, arched high over rear) */}
        <path
          d="M38 38 Q30 22 18 16 Q12 14 10 18 L14 24 Q18 20 26 28 L32 44 Z"
          fill="#F59E0B"
          stroke="#1E293B"
          strokeWidth={1.3}
          strokeLinejoin="round"
        />
        {/* Hydraulic Boom Cylinder */}
        <line x1="38" y1="44" x2="22" y2="22" stroke="#64748B" strokeWidth={2.5} strokeLinecap="round" />
        <line x1="28" y1="30" x2="22" y2="22" stroke="#CBD5E1" strokeWidth={1.5} strokeLinecap="round" />

        {/* Dipper Arm (Connecting to curled bucket) */}
        <path
          d="M10 18 L18 36 L13 38 L6 20 Z"
          fill="#F59E0B"
          stroke="#1E293B"
          strokeWidth={1.3}
          strokeLinejoin="round"
        />
        <circle cx="10" cy="18" r="1.8" fill="#F8FAFC" stroke="#1E293B" strokeWidth={0.8} />
        <circle cx="18" cy="36" r="1.8" fill="#F8FAFC" stroke="#1E293B" strokeWidth={0.8} />

        {/* Rear Excavator Bucket (Curled upward in transport pose) */}
        <path
          d="M18 36 C22 38, 25 44, 21 48 L14 48 C12 44, 14 38, 18 36 Z"
          fill="#1E293B"
          stroke="#0F172A"
          strokeWidth={1.3}
        />
        {/* Bucket Teeth */}
        <polygon points="21,48 23,50 20,49" fill="#E2E8F0" />
        <polygon points="18,48 19,50 17,49" fill="#E2E8F0" />
        <polygon points="15,48 16,50 14,49" fill="#E2E8F0" />

        {/* Stabilizer / Outrigger Foot (Retracted travel position) */}
        <line x1="42" y1="44" x2="38" y2="52" stroke="#1E293B" strokeWidth={2.5} strokeLinecap="round" />
        <rect x="34" y="51" width="8" height="2" rx="0.5" fill="#475569" stroke="#1E293B" strokeWidth={0.8} />
      </g>

      {/* ================= 2. CABIN & OPERATOR STATION ================= */}
      {/* Yellow Rear Mudguard / Fender */}
      <path
        d="M42 40 C42 24, 66 24, 66 40 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth={1.4}
      />

      {/* Driver Cabin (Panoramic Glass with Black Pillars) */}
      <polygon
        points="49,36 54,12 76,12 79,36"
        fill="#00B4D8"
        stroke="#1E293B"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      {/* Specular Glare Reflection Streaks */}
      <polygon points="56,14 61,14 57,34 52,34" fill="#FFFFFF" opacity={0.65} />
      <polygon points="66,14 70,14 67,34 63,34" fill="#FFFFFF" opacity={0.4} />

      {/* Yellow Cabin Roof Canopy */}
      <rect x="50" y="8.5" width="29" height="4" rx="1.5" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.3} />
      {/* Amber Safety Flashing Beacon */}
      <circle cx="64" cy="6" r="2.2" fill="#F59E0B" stroke="#EA580C" strokeWidth={0.8} />

      {/* Steps / Battery Box below Cabin Door */}
      <rect x="65" y="41" width="11" height="9" rx="1" fill="#334155" stroke="#1E293B" strokeWidth={1} />
      <line x1="66" y1="44" x2="75" y2="44" stroke="#64748B" strokeWidth={0.8} />
      <line x1="66" y1="47" x2="75" y2="47" stroke="#64748B" strokeWidth={0.8} />

      {/* ================= 3. ENGINE HOOD & CHASSIS ================= */}
      {/* Slanted Yellow Engine Hood (JCB Profile) */}
      <path
        d="M75 29 L106 31 C109 31, 111 33, 111 36 L111 46 L75 46 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      {/* Iconic Black JCB Stripe / Brand Accent on Hood */}
      <path d="M78 35 L106 36 L105 38 L78 37 Z" fill="#1E293B" />
      {/* Engine Cooling Louvers */}
      <line x1="104" y1="39" x2="104" y2="44" stroke="#1E293B" strokeWidth={1.2} strokeLinecap="round" />
      <line x1="107" y1="39" x2="107" y2="44" stroke="#1E293B" strokeWidth={1.2} strokeLinecap="round" />

      {/* Vertical Exhaust Stack with Rain Flap */}
      <line x1="77" y1="32" x2="77" y2="4" stroke="#1E293B" strokeWidth={1.8} strokeLinecap="round" />
      <line x1="77" y1="4" x2="78.5" y2="1.5" stroke="#1E293B" strokeWidth={1.6} strokeLinecap="round" />

      {/* ================= 4. FRONT LOADER BUCKET & BOOM ARMS ================= */}
      {/* Hydraulic Lift Cylinder for Front Loader */}
      <line x1="74" y1="42" x2="108" y2="36" stroke="#64748B" strokeWidth={2.5} strokeLinecap="round" />
      <line x1="94" y1="39" x2="108" y2="36" stroke="#CBD5E1" strokeWidth={1.5} strokeLinecap="round" />

      {/* Main Diagonal Loader Boom Arm (Yellow) */}
      <path
        d="M72 38 L122 36 L134 42 L131 46 L120 40 L72 42 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      {/* Bucket Tilt Linkage & Hydraulic Cylinder */}
      <polygon points="120,38 128,30 134,34 126,42" fill="#475569" stroke="#1E293B" strokeWidth={1} />
      <line x1="112" y1="34" x2="128" y2="30" stroke="#CBD5E1" strokeWidth={1.8} strokeLinecap="round" />

      {/* FRONT 6-IN-1 LOADER BUCKET (Raised Transport Stance, ~5px above road baseline) */}
      <path
        d="M132 40 L146 36 L153 45 L150 51 L133 51 L130 46 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      {/* Bucket Inside Charcoal Face */}
      <polygon points="134,42 144,38 141,48 133,48" fill="#1E293B" />
      {/* Bucket Cutting Edge & Ground Digging Teeth */}
      <line x1="133" y1="51" x2="150" y2="51" stroke="#0F172A" strokeWidth={1.5} />
      <polygon points="135,51 136,53 134,53" fill="#E2E8F0" />
      <polygon points="140,51 141,53 139,53" fill="#E2E8F0" />
      <polygon points="145,51 146,53 144,53" fill="#E2E8F0" />
      <polygon points="149,51 150,53 148,53" fill="#E2E8F0" />

      {/* ================= 5. WHEELS (BOTTOM RESTS AT EXACT Y = 56) ================= */}
      {/* REAR LARGE DRIVE WHEEL: Center (54, 40), Radius 16 -> Bottom touches y = 56 */}
      <g>
        {/* Outer Heavy Lug Tire */}
        <circle cx="54" cy="40" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth={1.5} />
        {/* White Inner Rim */}
        <circle cx="54" cy="40" r="10" fill="#FFFFFF" stroke="#1E293B" strokeWidth={1.1} />
        {/* Spinning Hub Assembly */}
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="54" cy="40" r="4.5" fill="#F8FAFC" stroke="#1E293B" strokeWidth={0.9} />
          <line x1="54" y1="31" x2="54" y2="49" stroke="#1E293B" strokeWidth={1.1} />
          <line x1="45" y1="40" x2="63" y2="40" stroke="#1E293B" strokeWidth={1.1} />
          <circle cx="54" cy="40" r="2" fill="#1E293B" />
        </g>
      </g>

      {/* FRONT SMALL STEERING WHEEL: Center (102, 45), Radius 11 -> Bottom touches y = 56 */}
      <g>
        {/* Outer Tire */}
        <circle cx="102" cy="45" r="11" fill="#1E293B" stroke="#0F172A" strokeWidth={1.3} />
        {/* White Inner Rim */}
        <circle cx="102" cy="45" r="6.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth={1} />
        {/* Spinning Hub Assembly */}
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="102" cy="45" r="2.8" fill="#F8FAFC" stroke="#1E293B" strokeWidth={0.8} />
          <line x1="102" y1="39" x2="102" y2="51" stroke="#1E293B" strokeWidth={0.9} />
          <line x1="96" y1="45" x2="108" y2="45" stroke="#1E293B" strokeWidth={0.9} />
          <circle cx="102" cy="45" r="1.3" fill="#1E293B" />
        </g>
      </g>
    </svg>
  </div>
);

// =========================================================================
// 4. VEHICLE 3: CRAWLER CRANE WITH TELESCOPIC BOOM, HOIST BLOCK & CRAWLER TRACKS
//    ViewBox: 0 0 156 56 — Tracks rest at exact ground baseline y = 56
// =========================================================================
const CrawlerCraneVehicle: React.FC = () => (
  <div className="relative w-[156px] h-[56px] select-none pointer-events-none drop-shadow-xs">
    <svg viewBox="0 0 156 56" className="w-full h-full overflow-visible">
      {/* Forward-facing crawler crane */}
      <g transform="translate(156, 0) scale(-1, 1)">
        {/* ================= 1. TRACK UNDERCARRIAGE ================= */}
        {/* Track Belt */}
        <rect x="58" y="42" width="74" height="14" rx="7" fill="#1E293B" stroke="#0F172A" strokeWidth={1.4} />
        {/* Track Treads / Cleats */}
        <path
          d="
            M61 42 L61 40.5 M67 42 L67 40.5 M73 42 L73 40.5 M79 42 L79 40.5 M85 42 L85 40.5 M91 42 L91 40.5 M97 42 L97 40.5 M103 42 L103 40.5 M109 42 L109 40.5 M115 42 L115 40.5 M121 42 L121 40.5 M127 42 L127 40.5
            M61 56 L61 57.5 M67 56 L67 57.5 M73 56 L73 57.5 M79 56 L79 57.5 M85 56 L85 57.5 M91 56 L91 57.5 M97 56 L97 57.5 M103 56 L103 57.5 M109 56 L109 57.5 M115 56 L115 57.5 M121 56 L121 57.5 M127 56 L127 57.5
          "
          stroke="#0F172A"
          strokeWidth={1.2}
        />

        {/* 4 Yellow Track Rollers with Animated Spinning Hubs (Clockwise Forward Roll) */}
        {/* Roller 1 */}
        <g>
          <circle cx="70" cy="49" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth={1.3} />
          <g
            style={{ animation: "spin 1.2s linear infinite reverse", transformOrigin: "center", transformBox: "fill-box" }}
          >
            <circle cx="70" cy="49" r="2.2" fill="#1E293B" />
            <line x1="70" y1="45" x2="70" y2="53" stroke="#FFFFFF" strokeWidth={0.8} />
            <line x1="66" y1="49" x2="74" y2="49" stroke="#FFFFFF" strokeWidth={0.8} />
          </g>
        </g>

        {/* Roller 2 */}
        <g>
          <circle cx="86" cy="49" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth={1.3} />
          <g
            style={{ animation: "spin 1.2s linear infinite reverse", transformOrigin: "center", transformBox: "fill-box" }}
          >
            <circle cx="86" cy="49" r="2.2" fill="#1E293B" />
            <line x1="86" y1="45" x2="86" y2="53" stroke="#FFFFFF" strokeWidth={0.8} />
            <line x1="82" y1="49" x2="90" y2="49" stroke="#FFFFFF" strokeWidth={0.8} />
          </g>
        </g>

        {/* Roller 3 */}
        <g>
          <circle cx="102" cy="49" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth={1.3} />
          <g
            style={{ animation: "spin 1.2s linear infinite reverse", transformOrigin: "center", transformBox: "fill-box" }}
          >
            <circle cx="102" cy="49" r="2.2" fill="#1E293B" />
            <line x1="102" y1="45" x2="102" y2="53" stroke="#FFFFFF" strokeWidth={0.8} />
            <line x1="98" y1="49" x2="106" y2="49" stroke="#FFFFFF" strokeWidth={0.8} />
          </g>
        </g>

        {/* Roller 4 */}
        <g>
          <circle cx="118" cy="49" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth={1.3} />
          <g
            style={{ animation: "spin 1.2s linear infinite reverse", transformOrigin: "center", transformBox: "fill-box" }}
          >
            <circle cx="118" cy="49" r="2.2" fill="#1E293B" />
            <line x1="118" y1="45" x2="118" y2="53" stroke="#FFFFFF" strokeWidth={0.8} />
            <line x1="114" y1="49" x2="122" y2="49" stroke="#FFFFFF" strokeWidth={0.8} />
          </g>
        </g>

        {/* Turntable Spacer */}
        <rect x="68" y="40" width="54" height="2.5" fill="#334155" stroke="#1E293B" strokeWidth={0.8} />

        {/* ================= 2. REVOLVING SUPERSTRUCTURE ================= */}
        {/* Machinery Deck (Yellow) */}
        <rect x="66" y="27" width="60" height="13.5" rx="1.5" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.4} />
        <line x1="66" y1="38" x2="126" y2="38" stroke="#1E293B" strokeWidth={1} />

        {/* Engine Louvers (3 Horizontal Slats) */}
        <line x1="69" y1="30" x2="78" y2="30" stroke="#1E293B" strokeWidth={1.2} strokeLinecap="round" />
        <line x1="69" y1="32.5" x2="78" y2="32.5" stroke="#1E293B" strokeWidth={1.2} strokeLinecap="round" />
        <line x1="69" y1="35" x2="78" y2="35" stroke="#1E293B" strokeWidth={1.2} strokeLinecap="round" />

        {/* Exhaust Pipe (Curved black tube above deck) */}
        <path d="M75 27 L75 22 Q75 19 78 19 L80 19" fill="none" stroke="#1E293B" strokeWidth={1.8} strokeLinecap="round" />

        {/* ================= 3. OPERATOR CABIN ================= */}
        <rect x="97" y="14" width="28" height="24" rx="1.5" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.4} />
        <rect x="95" y="12" width="32" height="3" rx="1" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.2} />

        {/* Upper Window Pane (Cyan Glass with Specular Glare) */}
        <rect x="100" y="16" width="22" height="10" fill="#00B4D8" stroke="#1E293B" strokeWidth={1.1} />
        <line x1="105" y1="16" x2="115" y2="26" stroke="#FFFFFF" strokeWidth={2} opacity={0.75} />
        <line x1="113" y1="16" x2="121" y2="24" stroke="#FFFFFF" strokeWidth={2} opacity={0.75} />

        {/* Lower Slanted Window Pane */}
        <polygon points="100,28 122,28 122,36 110,36" fill="#00B4D8" stroke="#1E293B" strokeWidth={1.1} />
        <line x1="107" y1="28" x2="115" y2="36" stroke="#FFFFFF" strokeWidth={2} opacity={0.75} />

        {/* ================= 4. BOOM, CABLE & HOIST BLOCK ================= */}
        {/* Hydraulic Lift Cylinder */}
        <line x1="105" y1="24" x2="77" y2="13" stroke="#1E293B" strokeWidth={2.6} strokeLinecap="round" />
        <line x1="89" y1="18" x2="73" y2="12" stroke="#CBD5E1" strokeWidth={1.6} strokeLinecap="round" />

        {/* Main Telescopic Boom (Extending Forward) */}
        <polygon points="109,28 29,6 26,11 106,33" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.4} strokeLinejoin="round" />
        <polygon points="109,28 97,32 105,33" fill="#D97706" />

        {/* Boom Tip Head & Pulley Sheave */}
        <circle cx="27" cy="8" r="3.5" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.3} />
        <circle cx="27" cy="8" r="1.3" fill="#1E293B" />

        {/* Steel Wire Hoist Line */}
        <line x1="27" y1="11" x2="27" y2="26" stroke="#1E293B" strokeWidth={1.2} />

        {/* Heavy Hoist Block (Yellow with Black Hazard Stripes) */}
        <polygon points="22,26 32,26 30,33 24,33" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.2} />
        <line x1="23" y1="28" x2="31" y2="28" stroke="#1E293B" strokeWidth={1.2} />
        <line x1="24" y1="30" x2="30" y2="30" stroke="#1E293B" strokeWidth={1.2} />

        {/* Curved Steel Hook */}
        <path d="M27 33 L27 37 C27 41 23 42 23 39 C23 36 26 35 26 35" fill="none" stroke="#1E293B" strokeWidth={2} strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

// =========================================================================
// 5. VEHICLE 4: HEAVY CONCRETE TRANSIT MIXER TRUCK WITH REVOLVING DRUM & CHUTE
//    ViewBox: 0 0 156 56 — All 3 wheels touch ground baseline y = 56
// =========================================================================
const ConcreteMixerVehicle: React.FC = () => (
  <div className="relative w-[156px] h-[56px] select-none pointer-events-none drop-shadow-xs">
    <svg viewBox="0 0 156 56" className="w-full h-full overflow-visible">
      {/* Forward-facing concrete mixer truck (driving to the right, baseline at y = 56) */}
      <g>
        {/* ================= 1. REAR CHARGE HOPPER & LADDER ================= */}
        {/* Ladder Vertical Rails */}
        <line x1="12" y1="5" x2="12" y2="34" stroke="#64748B" strokeWidth={1.2} strokeLinecap="round" />
        <line x1="17.5" y1="5" x2="17.5" y2="34" stroke="#64748B" strokeWidth={1.2} strokeLinecap="round" />
        {/* Ladder Rungs */}
        <line x1="12" y1="8" x2="17.5" y2="8" stroke="#64748B" strokeWidth={0.8} />
        <line x1="12" y1="12" x2="17.5" y2="12" stroke="#64748B" strokeWidth={0.8} />
        <line x1="12" y1="16" x2="17.5" y2="16" stroke="#64748B" strokeWidth={0.8} />
        <line x1="12" y1="20" x2="17.5" y2="20" stroke="#64748B" strokeWidth={0.8} />
        <line x1="12" y1="24" x2="17.5" y2="24" stroke="#64748B" strokeWidth={0.8} />
        <line x1="12" y1="28" x2="17.5" y2="28" stroke="#64748B" strokeWidth={0.8} />
        <line x1="12" y1="32" x2="17.5" y2="32" stroke="#64748B" strokeWidth={0.8} />

        {/* Charcoal Top Charge Hopper */}
        <polygon points="8,3.5 22,3.5 19,10 11,10" fill="#334155" stroke="#1E293B" strokeWidth={1.1} strokeLinejoin="round" />

        {/* Rear Yellow Support Pylon */}
        <polygon points="18,6 24,6 24,35 18,35" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.2} />
        <circle cx="23" cy="13" r="2.2" fill="#475569" stroke="#1E293B" strokeWidth={0.8} />
        <circle cx="23" cy="13" r="0.9" fill="#0F172A" />

        {/* ================= 2. BLACK UNDER-DRUM CRADLE ================= */}
        {/* Signature Triangular Black Cradle under Drum Hypotenuse */}
        <polygon points="23,35 86,35 86,22 23,28" fill="#1E293B" stroke="#0F172A" strokeWidth={1.2} strokeLinejoin="round" />
        <polygon points="26,33.5 83,33.5 83,24 26,29" fill="#0F172A" />

        {/* ================= 3. MASSIVE GEOMETRIC CONCRETE MIXER DRUM ================= */}
        {/* Drum Base Silhouette */}
        <polygon
          points="20,6 58,3.5 86,17 86,22 23,28"
          fill="#F59E0B"
          stroke="#1E293B"
          strokeWidth={1.4}
          strokeLinejoin="round"
        />

        {/* High Facet on Left */}
        <polygon
          points="20,6 40,4.5 32,20 22,23 23,28"
          fill="#FBBF24"
          stroke="#1E293B"
          strokeWidth={1}
          strokeLinejoin="round"
        />

        {/* Giant Bright Center Facet */}
        <polygon
          points="40,4.5 66,4 60,25 32,20"
          fill="#FEF08A"
          stroke="#1E293B"
          strokeWidth={1}
          strokeLinejoin="round"
        />

        {/* Front Warm Yellow Facet to Pivot */}
        <polygon
          points="66,4 86,17 86,22 60,25"
          fill="#FBBF24"
          stroke="#1E293B"
          strokeWidth={1}
          strokeLinejoin="round"
        />

        {/* Front Drum Drive Pivot Socket */}
        <circle cx="85.5" cy="19.5" r="2.8" fill="#64748B" stroke="#1E293B" strokeWidth={0.9} />
        <circle cx="85.5" cy="19.5" r="1.1" fill="#1E293B" />
        {/* Heavy Support Post Below Pivot */}
        <rect x="83.5" y="22" width="4.5" height="13" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.1} />

        {/* ================= 4. WATER TANK & EQUIPMENT TOWER BEHIND CAB ================= */}
        <rect x="89.5" y="10" width="7.5" height="25" rx="1.2" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.1} />
        {/* Circular Port / Meter on Top */}
        <circle cx="93.2" cy="12.5" r="4.2" fill="#FBBF24" stroke="#1E293B" strokeWidth={1} />
        <circle cx="93.2" cy="12.5" r="2.2" fill="#D97706" />

        {/* ================= 5. CHASSIS, FUEL TANK & RUNNING BOARDS ================= */}
        {/* Central Dark Tool/Fuel Box between rear tandem and front wheels */}
        <rect x="66" y="34.5" width="28" height="7.5" rx="1" fill="#334155" stroke="#1E293B" strokeWidth={1.1} />
        <line x1="68" y1="37.5" x2="92" y2="37.5" stroke="#64748B" strokeWidth={0.8} />

        {/* Rear Yellow Tandem Fender Arch */}
        <polygon points="9,35 15,31 62,31 66,35" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.2} strokeLinejoin="round" />
        <polygon points="11,35 16,32 61,32 64,35" fill="#1E293B" />

        {/* Continuous Lower Step Rail */}
        <path d="M8 35.5 L64 35.5 L67 37.5 L95 37.5 L98 35.5" fill="none" stroke="#F59E0B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

        {/* ================= 6. TRUCK CAB & HOOD ================= */}
        <path
          d="M98 8 L124 8 C125.5 8 126.5 9 127 10.5 L129.5 18 L138 20 C139.5 20 140 21 140 22.5 L140 33 L134 33 L134 35 L98 35 Z"
          fill="#F59E0B"
          stroke="#1E293B"
          strokeWidth={1.4}
          strokeLinejoin="round"
        />

        {/* Cab Roof Sun Visor Bar */}
        <path d="M97 8 L126 8" stroke="#1E293B" strokeWidth={2.4} strokeLinecap="round" />

        {/* Front Wheel Fender Arch (Trapezoid over front wheel cx=114) */}
        <polygon points="101,35 106,31 122,31 127,35" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.2} strokeLinejoin="round" />
        <polygon points="103,35 107,32 121,32 125,35" fill="#1E293B" />

        {/* Windshield & Window (CPA Signature Vibrant Cyan #00B4D8) */}
        <polygon points="101,11 122,11 126,18 101,20" fill="#00B4D8" stroke="#1E293B" strokeWidth={1.1} strokeLinejoin="round" />
        {/* Specular Glare Highlights */}
        <polygon points="106,12 113,12 116,19 109,19" fill="#FFFFFF" opacity={0.75} />
        <polygon points="117,12 120.5,12 124,17.5 121,17.5" fill="#FFFFFF" opacity={0.45} />

        {/* Front Bumper */}
        <rect x="138" y="30" width="5.5" height="5" rx="1.1" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.1} />
        {/* Amber Headlight */}
        <rect x="138.5" y="23.5" width="2" height="3.2" fill="#FEF08A" stroke="#1E293B" strokeWidth={0.6} />

        {/* Dual Hood-Mounted Side Mirrors */}
        <line x1="131" y1="18.5" x2="132.5" y2="13.5" stroke="#1E293B" strokeWidth={1.2} strokeLinecap="round" />
        <rect x="131.5" y="12.5" width="2.6" height="4.2" rx="0.7" fill="#1E293B" />
        <line x1="134" y1="19" x2="135.5" y2="14.5" stroke="#1E293B" strokeWidth={1} strokeLinecap="round" />
        <rect x="134.5" y="13.5" width="2.2" height="3.8" rx="0.7" fill="#1E293B" />

        {/* ================= 7. RUGGED OFF-ROAD KNOBBY WHEELS (ALL TOUCH Y = 56) ================= */}
        {/* REAR TANDEM WHEEL 1 (SPINNING FORWARD CLOCKWISE) */}
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "25px 44px" }}
        >
          <circle cx="25" cy="44" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth={1.3} />
          <path
            d="M25 31.2 L25 32.8 M34.2 35.6 L33.1 36.9 M37.8 44 L36.2 44 M34.2 52.4 L33.1 51.1 M25 56.8 L25 55.2 M15.8 52.4 L16.9 51.1 M12.2 44 L13.8 44 M15.8 35.6 L16.9 36.9 M31.5 32.5 L30.4 33.7 M36.5 40 L34.9 40.5 M36.5 48 L34.9 47.5 M31.5 55.5 L30.4 54.3 M18.5 55.5 L19.6 54.3 M13.5 48 L15.1 47.5 M13.5 40 L15.1 40.5 M18.5 32.5 L19.6 33.7"
            stroke="#0F172A"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <circle cx="25" cy="44" r="10.2" fill="#1E293B" />
          <circle cx="25" cy="44" r="7.2" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.1} />
          <circle cx="25" cy="44" r="3.2" fill="#1E293B" />
          <circle cx="25" cy="44" r="1.4" fill="#F8FAFC" />
          <circle cx="25" cy="38.8" r="0.75" fill="#1E293B" />
          <circle cx="25" cy="49.2" r="0.75" fill="#1E293B" />
          <circle cx="19.8" cy="44" r="0.75" fill="#1E293B" />
          <circle cx="30.2" cy="44" r="0.75" fill="#1E293B" />
          <circle cx="21.3" cy="40.3" r="0.75" fill="#1E293B" />
          <circle cx="28.7" cy="47.7" r="0.75" fill="#1E293B" />
          <circle cx="21.3" cy="47.7" r="0.75" fill="#1E293B" />
          <circle cx="28.7" cy="40.3" r="0.75" fill="#1E293B" />
        </g>

        {/* REAR TANDEM WHEEL 2 (SPINNING FORWARD CLOCKWISE) */}
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "52px 44px" }}
        >
          <circle cx="52" cy="44" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth={1.3} />
          <path
            d="M52 31.2 L52 32.8 M61.2 35.6 L60.1 36.9 M64.8 44 L63.2 44 M61.2 52.4 L60.1 51.1 M52 56.8 L52 55.2 M42.8 52.4 L43.9 51.1 M39.2 44 L40.8 44 M42.8 35.6 L43.9 36.9 M58.5 32.5 L57.4 33.7 M63.5 40 L61.9 40.5 M63.5 48 L61.9 47.5 M58.5 55.5 L57.4 54.3 M45.5 55.5 L46.6 54.3 M40.5 48 L42.1 47.5 M40.5 40 L42.1 40.5 M45.5 32.5 L46.6 33.7"
            stroke="#0F172A"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <circle cx="52" cy="44" r="10.2" fill="#1E293B" />
          <circle cx="52" cy="44" r="7.2" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.1} />
          <circle cx="52" cy="44" r="3.2" fill="#1E293B" />
          <circle cx="52" cy="44" r="1.4" fill="#F8FAFC" />
          <circle cx="52" cy="38.8" r="0.75" fill="#1E293B" />
          <circle cx="52" cy="49.2" r="0.75" fill="#1E293B" />
          <circle cx="46.8" cy="44" r="0.75" fill="#1E293B" />
          <circle cx="57.2" cy="44" r="0.75" fill="#1E293B" />
          <circle cx="48.3" cy="40.3" r="0.75" fill="#1E293B" />
          <circle cx="55.7" cy="47.7" r="0.75" fill="#1E293B" />
          <circle cx="48.3" cy="47.7" r="0.75" fill="#1E293B" />
          <circle cx="55.7" cy="40.3" r="0.75" fill="#1E293B" />
        </g>

        {/* FRONT WHEEL (SPINNING FORWARD CLOCKWISE) */}
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "114px 44px" }}
        >
          <circle cx="114" cy="44" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth={1.3} />
          <path
            d="M114 31.2 L114 32.8 M123.2 35.6 L122.1 36.9 M126.8 44 L125.2 44 M123.2 52.4 L122.1 51.1 M114 56.8 L114 55.2 M104.8 52.4 L105.9 51.1 M101.2 44 L102.8 44 M104.8 35.6 L105.9 36.9 M120.5 32.5 L119.4 33.7 M125.5 40 L123.9 40.5 M125.5 48 L123.9 47.5 M120.5 55.5 L119.4 54.3 M107.5 55.5 L108.6 54.3 M102.5 48 L104.1 47.5 M102.5 40 L104.1 40.5 M107.5 32.5 L108.6 33.7"
            stroke="#0F172A"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <circle cx="114" cy="44" r="10.2" fill="#1E293B" />
          <circle cx="114" cy="44" r="7.2" fill="#F59E0B" stroke="#1E293B" strokeWidth={1.1} />
          <circle cx="114" cy="44" r="3.2" fill="#1E293B" />
          <circle cx="114" cy="44" r="1.4" fill="#F8FAFC" />
          <circle cx="114" cy="38.8" r="0.75" fill="#1E293B" />
          <circle cx="114" cy="49.2" r="0.75" fill="#1E293B" />
          <circle cx="108.8" cy="44" r="0.75" fill="#1E293B" />
          <circle cx="119.2" cy="44" r="0.75" fill="#1E293B" />
          <circle cx="110.3" cy="40.3" r="0.75" fill="#1E293B" />
          <circle cx="117.7" cy="47.7" r="0.75" fill="#1E293B" />
          <circle cx="110.3" cy="47.7" r="0.75" fill="#1E293B" />
          <circle cx="117.7" cy="40.3" r="0.75" fill="#1E293B" />
        </g>
      </g>
    </svg>
  </div>
);

// =========================================================================
// 6. VEHICLE 5: LARGE DUMP-BED / HARVESTER CONSTRUCTION VEHICLE
//    ViewBox: 0 0 148 56 — Wheels and reel touch exact baseline y = 56
// =========================================================================
const LargeDumpBedVehicle: React.FC = () => (
  <div className="relative w-[148px] h-[56px] select-none pointer-events-none drop-shadow-xs">
    <svg viewBox="0 0 148 56" className="w-full h-full overflow-visible">
      {/* Top Discharge Auger Chute */}
      <path d="M10 10 L84 10 L84 14 L14 14 L10 18 Z" fill="#F59E0B" stroke="#1E293B" strokeWidth="1.3" />
      <rect x="8" y="15" width="5.5" height="4.5" fill="#1E293B" />

      {/* Elevated Cyan-Blue Operator Cab */}
      <polygon
        points="88,7 114,7 119,23 88,23"
        fill="#00B4D8"
        stroke="#1E293B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Specular Glare */}
      <polygon points="94,9 100,9 96,21 90,21" fill="#FFFFFF" opacity="0.65" />
      {/* Yellow Cab Roof */}
      <rect x="85" y="4" width="33" height="3.5" rx="1.5" fill="#F59E0B" stroke="#1E293B" strokeWidth="1.3" />

      {/* Main Yellow Hopper / Dump Body */}
      <path
        d="M14 18 L90 18 L90 26 L118 26 L114 43 L22 43 L12 30 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth="1.4"
      />
      {/* Body Decorative Panel Seams */}
      <line x1="52" y1="20" x2="52" y2="41" stroke="#D97706" strokeWidth="1.2" />
      <line x1="84" y1="20" x2="84" y2="41" stroke="#D97706" strokeWidth="1.2" />

      {/* Front Rotary Reel Attachment */}
      <g>
        <line x1="110" y1="37" x2="126" y2="41" stroke="#1E293B" strokeWidth="1.8" />
        <circle cx="126" cy="41" r="8.5" fill="none" stroke="#F59E0B" strokeWidth="1.8" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <line x1="126" y1="33" x2="126" y2="49" stroke="#1E293B" strokeWidth="1.3" />
          <line x1="118" y1="41" x2="134" y2="41" stroke="#1E293B" strokeWidth="1.3" />
          <circle cx="126" cy="41" r="2.8" fill="#1E293B" />
        </g>
      </g>

      {/* REAR WHEEL: Center (38, 43), Radius 13 -> Bottom touches y = 56 */}
      <g>
        <circle cx="38" cy="43" r="13" fill="#1E293B" stroke="#0F172A" strokeWidth="1.4" />
        <circle cx="38" cy="43" r="8" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="38" cy="43" r="3.5" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.8" />
          <line x1="38" y1="35" x2="38" y2="51" stroke="#1E293B" strokeWidth="1" />
          <line x1="30" y1="43" x2="46" y2="43" stroke="#1E293B" strokeWidth="1" />
          <circle cx="38" cy="43" r="1.6" fill="#1E293B" />
        </g>
      </g>

      {/* FRONT WHEEL: Center (96, 43), Radius 13 -> Bottom touches y = 56 */}
      <g>
        <circle cx="96" cy="43" r="13" fill="#1E293B" stroke="#0F172A" strokeWidth="1.4" />
        <circle cx="96" cy="43" r="8" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="96" cy="43" r="3.5" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.8" />
          <line x1="96" y1="35" x2="96" y2="51" stroke="#1E293B" strokeWidth="1" />
          <line x1="88" y1="43" x2="104" y2="43" stroke="#1E293B" strokeWidth="1" />
          <circle cx="96" cy="43" r="1.6" fill="#1E293B" />
        </g>
      </g>
    </svg>
  </div>
);

// =========================================================================
// 4. VEHICLE 3: HEAVY ASPHALT ROAD ROLLER / TANDEM COMPACTOR (FORWARD FACING)
//    ViewBox: 0 0 134 56 — Heavy front steel drum leads forward to the right
// =========================================================================
const AsphaltRollerVehicle: React.FC = () => (
  <div className="relative w-[134px] h-[56px] select-none pointer-events-none drop-shadow-xs">
    <svg viewBox="0 0 134 56" className="w-full h-full overflow-visible">
      {/* REAR ENGINE HOOD (Yellow, on Left) */}
      <path
        d="M20 34 L60 34 L60 48 L17 48 C17 45, 17 37, 20 34 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth="1.4"
      />
      {/* Engine Louvers on Rear Hood */}
      <line x1="22" y1="38" x2="22" y2="44" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="25" y1="38" x2="25" y2="44" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="38" x2="28" y2="44" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />

      {/* Exhaust Stack behind Cab */}
      <line x1="53" y1="34" x2="53" y2="8" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="53" y1="8" x2="54.5" y2="5.5" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" />

      {/* REAR COMPACTOR RUBBER WHEEL: Center (32, 41), Radius 15 -> Bottom touches y = 56 */}
      <g>
        <circle cx="32" cy="41" r="15" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="32" cy="41" r="9" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="32" cy="41" r="4" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.8" />
          <circle cx="32" cy="41" r="1.8" fill="#1E293B" />
          <line x1="32" y1="33" x2="32" y2="49" stroke="#1E293B" strokeWidth="1" />
          <line x1="24" y1="41" x2="40" y2="41" stroke="#1E293B" strokeWidth="1" />
        </g>
      </g>

      {/* Center Articulation Pivot & Step */}
      <rect x="66" y="38" width="16" height="10" rx="1" fill="#334155" stroke="#1E293B" strokeWidth="1.2" />
      <line x1="68" y1="42" x2="80" y2="42" stroke="#64748B" strokeWidth="1" />
      <line x1="68" y1="45" x2="80" y2="45" stroke="#64748B" strokeWidth="1" />

      {/* OPERATOR CABIN (Cyan glass facing FORWARD/RIGHT with Yellow ROPS Frame) */}
      <polygon points="50,36 52,14 74,14 80,36" fill="#00B4D8" stroke="#1E293B" strokeWidth="1.4" strokeLinejoin="round" />
      <polygon points="70,16 75,16 78,34 73,34" fill="#FFFFFF" opacity="0.65" />
      {/* Yellow Roof Canopy */}
      <rect x="50" y="10" width="28" height="4" rx="1.5" fill="#F59E0B" stroke="#1E293B" strokeWidth="1.3" />
      {/* Amber Warning Beacon */}
      <circle cx="64" cy="7.5" r="2.2" fill="#F59E0B" stroke="#EA580C" strokeWidth="0.8" />

      {/* Front Drum Yoke Arm (Extends forward to the right) */}
      <path d="M80 36 L110 36 L114 44 L86 44 Z" fill="#F59E0B" stroke="#1E293B" strokeWidth="1.3" />
      <rect x="94" y="34" width="28" height="6" rx="1" fill="#475569" stroke="#1E293B" strokeWidth="1" />

      {/* FRONT STEEL ROLLER DRUM: Center (108, 38), Radius 18 -> Bottom touches y = 56 */}
      <g>
        <circle cx="108" cy="38" r="18" fill="#1E293B" stroke="#0F172A" strokeWidth="1.6" />
        <circle cx="108" cy="38" r="12" fill="#64748B" stroke="#1E293B" strokeWidth="1.2" />
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="108" cy="38" r="5" fill="#F8FAFC" stroke="#1E293B" strokeWidth="1" />
          <circle cx="108" cy="38" r="2.2" fill="#1E293B" />
          <line x1="108" y1="28" x2="108" y2="48" stroke="#1E293B" strokeWidth="1.1" />
          <line x1="98" y1="38" x2="118" y2="38" stroke="#1E293B" strokeWidth="1.1" />
        </g>
      </g>
    </svg>
  </div>
);

// =========================================================================
// 5. VEHICLE 4: SMALL YELLOW TRACTOR WITH CYAN-BLUE CABIN & REAR HARROW
//    ViewBox: 0 0 130 56 — All tires and tines bottoms align at exact y = 56
// =========================================================================
const SmallTractorVehicle: React.FC = () => (
  <div className="relative w-[130px] h-[56px] select-none pointer-events-none drop-shadow-xs">
    <svg viewBox="0 0 130 56" className="w-full h-full overflow-visible">
      {/* ================= 1. REAR HARROW / CULTIVATOR ATTACHMENT ================= */}
      {/* Hitch connecting arms to tractor rear */}
      <line x1="42" y1="46" x2="52" y2="39" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="46" y1="46" x2="53" y2="42" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" />

      {/* 4 Golden Wheat / Crop Plants on top of bar */}
      <WheatCluster cx={14} baseY={44} height={11} />
      <WheatCluster cx={22} baseY={44} height={10} />
      <WheatCluster cx={30} baseY={44} height={11} />
      <WheatCluster cx={38} baseY={44} height={10} />

      {/* Horizontal Harrow Implement Bar */}
      <rect x="5" y="44" width="41" height="2.5" rx="0.8" fill="#475569" stroke="#1E293B" strokeWidth="1" />

      {/* Cultivator Tines / Teeth (Touch Ground Baseline at y = 56) */}
      {/* Trailing angled rear tine */}
      <line x1="8" y1="46.5" x2="14" y2="56" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" />
      {/* Vertical ground tines */}
      <line x1="18" y1="46.5" x2="19" y2="56" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="24" y1="46.5" x2="25" y2="56" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="30" y1="46.5" x2="31" y2="56" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="36" y1="46.5" x2="37" y2="56" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="42" y1="46.5" x2="43" y2="56" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" />

      {/* ================= 2. TRACTOR BODY ================= */}
      {/* Steps / Battery box below cabin door */}
      <rect x="71" y="41" width="11" height="9" rx="1" fill="#334155" stroke="#1E293B" strokeWidth="1" />
      <line x1="72" y1="44" x2="81" y2="44" stroke="#64748B" strokeWidth="0.8" />
      <line x1="72" y1="47" x2="81" y2="47" stroke="#64748B" strokeWidth="0.8" />

      {/* Yellow Engine Hood */}
      <path
        d="M80 29 L110 29 C113 29, 115 31, 115 34 L115 46 L80 46 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* 3 Vertical Hood Grille Slots (|||) */}
      <line x1="108" y1="33" x2="108" y2="40" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="110.5" y1="33" x2="110.5" y2="40" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="113" y1="33" x2="113" y2="40" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />

      {/* Front Counterweight / Bumper Block */}
      <rect x="115" y="39" width="7.5" height="5.5" rx="1" fill="#F59E0B" stroke="#1E293B" strokeWidth="1.1" />

      {/* Driver Cabin (Cyan-Blue with Frame) */}
      <polygon
        points="55,35 61,12 81,12 83,35"
        fill="#00B4D8"
        stroke="#1E293B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Specular Window Highlight */}
      <polygon points="62,14 67,14 63,33 58,33" fill="#FFFFFF" opacity="0.65" />
      {/* Yellow Cabin Roof Canopy */}
      <rect x="57" y="9" width="28" height="3.5" rx="1.5" fill="#F59E0B" stroke="#1E293B" strokeWidth="1.2" />

      {/* Small Beacon / Flue on Roof Rear */}
      <rect x="80" y="4" width="2" height="5.5" fill="#F59E0B" stroke="#1E293B" strokeWidth="0.8" />
      <circle cx="81" cy="4" r="1.5" fill="#EA580C" />

      {/* Vertical Exhaust Pipe with Rain Flap along Cabin Front */}
      <line x1="81.5" y1="35" x2="81.5" y2="4" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="81.5" y1="4" x2="83" y2="1.5" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" />

      {/* Rear Arched Wheel Fender / Mudguard */}
      <path
        d="M48 40 C48 24, 72 24, 72 40 Z"
        fill="#F59E0B"
        stroke="#1E293B"
        strokeWidth="1.4"
      />

      {/* ================= 3. WHEELS (BOTTOM RESTS AT EXACT Y = 56) ================= */}
      {/* REAR LARGE WHEEL: Center (60, 40), Radius 16 -> Bottom touches y = 56 */}
      <g>
        {/* Outer Black Tire */}
        <circle cx="60" cy="40" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        {/* White Inner Rim */}
        <circle cx="60" cy="40" r="10" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        {/* Spinning Spokes & Hub Assembly */}
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="60" cy="40" r="4.5" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.9" />
          <line x1="60" y1="31" x2="60" y2="49" stroke="#1E293B" strokeWidth="1.1" />
          <line x1="51" y1="40" x2="69" y2="40" stroke="#1E293B" strokeWidth="1.1" />
          <circle cx="60" cy="40" r="2" fill="#1E293B" />
        </g>
      </g>

      {/* FRONT SMALL WHEEL: Center (106, 45), Radius 11 -> Bottom touches y = 56 */}
      <g>
        {/* Outer Black Tire */}
        <circle cx="106" cy="45" r="11" fill="#1E293B" stroke="#0F172A" strokeWidth="1.3" />
        {/* White Inner Rim */}
        <circle cx="106" cy="45" r="6.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
        {/* Spinning Hub Assembly */}
        <g
          className="animate-[spin_1.2s_linear_infinite]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <circle cx="106" cy="45" r="2.8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="0.8" />
          <line x1="106" y1="39" x2="106" y2="51" stroke="#1E293B" strokeWidth="0.9" />
          <line x1="100" y1="45" x2="112" y2="45" stroke="#1E293B" strokeWidth="0.9" />
          <circle cx="106" cy="45" r="1.3" fill="#1E293B" />
        </g>
      </g>
    </svg>
  </div>
);

// =========================================================================
// 6. STATIONARY BACKGROUND: SILO WITH LADDER, BARN WITH DOUBLE X-BRACED DOORS,
//    FACILITY WINDOW STRIP, LOLLIPOP TREES & HORIZONTAL FIELD GUIDELINES
//    ViewBox: 0 0 1440 68 — Elements sit on the bottom edge (y = 68)
// =========================================================================
const ConstructionBackgroundSVG: React.FC = () => (
  <svg
    viewBox="0 0 1440 68"
    preserveAspectRatio="xMidYMax slice"
    className="w-full h-full pointer-events-none select-none"
  >
    {/* ================= 1. GREY MOUNTAIN SILHOUETTES ================= */}
    <g>
      {/* Distant Mountain Peaks */}
      <polygon points="80,68 280,14 480,68" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
      <polygon points="400,68 620,8 840,68" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
      <polygon points="760,68 960,12 1180,68" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
      <polygon points="1040,68 1240,22 1440,68" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />

      {/* Nearer Faceted Mountain Ridges */}
      <polygon points="180,68 340,26 420,68" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      <polygon points="340,26 420,68 300,68" fill="#CBD5E1" opacity="0.4" />
      <polygon points="520,68 700,22 840,68" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      <polygon points="700,22 840,68 780,68" fill="#CBD5E1" opacity="0.4" />
      <polygon points="840,68 1000,30 1120,68" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
    </g>

    {/* ================= 2. YELLOW SUN & DECORATIVE CLOUDS ================= */}
    <g>
      <circle cx="470" cy="18" r="8" fill="#F59E0B" />
      <circle
        cx="470"
        cy="18"
        r="11.5"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
    </g>

    {/* Small Decorative Minimal 2D Clouds */}
    <g stroke="#94A3B8" strokeWidth="0.8" fill="#FFFFFF">
      <path d="M320 22 Q325 18 331 20 Q337 16 342 21 Q346 22 345 27 L317 27 Q315 23 320 22 Z" />
      <path d="M870 26 Q874 22 879 24 Q884 20 888 25 Q892 26 890 31 L867 31 Q865 27 870 26 Z" />
    </g>

    {/* ================= 3. THIN HORIZONTAL FIELD GUIDELINES (AS IN REFERENCE) ================= */}
    <g stroke="#CBD5E1" strokeWidth="0.8">
      <line x1="0" y1="28" x2="1440" y2="28" opacity="0.45" />
      <line x1="0" y1="38" x2="1440" y2="38" opacity="0.5" />
      <line x1="0" y1="46" x2="1440" y2="46" opacity="0.5" />
      <line x1="0" y1="58" x2="1440" y2="58" opacity="0.55" />
    </g>

    {/* ================= 4. INDUSTRIAL COMPLEX & REFERENCE FARM BUILDINGS ================= */}
    <g>
      {/* Windmill / Lattice Mast */}
      <g stroke="#64748B" strokeWidth="1">
        <line x1="535" y1="28" x2="531" y2="68" />
        <line x1="535" y1="28" x2="539" y2="68" />
        <line x1="533" y1="42" x2="537" y2="42" />
        <line x1="532" y1="56" x2="538" y2="56" />
        <circle cx="535" cy="28" r="1.8" fill="#1E293B" stroke="none" />
        <line x1="535" y1="28" x2="535" y2="18" stroke="#1E293B" strokeWidth="1.2" />
        <line x1="535" y1="28" x2="526" y2="33" stroke="#1E293B" strokeWidth="1.2" />
        <line x1="535" y1="28" x2="544" y2="33" stroke="#1E293B" strokeWidth="1.2" />
      </g>

      {/* Cyan-Blue Silo with Vertical Access Ladder on Left */}
      <g>
        {/* Access Ladder (Stiles and Rungs) */}
        <line x1="551" y1="28" x2="551" y2="68" stroke="#64748B" strokeWidth="0.9" />
        <line x1="555" y1="28" x2="555" y2="68" stroke="#64748B" strokeWidth="0.9" />
        <line x1="551" y1="34" x2="555" y2="34" stroke="#64748B" strokeWidth="0.9" />
        <line x1="551" y1="42" x2="555" y2="42" stroke="#64748B" strokeWidth="0.9" />
        <line x1="551" y1="50" x2="555" y2="50" stroke="#64748B" strokeWidth="0.9" />
        <line x1="551" y1="58" x2="555" y2="58" stroke="#64748B" strokeWidth="0.9" />
        <line x1="551" y1="64" x2="555" y2="64" stroke="#64748B" strokeWidth="0.9" />

        {/* Silo Body */}
        <rect
          x="556"
          y="24"
          width="16"
          height="44"
          rx="8"
          fill="#00B4D8"
          stroke="#1E293B"
          strokeWidth="1.1"
        />
        <line x1="560" y1="28" x2="560" y2="64" stroke="#38BDF8" strokeWidth="1.2" />
        <line x1="556" y1="38" x2="572" y2="38" stroke="#1E293B" strokeWidth="0.8" />
        <line x1="556" y1="52" x2="572" y2="52" stroke="#1E293B" strokeWidth="0.8" />
      </g>

      {/* Barn Building with Yellow Gabled Roof & TWO DOUBLE X-BRACED DOORS */}
      <g>
        {/* Barn White Wall */}
        <rect x="578" y="32" width="56" height="36" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.1" />
        {/* Yellow Gabled Fascia Trim & Canopy */}
        <polygon points="574,32 606,16 638,32" fill="#F59E0B" stroke="#1E293B" strokeWidth="1.1" />
        <line x1="578" y1="32" x2="634" y2="32" stroke="#1E293B" strokeWidth="1.1" />

        {/* Barn Door 1 (Left) with Yellow "X" Cross-Brace */}
        <rect x="583" y="36" width="20" height="32" fill="#FBBF24" stroke="#1E293B" strokeWidth="1" />
        <line x1="584" y1="37" x2="602" y2="67" stroke="#D97706" strokeWidth="1.8" />
        <line x1="602" y1="37" x2="584" y2="67" stroke="#D97706" strokeWidth="1.8" />

        {/* Barn Door 2 (Right) with Yellow "X" Cross-Brace */}
        <rect x="607" y="36" width="20" height="32" fill="#FBBF24" stroke="#1E293B" strokeWidth="1" />
        <line x1="608" y1="37" x2="626" y2="67" stroke="#D97706" strokeWidth="1.8" />
        <line x1="626" y1="37" x2="608" y2="67" stroke="#D97706" strokeWidth="1.8" />
      </g>

      {/* Facility Shed with Cyan-Blue Window Strip */}
      <g>
        <rect x="638" y="38" width="68" height="30" fill="#F8FAFC" stroke="#1E293B" strokeWidth="1.1" />
        <line x1="638" y1="38" x2="706" y2="38" stroke="#1E293B" strokeWidth="1.1" />
        {/* Cyan Horizontal Window Strip */}
        <rect x="646" y="44" width="52" height="7.5" fill="#00B4D8" stroke="#1E293B" strokeWidth="0.9" />
        {/* Window Mullions */}
        <line x1="659" y1="44" x2="659" y2="51.5" stroke="#FFFFFF" strokeWidth="0.9" />
        <line x1="672" y1="44" x2="672" y2="51.5" stroke="#FFFFFF" strokeWidth="0.9" />
        <line x1="685" y1="44" x2="685" y2="51.5" stroke="#FFFFFF" strokeWidth="0.9" />
      </g>

      {/* Stylized Lollipop Reference Trees on Rolling Hill */}
      <g>
        <line x1="410" y1="54" x2="410" y2="68" stroke="#64748B" strokeWidth="1.2" />
        <circle cx="410" cy="50" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="0.7" />

        <line x1="430" y1="58" x2="430" y2="68" stroke="#64748B" strokeWidth="1.2" />
        <circle cx="430" cy="54" r="4.2" fill="#F59E0B" stroke="#D97706" strokeWidth="0.7" />

        <line x1="485" y1="54" x2="485" y2="68" stroke="#64748B" strokeWidth="1.2" />
        <circle cx="485" cy="49" r="5.5" fill="#FBBF24" stroke="#D97706" strokeWidth="0.7" />

        {/* Trees to the right of Facility Shed */}
        <line x1="722" y1="48" x2="722" y2="68" stroke="#64748B" strokeWidth="1.2" />
        <circle cx="722" cy="44" r="6" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />

        <line x1="742" y1="54" x2="742" y2="68" stroke="#64748B" strokeWidth="1.2" />
        <circle cx="742" cy="49" r="7.5" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />
      </g>
    </g>
  </svg>
);

// =========================================================================
// 8. MAIN COMPONENT: NON-COLLIDING 7-VEHICLE ROAD INFRASTRUCTURE CONVOY
// =========================================================================
export const ConstructionAnimation: React.FC = () => {
  return (
    <section
      aria-label="C P Arora Heavy Infrastructure Construction Animation"
      className="w-full bg-white relative overflow-hidden select-none border-b border-slate-200/80 pointer-events-none"
    >
      {/* Embedded Fail-Safe Styles to guarantee smooth non-colliding loop regardless of cache */}
      <style>{`
        @keyframes constructionDriveSmooth {
          0% {
            transform: translate3d(-240px, 0, 0);
          }
          100% {
            transform: translate3d(calc(100vw + 240px), 0, 0);
          }
        }
      `}</style>

      {/* Full Viewport-Width Stage: Matches Upper Stats Ribbon Height */}
      <div className="relative w-full h-[78px] sm:h-[84px] overflow-hidden">
        {/* Stationary Minimal 2D Vector Background — Bottom Aligned at y=Baseline */}
        <div className="absolute inset-x-0 bottom-[14px] h-[68px] z-0 pointer-events-none">
          <ConstructionBackgroundSVG />
        </div>

        {/* ================================================================== */}
        {/* GROUND BASELINE & ROAD TEXTURE LINES                                */}
        {/* ================================================================== */}
        {/* Main Solid Ground Baseline: Full Screen Bezel-to-Bezel */}
        <div className="absolute inset-x-0 bottom-[14px] h-[1.5px] bg-[#94A3B8] z-5 pointer-events-none" />
        {/* Secondary Wheel Track Markings */}
        <div className="absolute inset-x-0 bottom-[9px] h-[1px] bg-[#CBD5E1]/70 z-5 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-[5px] h-[0.75px] bg-[#E2E8F0]/80 z-5 pointer-events-none" />

        {/* ================================================================== */}
        {/* HORIZONTAL ROADWAY TRACK: STARTS FROM BEZEL TO BEZEL (0 TO 100VW)  */}
        {/* Anchored at bottom-[14px] — All tires sit DIRECTLY ON baseline     */}
        {/* Scaled responsively on small screens so vehicles never crowd       */}
        {/* ================================================================== */}
        <div
          className="absolute inset-x-0 bottom-[14px] h-[56px] z-10 pointer-events-none w-full scale-[0.85] sm:scale-100 origin-bottom"
          style={{ transform: "translateZ(0)" }}
        >
          {/* VEHICLE 1: HIGHWAY ASPHALT DUMP TRUCK (LEAD VEHICLE, -30s offset) */}
          <div
            className="absolute bottom-0 will-change-transform animate-construction-v1"
            style={{
              animation: "constructionDriveSmooth 35s linear infinite -30s",
            }}
          >
            <HighwayDumpTruckVehicle />
          </div>

          {/* VEHICLE 2: ICONIC JCB 3DX BACKHOE LOADER (-25s offset) */}
          <div
            className="absolute bottom-0 will-change-transform animate-construction-v2"
            style={{
              animation: "constructionDriveSmooth 35s linear infinite -25s",
            }}
          >
            <JCBBackhoeVehicle />
          </div>

          {/* VEHICLE 3: HEAVY CRAWLER CRANE WITH TELESCOPIC BOOM & HOOK (-20s offset) */}
          <div
            className="absolute bottom-0 will-change-transform animate-construction-v3"
            style={{
              animation: "constructionDriveSmooth 35s linear infinite -20s",
            }}
          >
            <CrawlerCraneVehicle />
          </div>

          {/* VEHICLE 4: CONCRETE TRANSIT MIXER TRUCK WITH REVOLVING DRUM (-15s offset) */}
          <div
            className="absolute bottom-0 will-change-transform animate-construction-v4"
            style={{
              animation: "constructionDriveSmooth 35s linear infinite -15s",
            }}
          >
            <ConcreteMixerVehicle />
          </div>

          {/* VEHICLE 5: LARGE DUMP-BED / HARVESTER VEHICLE (-10s offset) */}
          <div
            className="absolute bottom-0 will-change-transform animate-construction-v5"
            style={{
              animation: "constructionDriveSmooth 35s linear infinite -10s",
            }}
          >
            <LargeDumpBedVehicle />
          </div>

          {/* VEHICLE 6: HEAVY ASPHALT ROAD ROLLER / COMPACTOR (-5s offset) */}
          <div
            className="absolute bottom-0 will-change-transform animate-construction-v6"
            style={{
              animation: "constructionDriveSmooth 35s linear infinite -5s",
            }}
          >
            <AsphaltRollerVehicle />
          </div>

          {/* VEHICLE 7: SMALL TRACTOR VEHICLE WITH HARROW (0s offset) */}
          <div
            className="absolute bottom-0 will-change-transform animate-construction-v7"
            style={{
              animation: "constructionDriveSmooth 35s linear infinite 0s",
            }}
          >
            <SmallTractorVehicle />
          </div>
        </div>
      </div>

      {/* Accessible Reduced Motion Alternative */}
      <noscript>
        <div className="sr-only">
          Construction animation showing C P Arora yellow paving and tractor machinery moving along the roadbed.
        </div>
      </noscript>
    </section>
  );
};

export default ConstructionAnimation;
