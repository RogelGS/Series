import { Genero } from "./genero";
import { Pais } from "./pais";

export class Serie {
    id: number;
    nombre: String;
    genero: Genero;
    capitulos: number;
    temporadas: number;
    pais: Pais;
}