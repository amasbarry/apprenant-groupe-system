class Assigne {
    private id_assigne: number;
    private id_groupe: number | null;
    private id_TP: number | null;
    private date: Date | null;

    constructor(id_assigne: number, id_groupe: number | null, id_TP: number | null, date: Date | null) {
        this.id_assigne = id_assigne;
        this.id_groupe = id_groupe;
        this.id_TP = id_TP;
        this.date = date;
    }

    // Getters
    getIdAssigne(): number {
        return this.id_assigne;
    }

    getIdGroupe(): number | null {
        return this.id_groupe;
    }

    getIdTP(): number | null {
        return this.id_TP;
    }

    getDate(): Date | null {
        return this.date;
    }

    // Setters
    setIdAssigne(id_assigne: number): void {
        this.id_assigne = id_assigne;
    }

    setIdGroupe(id_groupe: number | null): void {
        this.id_groupe = id_groupe;
    }

    setIdTP(id_TP: number | null): void {
        this.id_TP = id_TP;
    }

    setDate(date: Date | null): void {
        this.date = date;
    }
}
