export class Administrateur {
    private id_admin: number;
    private nom_admin: string | null;
    private email_admin: string | null;
    private mdp_admin: string | null;
    private id_appren: number | null;
    private id_form: number | null;

    constructor(id_admin: number, nom_admin: string | null, email_admin: string | null, mdp_admin: string | null, id_appren: number | null, id_form: number | null) {
        this.id_admin = id_admin;
        this.nom_admin = nom_admin;
        this.email_admin = email_admin;
        this.mdp_admin = mdp_admin;
        this.id_appren = id_appren;
        this.id_form = id_form;
    }

    // Getters
    getIdAdmin(): number {
        return this.id_admin;
    }

    getNomAdmin(): string | null {
        return this.nom_admin;
    }

    getEmailAdmin(): string | null {
        return this.email_admin;
    }

    getMdpAdmin(): string | null {
        return this.mdp_admin;
    }

    getIdAppren(): number | null {
        return this.id_appren;
    }

    getIdForm(): number | null {
        return this.id_form;
    }

    // Setters
    setIdAdmin(id_admin: number): void {
        this.id_admin = id_admin;
    }

    setNomAdmin(nom_admin: string | null): void {
        this.nom_admin = nom_admin;
    }

    setEmailAdmin(email_admin: string | null): void {
        this.email_admin = email_admin;
    }

    setMdpAdmin(mdp_admin: string | null): void {
        this.mdp_admin = mdp_admin;
    }

    setIdAppren(id_appren: number | null): void {
        this.id_appren = id_appren;
    }

    setIdForm(id_form: number | null): void {
        this.id_form = id_form;
    }
}
