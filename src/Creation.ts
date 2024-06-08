export class Creation {
    private id_creation: number;
    private id_form: number | null;
    private id_TP: number | null;

    constructor(id_creation: number, id_form: number | null, id_TP: number | null) {
        this.id_creation = id_creation;
        this.id_form = id_form;
        this.id_TP = id_TP;
    }

    // Getters
    getIdCreation(): number {
        return this.id_creation;
    }

    getIdForm(): number | null {
        return this.id_form;
    }

    getIdTP(): number | null {
        return this.id_TP;
    }

    // Setters
    setIdCreation(id_creation: number): void {
        this.id_creation = id_creation;
    }

    setIdForm(id_form: number | null): void {
        this.id_form = id_form;
    }

    setIdTP(id_TP: number | null): void {
        this.id_TP = id_TP;
    }
}
