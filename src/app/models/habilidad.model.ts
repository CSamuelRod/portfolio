
export type Idioma = 'es' | 'en' | 'fr';

export interface Habilidad {
  id: number;
  nombre: string;
  categoria: {
    es: string;
    en: string;
    fr: string;
  };
  descripcion: {
    es: string;
    en: string;
    fr: string;
  };
  top: boolean;
  estado: string;
}
