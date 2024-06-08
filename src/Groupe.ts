export class Groupe {
    private id_groupe: number;
    private id_tp: number | null;
    private nom: string | null;
    private descriptions: string | null;
    private date: Date | null;

    constructor(id_groupe: number, id_tp: number | null, nom: string | null, descriptions: string | null, date: Date | null) {
        this.id_groupe = id_groupe;
        this.id_tp = id_tp;
        this.nom = nom;
        this.descriptions = descriptions;
        this.date = date;
    }

    // Getters
    getIdGroupe(): number {
        return this.id_groupe;
    }

    getIdTP(): number | null {
        return this.id_tp;
    }

    getNom(): string | null {
        return this.nom;
    }

    getDescriptions(): string | null {
        return this.descriptions;
    }

    getDate(): Date | null {
        return this.date;
    }

    // Setters
    setIdGroupe(id_groupe: number): void {
        this.id_groupe = id_groupe;
    }

    setIdTP(id_tp: number | null): void {
        this.id_tp = id_tp;
    }

    setNom(nom: string | null): void {
        this.nom = nom;
    }

    setDescriptions(descriptions: string | null): void {
        this.descriptions = descriptions;
    }

    setDate(date: Date | null): void {
        this.date = date;
    }
}
