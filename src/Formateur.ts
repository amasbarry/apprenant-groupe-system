export class Formateur {
    private id_form: number;
    private nom_form: string | null;
    private email_form: string | null;
    private mdp_form: string | null;

    constructor(id_form: number, nom_form: string | null, email_form: string | null, mdp_form: string | null) {
        this.id_form = id_form;
        this.nom_form = nom_form;
        this.email_form = email_form;
        this.mdp_form = mdp_form;
    }

    // Getters
    getIdForm(): number {
        return this.id_form;
    }

    getNomForm(): string | null {
        return this.nom_form;
    }

    getEmailForm(): string | null {
        return this.email_form;
    }

    getMdpForm(): string | null {
        return this.mdp_form;
    }

    // Setters
    setIdForm(id_form: number): void {
        this.id_form = id_form;
    }

    setNomForm(nom_form: string | null): void {
        this.nom_form = nom_form;
    }

    setEmailForm(email_form: string | null): void {
        this.email_form = email_form;
    }

    setMdpForm(mdp_form: string | null): void {
        this.mdp_form = mdp_form;
    }
}
