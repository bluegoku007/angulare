export class Produit {
    id?: string;
    nom?: string;
    image?: string;
    prix?: string;
    description?: string;
    categId?:String;
    details?:String;
    constructor(args: Produit = {}) {
    this.id = args.id;
    this.nom = args.nom;
    this.image = args.image;
    this.prix = args.prix;
    this.description = args.description;
    this.categId=args.categId;
    this.details=args.details;
    }
    }