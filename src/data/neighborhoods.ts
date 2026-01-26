export interface Neighborhood {
  id: string;           // URL slug
  nameEs: string;       // Spanish display name
  nameEn: string;       // English display name
  district: string;     // District name
  districtId: string;   // District ID
}

export interface District {
  id: string;
  nameEs: string;
  nameEn: string;
  neighborhoods: Neighborhood[];
}

// All 73 Barcelona neighborhoods organized by district
export const districts: District[] = [
  {
    id: "ciutat-vella",
    nameEs: "Ciutat Vella",
    nameEn: "Old City",
    neighborhoods: [
      { id: "el-raval", nameEs: "El Raval", nameEn: "El Raval", district: "Ciutat Vella", districtId: "ciutat-vella" },
      { id: "barri-gotic", nameEs: "El Gòtic", nameEn: "Gothic Quarter", district: "Ciutat Vella", districtId: "ciutat-vella" },
      { id: "la-barceloneta", nameEs: "La Barceloneta", nameEn: "La Barceloneta", district: "Ciutat Vella", districtId: "ciutat-vella" },
      { id: "el-born", nameEs: "Sant Pere, Santa Caterina i la Ribera", nameEn: "El Born", district: "Ciutat Vella", districtId: "ciutat-vella" },
    ]
  },
  {
    id: "eixample",
    nameEs: "Eixample",
    nameEn: "Eixample",
    neighborhoods: [
      { id: "dreta-eixample", nameEs: "La Dreta de l'Eixample", nameEn: "Right Eixample", district: "Eixample", districtId: "eixample" },
      { id: "antiga-esquerra-eixample", nameEs: "L'Antiga Esquerra de l'Eixample", nameEn: "Old Left Eixample", district: "Eixample", districtId: "eixample" },
      { id: "nova-esquerra-eixample", nameEs: "La Nova Esquerra de l'Eixample", nameEn: "New Left Eixample", district: "Eixample", districtId: "eixample" },
      { id: "sant-antoni", nameEs: "Sant Antoni", nameEn: "Sant Antoni", district: "Eixample", districtId: "eixample" },
      { id: "sagrada-familia", nameEs: "Sagrada Família", nameEn: "Sagrada Familia", district: "Eixample", districtId: "eixample" },
    ]
  },
  {
    id: "sants-montjuic",
    nameEs: "Sants-Montjuïc",
    nameEn: "Sants-Montjuïc",
    neighborhoods: [
      { id: "sants", nameEs: "Sants", nameEn: "Sants", district: "Sants-Montjuïc", districtId: "sants-montjuic" },
      { id: "hostafrancs", nameEs: "Hostafrancs", nameEn: "Hostafrancs", district: "Sants-Montjuïc", districtId: "sants-montjuic" },
      { id: "la-bordeta", nameEs: "La Bordeta", nameEn: "La Bordeta", district: "Sants-Montjuïc", districtId: "sants-montjuic" },
      { id: "poble-sec", nameEs: "Poble Sec", nameEn: "Poble Sec", district: "Sants-Montjuïc", districtId: "sants-montjuic" },
      { id: "marina-prat-vermell", nameEs: "La Marina del Prat Vermell", nameEn: "Marina del Prat Vermell", district: "Sants-Montjuïc", districtId: "sants-montjuic" },
      { id: "marina-port", nameEs: "La Marina de Port", nameEn: "Marina de Port", district: "Sants-Montjuïc", districtId: "sants-montjuic" },
    ]
  },
  {
    id: "les-corts",
    nameEs: "Les Corts",
    nameEn: "Les Corts",
    neighborhoods: [
      { id: "les-corts", nameEs: "Les Corts", nameEn: "Les Corts", district: "Les Corts", districtId: "les-corts" },
      { id: "maternitat-sant-ramon", nameEs: "La Maternitat i Sant Ramon", nameEn: "La Maternitat i Sant Ramon", district: "Les Corts", districtId: "les-corts" },
      { id: "pedralbes", nameEs: "Pedralbes", nameEn: "Pedralbes", district: "Les Corts", districtId: "les-corts" },
    ]
  },
  {
    id: "sarria-sant-gervasi",
    nameEs: "Sarrià-Sant Gervasi",
    nameEn: "Sarrià-Sant Gervasi",
    neighborhoods: [
      { id: "sarria", nameEs: "Sarrià", nameEn: "Sarrià", district: "Sarrià-Sant Gervasi", districtId: "sarria-sant-gervasi" },
      { id: "les-tres-torres", nameEs: "Les Tres Torres", nameEn: "Les Tres Torres", district: "Sarrià-Sant Gervasi", districtId: "sarria-sant-gervasi" },
      { id: "sant-gervasi-bonanova", nameEs: "Sant Gervasi - La Bonanova", nameEn: "Sant Gervasi - La Bonanova", district: "Sarrià-Sant Gervasi", districtId: "sarria-sant-gervasi" },
      { id: "sant-gervasi-galvany", nameEs: "Sant Gervasi - Galvany", nameEn: "Sant Gervasi - Galvany", district: "Sarrià-Sant Gervasi", districtId: "sarria-sant-gervasi" },
      { id: "putxet-farro", nameEs: "El Putxet i el Farró", nameEn: "El Putxet i el Farró", district: "Sarrià-Sant Gervasi", districtId: "sarria-sant-gervasi" },
      { id: "vallvidrera-tibidabo", nameEs: "Vallvidrera, el Tibidabo i les Planes", nameEn: "Vallvidrera, Tibidabo & Les Planes", district: "Sarrià-Sant Gervasi", districtId: "sarria-sant-gervasi" },
    ]
  },
  {
    id: "gracia",
    nameEs: "Gràcia",
    nameEn: "Gràcia",
    neighborhoods: [
      { id: "vila-de-gracia", nameEs: "Vila de Gràcia", nameEn: "Vila de Gràcia", district: "Gràcia", districtId: "gracia" },
      { id: "camp-grassot", nameEs: "El Camp d'en Grassot i Gràcia Nova", nameEn: "Camp d'en Grassot & Gràcia Nova", district: "Gràcia", districtId: "gracia" },
      { id: "la-salut", nameEs: "La Salut", nameEn: "La Salut", district: "Gràcia", districtId: "gracia" },
      { id: "vallcarca-penitents", nameEs: "Vallcarca i els Penitents", nameEn: "Vallcarca & Els Penitents", district: "Gràcia", districtId: "gracia" },
    ]
  },
  {
    id: "horta-guinardo",
    nameEs: "Horta-Guinardó",
    nameEn: "Horta-Guinardó",
    neighborhoods: [
      { id: "baix-guinardo", nameEs: "El Baix Guinardó", nameEn: "Baix Guinardó", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "can-baro", nameEs: "Can Baró", nameEn: "Can Baró", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "el-guinardo", nameEs: "El Guinardó", nameEn: "El Guinardó", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "font-den-fargues", nameEs: "La Font d'en Fargues", nameEn: "La Font d'en Fargues", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "el-carmel", nameEs: "El Carmel", nameEn: "El Carmel", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "la-teixonera", nameEs: "La Teixonera", nameEn: "La Teixonera", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "sant-genis-agudells", nameEs: "Sant Genís dels Agudells", nameEn: "Sant Genís dels Agudells", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "montbau", nameEs: "Montbau", nameEn: "Montbau", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "vall-dhebron", nameEs: "La Vall d'Hebron", nameEn: "Vall d'Hebron", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "la-clota", nameEs: "La Clota", nameEn: "La Clota", district: "Horta-Guinardó", districtId: "horta-guinardo" },
      { id: "horta", nameEs: "Horta", nameEn: "Horta", district: "Horta-Guinardó", districtId: "horta-guinardo" },
    ]
  },
  {
    id: "nou-barris",
    nameEs: "Nou Barris",
    nameEn: "Nou Barris",
    neighborhoods: [
      { id: "vilapicina-torre-llobeta", nameEs: "Vilapicina i la Torre Llobeta", nameEn: "Vilapicina & Torre Llobeta", district: "Nou Barris", districtId: "nou-barris" },
      { id: "porta", nameEs: "Porta", nameEn: "Porta", district: "Nou Barris", districtId: "nou-barris" },
      { id: "turo-peira", nameEs: "El Turó de la Peira", nameEn: "Turó de la Peira", district: "Nou Barris", districtId: "nou-barris" },
      { id: "can-peguera", nameEs: "Can Peguera", nameEn: "Can Peguera", district: "Nou Barris", districtId: "nou-barris" },
      { id: "la-guineueta", nameEs: "La Guineueta", nameEn: "La Guineueta", district: "Nou Barris", districtId: "nou-barris" },
      { id: "canyelles", nameEs: "Canyelles", nameEn: "Canyelles", district: "Nou Barris", districtId: "nou-barris" },
      { id: "les-roquetes", nameEs: "Les Roquetes", nameEn: "Les Roquetes", district: "Nou Barris", districtId: "nou-barris" },
      { id: "verdun", nameEs: "Verdun", nameEn: "Verdun", district: "Nou Barris", districtId: "nou-barris" },
      { id: "la-prosperitat", nameEs: "La Prosperitat", nameEn: "La Prosperitat", district: "Nou Barris", districtId: "nou-barris" },
      { id: "trinitat-nova", nameEs: "La Trinitat Nova", nameEn: "Trinitat Nova", district: "Nou Barris", districtId: "nou-barris" },
      { id: "torre-baro", nameEs: "Torre Baró", nameEn: "Torre Baró", district: "Nou Barris", districtId: "nou-barris" },
      { id: "ciutat-meridiana", nameEs: "Ciutat Meridiana", nameEn: "Ciutat Meridiana", district: "Nou Barris", districtId: "nou-barris" },
      { id: "vallbona", nameEs: "Vallbona", nameEn: "Vallbona", district: "Nou Barris", districtId: "nou-barris" },
    ]
  },
  {
    id: "sant-andreu",
    nameEs: "Sant Andreu",
    nameEn: "Sant Andreu",
    neighborhoods: [
      { id: "trinitat-vella", nameEs: "La Trinitat Vella", nameEn: "Trinitat Vella", district: "Sant Andreu", districtId: "sant-andreu" },
      { id: "baro-de-viver", nameEs: "Baró de Viver", nameEn: "Baró de Viver", district: "Sant Andreu", districtId: "sant-andreu" },
      { id: "el-bon-pastor", nameEs: "El Bon Pastor", nameEn: "El Bon Pastor", district: "Sant Andreu", districtId: "sant-andreu" },
      { id: "sant-andreu", nameEs: "Sant Andreu", nameEn: "Sant Andreu", district: "Sant Andreu", districtId: "sant-andreu" },
      { id: "la-sagrera", nameEs: "La Sagrera", nameEn: "La Sagrera", district: "Sant Andreu", districtId: "sant-andreu" },
      { id: "congres-indians", nameEs: "El Congrés i els Indians", nameEn: "Congrés & Els Indians", district: "Sant Andreu", districtId: "sant-andreu" },
      { id: "navas", nameEs: "Navas", nameEn: "Navas", district: "Sant Andreu", districtId: "sant-andreu" },
    ]
  },
  {
    id: "sant-marti",
    nameEs: "Sant Martí",
    nameEn: "Sant Martí",
    neighborhoods: [
      { id: "camp-arpa-clot", nameEs: "El Camp de l'Arpa del Clot", nameEn: "Camp de l'Arpa del Clot", district: "Sant Martí", districtId: "sant-marti" },
      { id: "el-clot", nameEs: "El Clot", nameEn: "El Clot", district: "Sant Martí", districtId: "sant-marti" },
      { id: "parc-llacuna-poblenou", nameEs: "El Parc i la Llacuna del Poblenou", nameEn: "Parc & Llacuna del Poblenou", district: "Sant Martí", districtId: "sant-marti" },
      { id: "vila-olimpica", nameEs: "La Vila Olímpica del Poblenou", nameEn: "Olympic Village", district: "Sant Martí", districtId: "sant-marti" },
      { id: "el-poblenou", nameEs: "El Poblenou", nameEn: "Poblenou", district: "Sant Martí", districtId: "sant-marti" },
      { id: "diagonal-mar", nameEs: "Diagonal Mar i el Front Marítim del Poblenou", nameEn: "Diagonal Mar", district: "Sant Martí", districtId: "sant-marti" },
      { id: "besos-maresme", nameEs: "El Besòs i el Maresme", nameEn: "Besòs & Maresme", district: "Sant Martí", districtId: "sant-marti" },
      { id: "provencals-poblenou", nameEs: "Provençals del Poblenou", nameEn: "Provençals del Poblenou", district: "Sant Martí", districtId: "sant-marti" },
      { id: "sant-marti-provencals", nameEs: "Sant Martí de Provençals", nameEn: "Sant Martí de Provençals", district: "Sant Martí", districtId: "sant-marti" },
      { id: "verneda-pau", nameEs: "La Verneda i la Pau", nameEn: "La Verneda & La Pau", district: "Sant Martí", districtId: "sant-marti" },
    ]
  },
];

// Flat list of all neighborhoods for easy iteration
export const allNeighborhoods: Neighborhood[] = districts.flatMap(d => d.neighborhoods);

// Get neighborhood by ID
export function getNeighborhoodById(id: string): Neighborhood | undefined {
  return allNeighborhoods.find(n => n.id === id);
}

// Get neighborhood name by language
export function getNeighborhoodName(neighborhood: Neighborhood, lang: 'es' | 'en'): string {
  return lang === 'es' ? neighborhood.nameEs : neighborhood.nameEn;
}

// Get district name by language
export function getDistrictName(district: District, lang: 'es' | 'en'): string {
  return lang === 'es' ? district.nameEs : district.nameEn;
}

// Get static params for Astro
export function getNeighborhoodStaticPaths() {
  return allNeighborhoods.map(n => ({
    params: { barrio: n.id, neighborhood: n.id },
    props: { neighborhood: n }
  }));
}
