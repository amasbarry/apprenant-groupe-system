class TP {
    private id_TP: number;
    private nom_TP: string | null;
    private description: string | null;
    private mdp_org: string | null;

    constructor(id_TP: number, nom_TP: string | null, description: string | null, mdp_org: string | null) {
        this.id_TP = id_TP;
        this.nom_TP = nom_TP;
        this.description = description;
        this.mdp_org = mdp_org;
    }

    // Getters
    getIdTP(): number {
        return this.id_TP;
    }

    getNomTP(): string | null {
        return this.nom_TP;
    }

    getDescription(): string | null {
        return this.description;
    }

    getMdpOrg(): string | null {
        return this.mdp_org;
    }

    // Setters
    setIdTP(id_TP: number): void {
        this.id_TP = id_TP;
    }

    setNomTP(nom_TP: string | null): void {
        this.nom_TP = nom_TP;
    }

    setDescription(description: string | null): void {
        this.description = description;
    }

    setMdpOrg(mdp_org: string | null): void {
        this.mdp_org = mdp_org;
    }
}
