export type PositionType =
  | "69 sex position"
  | "anal sex"
  | "blowjob"
  | "anilingus"
  | "cowgirl"
  | "criss cross"
  | "cunnilingus"
  | "doggy style"
  | "face to face"
  | "from behind"
  | "kneeling"
  | "lying down"
  | "man on top"
  | "oral sex"
  | "reverse"
  | "right angle"
  | "sideways"
  | "sitting"
  | "standing"
  | "woman on top";

export type Complexity = "crazy" | "easy" | "hard" | "medium";

export type Activity = "man active" | "woman active";

export type Stimulation = "clitoral" | "g-spot";

export type Dangerousness = "none" | "safe";

export type Penetration = "no penetration";

export type Location =
  | "bed"
  | "chair"
  | "floor"
  | "kitchen"
  | "sofa"
  | "table"
  | "wall"
  | "window"
  | "anywhere"
  | "other";

export type Position = {
  id: number;
  name: string;
  description: string;
  image: string;
  positionType: PositionType[];
  penetration: Penetration;
  location: Location;
  dangerousness: Dangerousness;
  complexity: Complexity;
  activity: Activity[];
  stimulation: Stimulation[];
  credits: {
    source: string;
    url: string;
  };
};

export const complexityTranslations = {
  crazy: "louco",
  easy: "fácil",
  hard: "difícil",
  medium: "médio",
};

export const activityTranslations = {
  "man active": "Homem ativo",
  "woman active": "Mulher ativa",
};

export const stimulationTranslations = {
  clitoral: "clitoriano",
  "g-spot": "ponto G",
};

export const positionTypeTranslations = {
  "69 sex position": "posição sexual 69",
  "anal sex": "sexo anal",
  blowjob: "sexo oral",
  anilingus: "anilingus",
  cowgirl: "cowgirl",
  "criss cross": "cruzado",
  cunnilingus: "cunnilingus",
  "doggy style": "estilo cachorro",
  "face to face": "cara a cara",
  "from behind": "por trás",
  kneeling: "de joelhos",
  "lying down": "deitado",
  "man on top": "homem por cima",
  "oral sex": "sexo oral",
  reverse: "reverso",
  "right angle": "ângulo reto",
  sideways: "de lado",
  sitting: "sentado",
  standing: "em pé",
  "woman on top": "mulher por cima",
};

export const penetrationTranslations = {
  "no penetration": "sem penetração",
};

export const locationTranslations = {
  bed: "cama",
  chair: "cadeira",
  floor: "chão",
  kitchen: "cozinha",
  sofa: "sofá",
  table: "mesa",
  wall: "parede",
  window: "janela",
  anywhere: "qualquer lugar",
  other: "outro",
};

export const dangerousnessTranslations = {
  none: "Nenhum",
  safe: "Seguro",
};
