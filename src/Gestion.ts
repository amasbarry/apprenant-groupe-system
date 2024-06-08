class Gestion {
    private id_gestion: number;
    private id_form: number | null;
    private id_groupe: number | null;
    private date_modification: Date | null;
    private action: 'Ajout' | 'Modification' | 'Suppression' | null;

    constructor(id_gestion: number, id_form: number | null, id_groupe: number | null, date_modification: Date | null, action: 'Ajout' | 'Modification' | 'Suppression' | null) {
        this.id_gestion = id_gestion;
        this.id_form = id_form;
        this.id_groupe = id_groupe;
        this.date_modification = date_modification;
        this.action = action;
    }

    // Getters
    getIdGestion(): number {
        return this.id_gestion;
    }

    getIdForm(): number | null {
        return this.id_form;
    }

    getIdGroupe(): number | null {
        return this.id_groupe;
    }

    getDateModification(): Date | null {
        return this.date_modification;
    }

    getAction(): 'Ajout' | 'Modification' | 'Suppression' | null {
        return this.action;
    }

    // Setters
    setIdGestion(id_gestion: number): void {
        this.id_gestion = id_gestion;
    }

    setIdForm(id_form: number | null): void {
        this.id_form = id_form;
    }

    setIdGroupe(id_groupe: number | null): void {
        this.id_groupe = id_groupe;
    }

    setDateModification(date_modification: Date | null): void {
        this.date_modification = date_modification;
    }

    setAction(action: 'Ajout' | 'Modification' | 'Suppression' | null): void {
        this.action = action;
    }
}
