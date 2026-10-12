interface TechnologyEntry {
  name: string;
  context: string;
  anchor: string;
}

interface TechnologyCategory {
  title: string;
  code: string;
  description: string;
  items: TechnologyEntry[];
}

const TECHNICAL_INDEX_DATA: TechnologyCategory[] = [
  {
    title: "Code & Scripting",
    code: "01 / CODE",
    description: "Languages and syntax applied across game logic, native apps, and web applications.",
    items: [
      { name: "Java", context: "Warung Android App", anchor: "#work" },
      { name: "JavaScript", context: "PharmaTrack / Trust Your Friends", anchor: "#work" },
      { name: "C#", context: "Project HUE 3D Shooter", anchor: "#work" },
      { name: "Luau", context: "Roblox Co-op Quest System", anchor: "#work" },
      { name: "HTML & CSS", context: "Trust Your Friends Web Interface", anchor: "#work" },
      { name: "XML", context: "Android Studio Layouts", anchor: "#work" },
    ],
  },
  {
    title: "Engines, 3D & Tools",
    code: "02 / ENGINES & 3D",
    description: "Interactive authoring environments, 3D modeling, and native mobile toolchains.",
    items: [
      { name: "Roblox Studio", context: "Industrial Escape Room Mechanics", anchor: "#work" },
      { name: "Unity Engine", context: "Project HUE Third-Person Controller", anchor: "#work" },
      { name: "Blender 3D", context: "3D Environments & Prop Studies", anchor: "#work" },
      { name: "Android Studio", context: "Warung Ordering App Native Build", anchor: "#work" },
      { name: "Git & GitHub", context: "Version Control & Source Repositories", anchor: "#work" },
    ],
  },
  {
    title: "Security, Forensics & OS",
    code: "03 / FORENSICS & SECURITY",
    description: "Digital forensic inspection, packet capture analysis, steganography, and systems.",
    items: [
      { name: "Autopsy", context: "Disk Image Artifact Carving", anchor: "#work" },
      { name: "FTK Imager", context: "Physical Bit-Stream Disk Mounting", anchor: "#work" },
      { name: "Wireshark", context: "PCAP Stream Inspection", anchor: "#work" },
      { name: "NetworkMiner", context: "Network File Reconstruction", anchor: "#work" },
      { name: "AperiSolve", context: "Image Steganography Extraction", anchor: "#work" },
      { name: "ExifTool", context: "Metadata Timestamp Verification", anchor: "#work" },
      { name: "Burp Suite", context: "HTTP Web Traffic Interception (CTF)", anchor: "#work" },
      { name: "CyberChef", context: "Base64 & Cryptographic Decoding (CTF)", anchor: "#work" },
      { name: "Linux / Bash", context: "CLI Analysis & Environment Scripts", anchor: "#work" },
    ],
  },
];

export default function TechnicalIndex() {
  return (
    <section
      id="index"
      aria-labelledby="technical-index-title"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-paper-rule bg-paper"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Intro */}
        <div className="mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
            Contextual Reference
          </span>
          <h2
            id="technical-index-title"
            className="font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight mt-1 mb-2"
          >
            Technical Index
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg max-w-2xl">
            A structured index of technologies, development engines, and investigative tools
            utilized across the documented projects and examinations.
          </p>
        </div>

        {/* 3-Column Typographic Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 border-t border-paper-rule pt-8">
          {TECHNICAL_INDEX_DATA.map((category) => (
            <div key={category.code} className="flex flex-col">
              {/* Category Header */}
              <div className="pb-4 border-b border-paper-rule mb-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent-editorial font-bold block mb-1">
                  {category.code}
                </span>
                <h3 className="font-display font-bold text-lg text-ink">
                  {category.title}
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Items List */}
              <ul className="divide-y divide-paper-rule">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="py-2.5 px-2 -mx-2 rounded-xs flex flex-col gap-0.5 group transition-colors duration-150 hover:bg-paper-warm/80"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-sm font-semibold text-ink group-hover:text-accent-editorial transition-colors duration-150">
                        {item.name}
                      </span>
                      <a
                        href={item.anchor}
                        className="text-[11px] font-mono text-ink-muted group-hover:text-ink transition-colors text-right truncate max-w-[170px]"
                        title={`View ${item.context}`}
                      >
                        {item.context}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
