class Apprenant {
    private id_appren: number;
    private id_groupe: number | null;
    private nom_appren: string | null;
    private email_appren: string | null;
    private mdp_appren: string | null;
    private role_appren: 'Formateur' | 'User' | null;

    constructor(id_appren: number, id_groupe: number | null, nom_appren: string | null, email_appren: string | null, mdp_appren: string | null, role_appren: 'Formateur' | 'User' | null) {
        this.id_appren = id_appren;
        this.id_groupe = id_groupe;
        this.nom_appren = nom_appren;
        this.email_appren = email_appren;
        this.mdp_appren = mdp_appren;
        this.role_appren = role_appren;
    }

    // Getters
    getIdAppren(): number {
        return this.id_appren;
    }

    getIdGroupe(): number | null {
        return this.id_groupe;
    }

    getNomAppren(): string | null {
        return this.nom_appren;
    }

    getEmailAppren(): string | null {
        return this.email_appren;
    }

    getMdpAppren(): string | null {
        return this.mdp_appren;
    }

    getRoleAppren(): 'Formateur' | 'User' | null {
        return this.role_appren;
    }

    // Setters
    setIdAppren(id_appren: number): void {
        this.id_appren = id_appren;
    }

    setIdGroupe(id_groupe: number | null): void {
        this.id_groupe = id_groupe;
    }

    setNomAppren(nom_appren: string | null): void {
        this.nom_appren = nom_appren;
    }

    setEmailAppren(email_appren: string | null): void {
        this.email_appren = email_appren;
    }

    setMdpAppren(mdp_appren: string | null): void {
        this.mdp_appren = mdp_appren;
    }

    setRoleAppren(role_appren: 'Formateur' | 'User' | null): void {
        this.role_appren = role_appren;
    }
}
