import * as readline from 'readline';
import { Administrateur } from './Administrateur';
import { Apprenant } from './Apprenant';
import { Assigne } from './Assigne';
import { Creation } from './Creation';
import { Formateur } from './Formateur';
import { Gestion } from './Gestion';
import { Groupe } from './Groupe';
import { TP } from './TP';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question: string): Promise<string> => {
    return new Promise(resolve => rl.question(question, resolve));
};

async function main() {
    console.log("Choisissez une option:");
    console.log("1: Créer un Administrateur");
    console.log("2: Créer un Apprenant");
    console.log("3: Créer un Formateur");
    console.log("4: Créer une Assignation");
    console.log("5: Créer une Création");
    console.log("6: Créer une Gestion");
    console.log("7: Créer un Groupe");
    console.log("8: Créer un TP");

    const choice = await askQuestion("Votre choix: ");

    switch (choice) {
        case '1':
            const idAdmin = parseInt(await askQuestion("ID de l'administrateur: "));
            const nomAdmin = await askQuestion("Nom de l'administrateur: ");
            const emailAdmin = await askQuestion("Email de l'administrateur: ");
            const mdpAdmin = await askQuestion("Mot de passe de l'administrateur: ");
            const idApprenAdmin = parseInt(await askQuestion("ID de l'apprenant: ")) || null;
            const idFormAdmin = parseInt(await askQuestion("ID du formateur: ")) || null;

            const admin = new Administrateur(idAdmin, nomAdmin, emailAdmin, mdpAdmin, idApprenAdmin, idFormAdmin);
            console.log("Administrateur créé:", admin);
            break;

        case '2':
            const idAppren = parseInt(await askQuestion("ID de l'apprenant: "));
            const idGroupe = parseInt(await askQuestion("ID du groupe: ")) || null;
            const nomAppren = await askQuestion("Nom de l'apprenant: ");
            const emailAppren = await askQuestion("Email de l'apprenant: ");
            const mdpAppren = await askQuestion("Mot de passe de l'apprenant: ");
            const roleAppren = await askQuestion("Rôle de l'apprenant (Formateur/User): ") as 'Formateur' | 'User' | null;

            const apprenant = new Apprenant(idAppren, idGroupe, nomAppren, emailAppren, mdpAppren, roleAppren);
            console.log("Apprenant créé:", apprenant);
            break;

        case '3':
            const idForm = parseInt(await askQuestion("ID du formateur: "));
            const nomForm = await askQuestion("Nom du formateur: ");
            const emailForm = await askQuestion("Email du formateur: ");
            const mdpForm = await askQuestion("Mot de passe du formateur: ");

            const formateur = new Formateur(idForm, nomForm, emailForm, mdpForm);
            console.log("Formateur créé:", formateur);
            break;

        case '4':
            const idAssigne = parseInt(await askQuestion("ID de l'assignation: "));
            const idGroupeAssigne = parseInt(await askQuestion("ID du groupe: ")) || null;
            const idTpAssigne = parseInt(await askQuestion("ID du TP: ")) || null;
            const dateAssigne = new Date(await askQuestion("Date d'assignation (YYYY-MM-DD): "));

            const assigne = new Assigne(idAssigne, idGroupeAssigne, idTpAssigne, dateAssigne);
            console.log("Assignation créée:", assigne);
            break;

        case '5':
            const idCreation = parseInt(await askQuestion("ID de la création: "));
            const idFormCreation = parseInt(await askQuestion("ID du formateur: ")) || null;
            const idTpCreation = parseInt(await askQuestion("ID du TP: ")) || null;

            const creation = new Creation(idCreation, idFormCreation, idTpCreation);
            console.log("Création créée:", creation);
            break;

        case '6':
            const idGestion = parseInt(await askQuestion("ID de la gestion: "));
            const idFormGestion = parseInt(await askQuestion("ID du formateur: ")) || null;
            const idGroupeGestion = parseInt(await askQuestion("ID du groupe: ")) || null;
            const dateModificationGestion = new Date(await askQuestion("Date de modification (YYYY-MM-DD): "));
            const actionGestion = await askQuestion("Action (Ajout/Modification/Suppression): ") as 'Ajout' | 'Modification' | 'Suppression' | null;

            const gestion = new Gestion(idGestion, idFormGestion, idGroupeGestion, dateModificationGestion, actionGestion);
            console.log("Gestion créée:", gestion);
            break;

        case '7':
            const idGroupeInstance = parseInt(await askQuestion("ID du groupe: "));
            const idTpGroupe = parseInt(await askQuestion("ID du TP: ")) || null;
            const nomGroupe = await askQuestion("Nom du groupe: ");
            const descriptionsGroupe = await askQuestion("Description du groupe: ");
            const dateGroupe = new Date(await askQuestion("Date du groupe (YYYY-MM-DD): "));

            const groupe = new Groupe(idGroupeInstance, idTpGroupe, nomGroupe, descriptionsGroupe, dateGroupe);
            console.log("Groupe créé:", groupe);
            break;

        case '8':
            const idTP = parseInt(await askQuestion("ID du TP: "));
            const nomTP = await askQuestion("Nom du TP: ");
            const descriptionTP = await askQuestion("Description du TP: ");
            const mdpOrgTP = await askQuestion("Mot de passe du TP: ");

            const tp = new TP(idTP, nomTP, descriptionTP, mdpOrgTP);
            console.log("TP créé:", tp);
            break;

        default:
            console.log("Option invalide");
            break;
    }

    rl.close();
}

main().catch(console.error);
