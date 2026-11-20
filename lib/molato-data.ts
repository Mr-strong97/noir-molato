export type GenreFilter = 'tout' | 'homme' | 'femme';

export interface CollectionPiece { id: string; nom: string; matiere: string; prix: string; tailles: readonly string[]; photo: string; imageSrc: string; secondaryImageSrc?: string; photoDetail: string; genre: 'homme' | 'femme'; description: string; alt: string }
export interface DetailBlock { index: string; titre: string; accroche: string; texte: string; photo: string; imageSrc: string; alt: string }
export interface AtelierStep { numero: string; titre: string; description: string }
export interface LookbookItem { id: string; photo: string; imageSrc: string; legende: string; ratio: '7col' | '4col' | 'wide'; aspect: string; alt: string }

export const HERO_MEDIA = { slot: 'photo-hero', imageSrc: '/images/catalogue/jogging-ample-vert-sauge-25-usd-noir-molato.jpg', alt: 'Pantalon jogging ample vert sauge Noir Molato' } as const;
export const HERO_SLIDES = [
  HERO_MEDIA,
  { slot: 'photo-hero-02', imageSrc: '/images/catalogue/veste-biker-rouge-noir-molato.jpg', alt: 'Veste biker rouge Noir Molato' },
  { slot: 'photo-hero-03', imageSrc: '/images/catalogue/babies-leopard-talons-noir-molato.jpg', alt: 'Babies léopard à talon Noir Molato' },
  { slot: 'photo-hero-04', imageSrc: '/images/catalogue/polo-vert-blanc-zippe-noir-molato.jpg', alt: 'Polo vert et blanc zippé Noir Molato' },
] as const;
export const MANIFESTE_MEDIA = { slot: 'photo-manifeste', imageSrc: '/images/catalogue/chemise-officier-taupe-noir-molato.jpg', alt: 'Chemise officier taupe à boutons dorés Noir Molato' } as const;
export const ATELIER_MEDIA = {
  primary: { slot: 'photo-atelier-01', imageSrc: '/images/catalogue/chemise-lin-bleu-nuit-poches-noir-molato.jpg', alt: 'Chemise bleu nuit à poches Noir Molato' },
  secondary: { slot: 'photo-atelier-02', imageSrc: '/images/catalogue/mocassins-noirs-boucle-doree-noir-molato.jpg', alt: 'Mocassins noirs à boucle dorée Noir Molato' },
} as const;

export const CONFIG = {
  marque: 'Noir Molato', marqueCourte: 'MOLATO', slogan: 'Votre style, livré à Kinshasa.',
  sousTitreHero: 'Mode homme, femme et enfant : commandez simplement, nous livrons à Kinshasa.',
  ville: 'Kinshasa, RDC', adresse: 'Kinshasa — Livraison dans la ville', horaires: 'Tous les jours · 08h00 – 19h00',
  whatsapp: '243981689956', whatsappDisplay: '+243 981 689 956', email: 'noirmbumba@gmail.com', instagramHandle: '@noirmolato', instagram: 'https://www.instagram.com/noirmolato/',
  facebook: 'https://www.facebook.com/1307227439142169/', tiktok: 'https://www.tiktok.com/search?q=noir%20Molato&t=1795212575412', devise: 'USD', saison: 'Sélection disponible à Kinshasa', annee: '2026', fondateur: 'Mbumba Yaki Edgard, fondateur de Noir Molato',
} as const;

const sizeHomme = ['S', 'M', 'L', 'XL'] as const;
const shoesMen = ['40', '41', '42', '43', '44'] as const;
const shoesWomen = ['36', '37', '38', '39', '40', '41', '42'] as const;
const image = (name: string) => `/images/catalogue/${name}-noir-molato.jpg`;
const piece = (id: string, nom: string, matiere: string, prix: string, tailles: readonly string[], imageName: string, genre: 'homme' | 'femme', description: string, alt: string): CollectionPiece => ({ id, nom, matiere, prix, tailles, photo: `collection-${id}`, imageSrc: image(imageName), photoDetail: `detail-${id}`, genre, description, alt });

/* Les prix à 25 USD sont lisibles sur les visuels fournis. Les autres tarifs sont confirmés par WhatsApp selon disponibilité. */
export const COLLECTION_PIECES: readonly CollectionPiece[] = [
  piece('NM-001', 'Baskets montantes étoiles', 'Toile noire et semelle gomme', 'Prix sur demande', shoesMen, 'baskets-montantes-noires-etoiles', 'homme', 'Une paire montante noire à lacets blancs, facile à associer au quotidien.', 'Baskets montantes noires à étoiles blanches Noir Molato'),
  piece('NM-002', 'T-shirt beige signature', 'Jersey doux', 'Prix sur demande', sizeHomme, 't-shirt-beige-manche-courte', 'homme', 'T-shirt uni beige à manches courtes, pensé pour une tenue simple et nette.', 'T-shirt beige à manches courtes Noir Molato'),
  piece('NM-003', 'Chemise blanche col châle', 'Tissu léger', 'Prix sur demande', sizeHomme, 'chemise-lin-blanche-col-chale', 'homme', 'Chemise blanche à col souple pour les journées chaudes ou les sorties habillées.', 'Chemise blanche à col châle Noir Molato'),
  piece('NM-004', 'Chemise bleu nuit à poches', 'Tissu texturé', 'Prix sur demande', sizeHomme, 'chemise-lin-bleu-nuit-poches', 'homme', 'Chemise bleu nuit à deux poches poitrine, à porter ouverte ou boutonnée.', 'Chemise bleu nuit à poches Noir Molato'),
  piece('NM-005', 'Chemise bordeaux col châle', 'Tissu texturé', 'Prix sur demande', sizeHomme, 'chemise-lin-bordeaux-col-chale', 'homme', 'Une chemise bordeaux à l’allure raffinée, idéale pour donner du caractère à votre look.', 'Chemise bordeaux à col châle Noir Molato'),
  piece('NM-006', 'Chemise bleu chambray', 'Tissu léger', 'Prix sur demande', sizeHomme, 'chemise-lin-bleu-chambray', 'homme', 'Chemise bleu clair à col ouvert : une option élégante et facile à porter.', 'Chemise bleu chambray Noir Molato'),
  piece('NM-007', 'Chemise noire à poches', 'Tissu souple', 'Prix sur demande', sizeHomme, 'chemise-lin-noire-poches', 'homme', 'Modèle noir à poches poitrine, conçu pour une silhouette urbaine affirmée.', 'Chemise noire à poches Noir Molato'),
  piece('NM-008', 'Chemise terracotta', 'Tissu léger', 'Prix sur demande', sizeHomme, 'chemise-lin-terracotta', 'homme', 'La teinte terracotta apporte une touche chaleureuse à une coupe sobre.', 'Chemise terracotta Noir Molato'),
  piece('NM-009', 'Mocassins boucle dorée', 'Finition suédée', 'Prix sur demande', shoesMen, 'mocassins-noirs-boucle-doree', 'homme', 'Mocassins noirs à détail doré, pour accompagner vos tenues de ville.', 'Mocassins noirs à boucle dorée Noir Molato'),
  piece('NM-010', 'Derbies noirs à boucle', 'Finition lisse', 'Prix sur demande', shoesMen, 'derbies-noirs-boucle', 'homme', 'Derbies noirs à boucle métallique, une option classique au caractère marqué.', 'Derbies noirs à boucle Noir Molato'),
  piece('NM-011', 'Jogging ample vert sauge', 'Molleton doux', '25 USD', sizeHomme, 'jogging-ample-vert-sauge-25-usd', 'homme', 'Pantalon jogging ample avec taille élastique et cordon contrasté. Prix affiché : 25 USD.', 'Jogging ample vert sauge Noir Molato, 25 dollars'),
  piece('NM-012', 'Jogging gris motif croix', 'Molleton doux', '25 USD', sizeHomme, 'jogging-gris-croix-25-usd', 'homme', 'Jogging gris ample avec motif graphique sur la jambe. Prix affiché : 25 USD.', 'Jogging gris à motif croix Noir Molato, 25 dollars'),
  piece('NM-013', 'Veste sport Polux bleue', 'Tissu sport léger', '25 USD', sizeHomme, 'veste-sport-bleue-polux-25-usd', 'homme', 'Veste sport bleue à demi-zip et passepoils contrastés. Prix affiché : 25 USD.', 'Veste sport bleue Polux Noir Molato, 25 dollars'),
  piece('NM-014', 'Veste sport Polux noire', 'Tissu sport léger', '25 USD', sizeHomme, 'veste-sport-noire-polux-25-usd', 'homme', 'Version noire de la veste sport à demi-zip. Prix affiché : 25 USD.', 'Veste sport noire Polux Noir Molato, 25 dollars'),
  piece('NM-015', 'Veste biker rouge', 'Finition effet cuir', 'Prix sur demande', sizeHomme, 'veste-biker-rouge', 'homme', 'Veste rouge ornée de détails métalliques et d’écussons pour un look fort.', 'Veste biker rouge Noir Molato'),
  piece('NM-016', 'Polo vert et blanc zippé', 'Maille légère', 'Prix sur demande', sizeHomme, 'polo-vert-blanc-zippe', 'homme', 'Polo bicolore à demi-zip, un choix frais pour les journées à Kinshasa.', 'Polo vert et blanc zippé Noir Molato'),
  piece('NM-017', 'Jogging ample rose', 'Molleton doux', '25 USD', sizeHomme, 'jogging-ample-rose-25-usd', 'femme', 'Jogging rose ample à cordon blanc. Prix affiché : 25 USD.', 'Jogging ample rose Noir Molato, 25 dollars'),
  piece('NM-018', 'Babies léopard à talon', 'Imprimé textile', 'Prix sur demande', shoesWomen, 'babies-leopard-talons', 'femme', 'Babies imprimé léopard avec bride réglable et talon bloc.', 'Babies léopard à talon Noir Molato'),
  piece('NM-019', 'Babies dentelle beige', 'Dentelle fleurie', 'Prix sur demande', shoesWomen, 'babies-dentelle-beige', 'femme', 'Babies beige en dentelle fleurie avec nœud délicat, disponibles du 36 au 42.', 'Babies en dentelle beige Noir Molato'),
  piece('NM-020', 'Chemise officier taupe', 'Tissu souple', 'Prix sur demande', sizeHomme, 'chemise-officier-taupe', 'femme', 'Chemise taupe à boutons dorés, faite pour une tenue élégante et originale.', 'Chemise officier taupe à boutons dorés Noir Molato'),
];

export const DETAILS_ITEMS: readonly DetailBlock[] = [
  { index: '01', titre: 'Choisissez votre pièce', accroche: '20 articles prêts à découvrir.', texte: 'Parcourez la sélection, ouvrez la fiche et choisissez votre taille avant de nous écrire sur WhatsApp.', photo: 'detail-01', imageSrc: image('jogging-ample-vert-sauge-25-usd'), alt: 'Jogging vert sauge Noir Molato' },
  { index: '02', titre: 'Commandez simplement', accroche: 'Une conversation WhatsApp suffit.', texte: 'Indiquez l’article et la taille souhaitée. Notre équipe vous confirme la disponibilité et le montant avant la livraison.', photo: 'detail-02', imageSrc: image('chemise-lin-bleu-nuit-poches'), alt: 'Chemise bleu nuit Noir Molato' },
  { index: '03', titre: 'Livrés à Kinshasa', accroche: 'Des agents dédiés à vos commandes.', texte: 'Nos agents livreurs assurent la remise de vos produits uniquement à Kinshasa, de 08h00 à 19h00.', photo: 'detail-03', imageSrc: image('mocassins-noirs-boucle-doree'), alt: 'Mocassins noirs Noir Molato' },
];
export const ATELIER_STEPS: readonly AtelierStep[] = [
  { numero: '01', titre: 'Choix', description: 'Repérez une pièce pour homme, femme ou enfant dans la sélection disponible.' },
  { numero: '02', titre: 'Message', description: 'Envoyez-nous l’article et la taille sur WhatsApp pour vérifier le stock.' },
  { numero: '03', titre: 'Confirmation', description: 'Nous vous confirmons le prix et les modalités avant de préparer votre commande.' },
  { numero: '04', titre: 'Livraison', description: 'Un agent Noir Molato livre votre commande à Kinshasa entre 08h00 et 19h00.' },
];
export const LOOKBOOK_ITEMS: readonly LookbookItem[] = [
  { id: 'look-01', photo: 'lookbook-01', imageSrc: image('veste-biker-rouge'), legende: 'Veste biker rouge', ratio: '7col', aspect: 'aspect-square lg:aspect-[16/11]', alt: 'Veste biker rouge Noir Molato' },
  { id: 'look-02', photo: 'lookbook-02', imageSrc: image('jogging-ample-rose-25-usd'), legende: 'Jogging rose — 25 USD', ratio: '4col', aspect: 'aspect-square', alt: 'Jogging rose Noir Molato' },
  { id: 'look-03', photo: 'lookbook-03', imageSrc: image('mocassins-noirs-boucle-doree'), legende: 'Mocassins noirs', ratio: '4col', aspect: 'aspect-square', alt: 'Mocassins noirs Noir Molato' },
  { id: 'look-04', photo: 'lookbook-04', imageSrc: image('veste-sport-bleue-polux-25-usd'), legende: 'Veste sport bleue — 25 USD', ratio: '4col', aspect: 'aspect-[3/4]', alt: 'Veste sport bleue Noir Molato' },
  { id: 'look-05', photo: 'lookbook-05', imageSrc: image('babies-leopard-talons'), legende: 'Babies léopard', ratio: '4col', aspect: 'aspect-square', alt: 'Babies léopard Noir Molato' },
  { id: 'look-06', photo: 'lookbook-06', imageSrc: image('chemise-lin-terracotta'), legende: 'Chemise terracotta', ratio: '4col', aspect: 'aspect-square', alt: 'Chemise terracotta Noir Molato' },
  { id: 'look-07', photo: 'lookbook-07', imageSrc: image('polo-vert-blanc-zippe'), legende: 'Polo vert et blanc', ratio: '7col', aspect: 'aspect-square lg:aspect-[16/10]', alt: 'Polo vert et blanc Noir Molato' },
  { id: 'look-08', photo: 'lookbook-08', imageSrc: image('babies-dentelle-beige'), legende: 'Babies dentelle beige', ratio: 'wide', aspect: 'aspect-[4/5] md:aspect-[16/8]', alt: 'Babies en dentelle beige Noir Molato' },
];

export function filterPiecesByGenre(pieces: readonly CollectionPiece[], genre: GenreFilter): CollectionPiece[] { return genre === 'tout' ? [...pieces] : pieces.filter((piece) => piece.genre === genre); }
export function buildWhatsAppOrderUrl(whatsappNumber: string, piece: Pick<CollectionPiece, 'nom' | 'id'>, size?: string): string { const chosenSize = size && size.trim().length > 0 ? size.trim() : 'À PRÉCISER'; return `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Bonjour Noir Molato, je souhaite commander : ${piece.nom} (${piece.id}), taille ${chosenSize}.`)}`; }
export interface ContactFormValues { nom: string; telephone: string; message: string }
export interface ContactValidationResult { valid: boolean; errors: Partial<Record<keyof ContactFormValues, string>> }
export function validateContactForm(values: ContactFormValues): ContactValidationResult { const errors: Partial<Record<keyof ContactFormValues, string>> = {}; if (!values.nom || values.nom.trim().length < 2) errors.nom = '— Indiquez votre nom.'; if ((values.telephone || '').replace(/\D/g, '').length < 7) errors.telephone = '— Indiquez un numéro valide.'; if (!values.message || values.message.trim().length < 4) errors.message = '— Écrivez quelques mots.'; return { valid: Object.keys(errors).length === 0, errors }; }
export function buildContactWhatsAppUrl(whatsappNumber: string, values: ContactFormValues): string { return `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Bonjour Noir Molato, je suis ${values.nom.trim()} (${values.telephone.trim()}). ${values.message.trim()}`)}`; }
export function buildGeneralWhatsAppUrl(whatsappNumber: string): string { return `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Bonjour Noir Molato, je souhaite commander ou connaître les articles disponibles.')}`; }
export function formatLookIndex(indexZeroBased: number, total: number): string { return `${String(indexZeroBased + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`; }
