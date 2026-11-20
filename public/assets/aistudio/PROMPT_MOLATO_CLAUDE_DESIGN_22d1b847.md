# PROMPT MAÎTRE — SITE MONO-PAGE « MOLATO »
# Version professionnelle pour Claude Design
# Direction artistique : noir & blanc strict · photographie de vrais vêtements · animations éditoriales

---

# 0. COMMENT UTILISER CE PROMPT

Ce document est un brief complet.
Il est destiné à Claude Design (ou à tout outil de conception qui génère des pages web animées).
Colle-le en entier dans le premier message.
Remplace uniquement les champs entre [CROCHETS] avant l'envoi.
Si un champ n'est pas rempli, utilise la valeur par défaut indiquée juste en dessous.
Ne résume pas ce brief. Ne l'interprète pas librement. Exécute-le section par section.
Quand une règle de ce document entre en conflit avec une habitude de conception, la règle du document gagne.
En cas de doute sur un choix visuel, choisis toujours l'option la plus sobre, la plus contrastée, la plus éditoriale.

---

# 1. RÔLE

Tu agis comme une équipe de quatre professionnels réunis :
1. Directeur artistique senior, spécialisé dans la mode et le luxe.
2. Designer UI/UX spécialisé dans les sites éditoriaux mono-page.
3. Motion designer spécialisé dans les micro-interactions et les animations au défilement.
4. Développeur front-end expert en HTML, CSS et JavaScript modernes.

Tu ne produis jamais un résultat « de template ».
Tu produis un résultat qui pourrait être publié tel quel par une maison de mode.
Tu travailles avec rigueur, avec goût et avec retenue.

---

# 2. MISSION

Créer une page web unique (mono-page, one-page, scroll vertical) pour la marque de vêtements MOLATO.

Objectifs de la page :
1. Faire ressentir l'univers de la marque en moins de cinq secondes.
2. Présenter les vêtements avec des photographies professionnelles de vrais vêtements.
3. Donner envie de découvrir la collection et de contacter la marque.
4. Convertir : commande, réservation, ou message vers la marque.
5. Rester mémorable grâce à une animation maîtrisée, jamais gratuite.

Public cible :
- Hommes et femmes de 20 à 45 ans.
- Sensibles à l'élégance, à la coupe, à la matière.
- Consultent la page majoritairement sur téléphone.

Positionnement :
- Premium accessible.
- Mode contemporaine, urbaine, élégante.
- Minimalisme éditorial : peu d'éléments, très bien placés.

---

# 3. IDENTITÉ DE LA MARQUE (champs à compléter)

- Nom de la marque : MOLATO
- Logo : logo noir fourni par le client (fichier joint, voir section 8)
- Slogan : [SLOGAN — par défaut : « Porter l'essentiel. »]
- Ville / pays : [VILLE, PAYS — par défaut : Kinshasa, RDC]
- Type de vêtements : [par défaut : prêt-à-porter homme et femme — chemises, vestes, pantalons, ensembles, robes]
- Ton de voix : sobre, confiant, élégant, direct. Jamais bavard.
- Langue de la page : [par défaut : français]
- Contact principal : [WhatsApp / e-mail / téléphone]
- Réseaux sociaux : [Instagram, Facebook, TikTok — liens]
- Adresse de la boutique ou de l'atelier : [adresse, ou « Sur rendez-vous »]
- Horaires : [horaires]
- Devise des prix : [par défaut : USD]

---

# 4. CONTRAINTES ABSOLUES (NON NÉGOCIABLES)

Ces règles s'appliquent à tout le projet. Aucune exception.

## 4.1 Couleurs
1. Il n'existe que DEUX couleurs : le noir et le blanc.
2. Noir principal : #000000
3. Blanc principal : #FFFFFF
4. Interdit : tout autre teinte de couleur (rouge, bleu, vert, doré, beige, crème, etc.).
5. Les nuances de gris sont tolérées UNIQUEMENT comme transparence du noir ou du blanc (opacité), jamais comme couleur choisie.
6. Exemples autorisés : rgba(0,0,0,0.6), rgba(255,255,255,0.7), rgba(0,0,0,0.12) pour un filet.
7. Interdit : dégradés colorés, ombres colorées, halos colorés.
8. Dégradés autorisés : uniquement noir → transparent ou blanc → transparent, pour garantir la lisibilité du texte sur photo.
9. Les photographies peuvent rester en couleurs naturelles OU être converties en noir et blanc (voir section 9 : choix imposé).
10. Les boutons, liens, icônes, filets, formulaires et animations sont strictement noir ou blanc.

## 4.2 Contenu visuel
1. Les photographies sont de vrais vêtements, portés ou posés, de qualité professionnelle.
2. Interdit : illustrations génériques, images de banque d'images non liées aux vêtements, émojis, pictogrammes colorés.
3. Interdit : vêtements générés ou inventés si une photo réelle est fournie.
4. Le logo MOLATO noir est utilisé tel quel : ne pas le redessiner, ne pas le déformer, ne pas changer ses proportions.
5. Sur fond noir, utiliser la version inversée du logo (blanc) obtenue par un simple filtre d'inversion, sans toucher au tracé.

## 4.3 Structure
1. Page unique : un seul fichier de page, scroll vertical continu.
2. Pas de pages secondaires. La navigation mène à des sections de la même page (ancres).
3. Pas de pop-up envahissant, pas de bandeau promotionnel agressif.
4. Un seul appel à l'action principal par écran.

## 4.4 Qualité
1. Aucun texte lorem ipsum visible dans le rendu final.
2. Aucun lien mort : chaque bouton fait une action réelle (ancre, WhatsApp, mailto, tel).
3. Aucun élément qui déborde horizontalement sur mobile.
4. Aucune animation qui bloque la lecture ou le défilement.
5. Respect de prefers-reduced-motion (voir section 24).

---

# 5. PHILOSOPHIE DE DESIGN

## 5.1 Principes directeurs
1. Le vêtement est le héros. Tout le reste s'efface.
2. Le contraste noir/blanc crée la hiérarchie : pas besoin de couleur pour guider l'œil.
3. L'espace vide est un élément de luxe. Ne pas le remplir.
4. La typographie fait le travail d'une illustration.
5. Chaque animation sert une intention : révéler, guider, rythmer, récompenser.
6. La répétition crée la cohérence : mêmes marges, mêmes durées, mêmes courbes.
7. Moins d'éléments, mieux travaillés.

## 5.2 Références d'ambiance (à interpréter, jamais à copier)
- Sites éditoriaux de maisons de mode contemporaines.
- Lookbooks imprimés en noir et blanc.
- Campagnes photographiques en studio, fond uni, lumière douce.
- Affiches typographiques minimalistes.
- Interdit : copier la mise en page d'un site existant, ou reprendre un logo, un nom ou un texte d'une autre marque.

## 5.3 Mots-clés d'ambiance
Sobre · Précis · Éditorial · Contrasté · Silencieux · Élégant · Urbain · Intemporel · Tactile · Assuré.

## 5.4 Anti-références (à éviter absolument)
- Look « boutique en ligne générique ».
- Bannières de soldes clignotantes.
- Cartes avec ombres lourdes et coins très arrondis partout.
- Dégradés violets ou colorés.
- Typographies fantaisie, manuscrites ou décoratives.
- Carrousels automatiques rapides.
- Effets de parallaxe excessifs qui donnent le vertige.

---

# 6. SYSTÈME DE DESIGN — TOKENS

Définis ces variables au début du CSS, dans :root. Utilise-les partout. N'écris jamais une valeur « en dur » si un token existe.

## 6.1 Couleurs (tokens)
--noir: #000000;
--blanc: #FFFFFF;
--noir-90: rgba(0, 0, 0, 0.90);
--noir-70: rgba(0, 0, 0, 0.70);
--noir-50: rgba(0, 0, 0, 0.50);
--noir-30: rgba(0, 0, 0, 0.30);
--noir-12: rgba(0, 0, 0, 0.12);
--noir-06: rgba(0, 0, 0, 0.06);
--blanc-90: rgba(255, 255, 255, 0.90);
--blanc-70: rgba(255, 255, 255, 0.70);
--blanc-50: rgba(255, 255, 255, 0.50);
--blanc-30: rgba(255, 255, 255, 0.30);
--blanc-12: rgba(255, 255, 255, 0.12);

## 6.2 Rôles des couleurs
- Fond clair de section : --blanc
- Fond sombre de section : --noir
- Texte sur fond clair : --noir
- Texte sur fond sombre : --blanc
- Texte secondaire sur clair : --noir-70
- Texte secondaire sur sombre : --blanc-70
- Filets sur clair : --noir-12
- Filets sur sombre : --blanc-12
- Bouton principal sur clair : fond --noir, texte --blanc
- Bouton principal sur sombre : fond --blanc, texte --noir
- Bouton secondaire : contour 1px, fond transparent

## 6.3 Alternance des sections
Le rythme de la page repose sur l'alternance noir / blanc.
Ordre imposé :
1. Hero → NOIR (plein écran, photographie)
2. Manifeste → BLANC
3. Collection → NOIR
4. Détails du vêtement → BLANC
5. Savoir-faire → NOIR
6. Lookbook (galerie) → BLANC
7. Citation → NOIR
8. Commande / contact → BLANC
9. Pied de page → NOIR

## 6.4 Espacements (échelle de 8)
--s-1: 4px;
--s-2: 8px;
--s-3: 16px;
--s-4: 24px;
--s-5: 32px;
--s-6: 48px;
--s-7: 64px;
--s-8: 96px;
--s-9: 128px;
--s-10: 192px;
Marge verticale d'une section : mobile 96px, tablette 128px, bureau 160px à 192px.
Marge latérale de la page : mobile 20px, tablette 40px, bureau 64px.

## 6.5 Rayons
--r-0: 0px;  (par défaut : angles droits, esthétique éditoriale)
--r-pill: 999px; (uniquement pour de petits badges, si nécessaire)
Règle : les photographies et les boutons ont des angles droits (0px).

## 6.6 Filets
--filet: 1px solid;
Les filets fins structurent la page à la manière d'un magazine.
Utiliser des filets horizontaux pour séparer les blocs d'information.
Épaisseur maximale : 1px, sauf pour un élément décoratif voulu de 2px.

## 6.7 Ombres
Aucune ombre portée décorative.
La profondeur se crée par le contraste, l'échelle et le mouvement, pas par des ombres.
Exception : un léger voile noir sur les photos pour garantir la lisibilité du texte.

## 6.8 Durées et courbes d'animation (tokens)
--d-rapide: 200ms;
--d-normale: 400ms;
--d-lente: 700ms;
--d-tres-lente: 1100ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
Règle : toutes les animations utilisent ces tokens. Pas de durée improvisée.

## 6.9 Couches (z-index)
--z-fond: 0;
--z-contenu: 10;
--z-entete: 100;
--z-menu: 200;
--z-chargement: 300;
--z-curseur: 400;

---

# 7. TYPOGRAPHIE

## 7.1 Familles
Utiliser exactement deux familles, chargées depuis Google Fonts avec font-display: swap.
1. Titres : une serif éditoriale élégante à fort contraste. Choix imposé : « Playfair Display » (400, 500, italique 400).
   Alternative si indisponible : « Cormorant Garamond ».
2. Texte et interface : une sans-serif géométrique propre. Choix imposé : « Inter » (300, 400, 500, 600).
   Alternative si indisponible : « Helvetica Neue », Arial, sans-serif.
Fallbacks obligatoires dans la pile : Georgia, serif / system-ui, sans-serif.

## 7.2 Échelle typographique (fluide avec clamp)
--t-xs: clamp(0.70rem, 0.68rem + 0.1vw, 0.78rem);
--t-sm: clamp(0.82rem, 0.80rem + 0.15vw, 0.90rem);
--t-base: clamp(0.95rem, 0.92rem + 0.2vw, 1.05rem);
--t-md: clamp(1.15rem, 1.05rem + 0.5vw, 1.4rem);
--t-lg: clamp(1.6rem, 1.3rem + 1.4vw, 2.4rem);
--t-xl: clamp(2.2rem, 1.6rem + 3vw, 4rem);
--t-2xl: clamp(3rem, 1.8rem + 6vw, 7rem);
--t-3xl: clamp(4rem, 2rem + 10vw, 11rem);

## 7.3 Usage
- Titre du hero : --t-3xl, Playfair Display, 400, interligne 0.95, espacement des lettres -0.02em.
- Titres de section (H2) : --t-2xl ou --t-xl, Playfair Display.
- Sous-titres (H3) : --t-lg, Playfair Display italique pour l'accent.
- Étiquettes (labels, numéros de section) : --t-xs, Inter 500, MAJUSCULES, espacement 0.18em.
- Texte courant : --t-base, Inter 300 ou 400, interligne 1.7.
- Légendes : --t-sm, Inter 400, --noir-70 ou --blanc-70.
- Boutons : --t-sm, Inter 500, MAJUSCULES, espacement 0.14em.

## 7.4 Règles de composition du texte
1. Largeur maximale d'un paragraphe : 62 caractères (≈ 38rem).
2. Alignement : à gauche pour les paragraphes. Centré uniquement pour la citation et le hero si nécessaire.
3. Jamais de texte justifié.
4. Jamais plus de deux graisses par bloc.
5. Les mots d'accent des titres peuvent être en italique, jamais en couleur.
6. Les numéros de section s'écrivent « 01 », « 02 », etc., en Inter MAJUSCULES.
7. Utiliser text-wrap: balance sur les titres et text-wrap: pretty sur les paragraphes.
8. Désactiver les ligatures fantaisie. Activer font-feature-settings: "kern" 1.
9. Le texte posé sur une photographie doit toujours avoir un voile noir de lisibilité (voir section 9.6).

## 7.5 Ton rédactionnel
- Phrases courtes.
- Verbes concrets.
- Pas d'adjectifs creux (« incroyable », « unique au monde »).
- Pas de points d'exclamation.
- Pas d'émojis.
- Chaque phrase doit pouvoir être imprimée sur une étiquette de vêtement.

---

# 8. LOGO MOLATO

## 8.1 Fichier
- Le client fournit le logo noir MOLATO (PNG transparent ou SVG).
- Utiliser le fichier fourni, tel quel.
- Si le fichier n'est pas encore joint : réserver l'emplacement et utiliser un texte « MOLATO » en Playfair Display, majuscules, espacement 0.3em, comme repli temporaire, et le signaler clairement dans la réponse.

## 8.2 Versions
1. Version noire : sur fond blanc.
2. Version blanche : sur fond noir (filtre : invert(1) ; si le logo est un SVG, remplacer le remplissage par #FFFFFF).
3. Aucune autre couleur.

## 8.3 Emplacements
1. En-tête (haut gauche), hauteur 20px à 28px selon l'écran.
2. Écran de chargement, centré, hauteur 40px à 56px.
3. Hero : le logo peut apparaître en grand filigrane (opacité 0.06) — optionnel.
4. Pied de page : grande version, pleine largeur, très imposante (effet signature éditorial).

## 8.4 Règles d'usage
1. Zone de protection : au moins la hauteur de la lettre « M » autour du logo.
2. Taille minimale : 80px de large à l'écran.
3. Ne jamais étirer, incliner, ajouter une ombre ou un contour.
4. Ne jamais placer le logo sur une zone photo trop chargée sans voile.
5. Le logo est cliquable : retour en haut de la page (ancre #accueil).

---

# 9. DIRECTION PHOTOGRAPHIQUE

## 9.1 Sources
- Photographies réelles de vêtements de la marque, fournies par le client.
- Qualité professionnelle : netteté, lumière maîtrisée, cadrage soigné.
- Formats acceptés : JPG, PNG, WebP. Résolution recommandée : 2400px de large minimum pour les photos plein écran.

## 9.2 Traitement imposé
Choix imposé : TOUTES les photographies sont affichées en noir et blanc.
Technique : filter: grayscale(1) contrast(1.05) brightness(0.98);
Raison : garantir une cohérence totale avec la règle « deux couleurs seulement ».
Option au survol (bureau uniquement) : aucun retour de couleur. Le survol agit sur l'échelle et la luminosité, pas sur la couleur.

## 9.3 Types de photos attendus
1. Portrait plein cadre (modèle debout, vêtement visible de la tête aux pieds) — hero.
2. Plan de détail (col, couture, bouton, tissu) — section détails.
3. Plan mi-corps (vêtement en situation) — collection.
4. Vêtement posé à plat ou sur cintre, fond uni — catalogue.
5. Ambiance atelier (mains, tissu, machine à coudre) — savoir-faire.
6. Ambiance rue / lumière naturelle — lookbook.

## 9.4 Emplacements d'images (liste précise)
Chaque emplacement est nommé. Utilise ces noms dans le code (attribut data-photo) pour que le client remplace facilement les fichiers.
- photo-hero : portrait plein écran, orientation portrait pour mobile, paysage ou portrait recadré pour bureau.
- photo-manifeste : une photo verticale, ratio 4:5.
- photo-collection-01 à photo-collection-06 : six vêtements, ratio 3:4.
- photo-detail-01 à photo-detail-03 : trois plans de détail, ratio 1:1 ou 4:5.
- photo-atelier-01 et photo-atelier-02 : deux photos de savoir-faire, ratio 16:10 ou 4:5.
- photo-lookbook-01 à photo-lookbook-08 : huit images en galerie, ratios variés (3:4, 4:5, 1:1, 16:10).
- photo-citation : une photo de fond très sombre, optionnelle.
- photo-contact : une photo verticale, optionnelle.
Total : 25 emplacements maximum.

## 9.5 Règles techniques des images
1. Toutes les images ont un attribut alt descriptif et précis (type de vêtement, coupe, matière si connue).
2. Toutes les images ont width et height pour éviter les décalages de mise en page.
3. Toutes les images sous le premier écran utilisent loading="lazy" et decoding="async".
4. L'image du hero utilise fetchpriority="high" et n'est jamais en lazy.
5. Utiliser object-fit: cover et object-position adapté pour garder le vêtement visible.
6. Prévoir des versions srcset (800w, 1200w, 1600w, 2400w) si plusieurs tailles sont disponibles.
7. Aucune image ne doit être étirée ou déformée.
8. Format préféré : WebP ou AVIF avec repli JPG.
9. En attendant les vraies photos, utiliser des blocs gris neutres (rgba(0,0,0,0.06)) avec le nom de l'emplacement écrit dedans, pour que le client sache où placer chaque image. Ne JAMAIS inventer des photos de vêtements.

## 9.6 Voile de lisibilité
Quand un texte est posé sur une photo :
- Ajouter un calque de dégradé noir → transparent :
  linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 100%)
- Le texte est blanc, taille minimale 16px pour le corps, contraste minimal 7:1.
- Vérifier le contraste sur mobile et sur bureau.

## 9.7 Rythme visuel
1. Alterner photos serrées (détails) et photos larges (ambiance).
2. Alterner portrait et paysage pour éviter la monotonie.
3. Ne jamais mettre deux photos identiques en cadrage l'une après l'autre.
4. Laisser de grands blancs ou de grands noirs autour des images pour les faire respirer.

---

# 10. GRILLE ET MISE EN PAGE

## 10.1 Grille
- Mobile : 4 colonnes, gouttière 16px.
- Tablette : 8 colonnes, gouttière 24px.
- Bureau : 12 colonnes, gouttière 32px.
- Largeur maximale du contenu : 1440px, centré. Les photos du hero et du lookbook peuvent passer en pleine largeur.

## 10.2 Principes de composition
1. Asymétrie maîtrisée : un grand élément, un petit élément, beaucoup de vide.
2. Alignements stricts sur la grille. Rien ne flotte au hasard.
3. Les photos peuvent déborder légèrement de la grille pour créer de la tension, jamais plus de 8% de la largeur.
4. Les textes et les photos s'alternent à gauche et à droite d'une section à l'autre.
5. Un grand numéro de section (01, 02…) donne un rythme de magazine.

## 10.3 Points de rupture
- Mobile : jusqu'à 599px
- Tablette : 600px à 1023px
- Bureau : 1024px à 1439px
- Grand écran : 1440px et plus
Approche mobile d'abord : écrire le CSS mobile puis ajouter des @media (min-width: …).

## 10.4 Hauteurs
- Hero : 100svh (utiliser svh/dvh pour les navigateurs mobiles).
- Autres sections : hauteur au contenu, avec marges généreuses.
- Pas de hauteur fixe qui coupe le contenu.

---

# 11. ARCHITECTURE DE LA PAGE

Ordre des sections, de haut en bas, avec leur identifiant d'ancre :
00. Écran de chargement (preloader)             — #chargement
01. En-tête fixe (navigation)                   — #entete
02. Hero                                        — #accueil
03. Manifeste                                   — #marque
04. Collection                                  — #collection
05. Détails du vêtement                         — #details
06. Savoir-faire                                — #atelier
07. Lookbook                                    — #lookbook
08. Citation                                    — #citation
09. Commande et contact                         — #contact
10. Pied de page                                — #pied

Chaque section a :
- un numéro (01 à 09),
- un titre H2,
- un identifiant d'ancre,
- une animation d'entrée,
- une couleur de fond (noir ou blanc, selon section 6.3).

---

# 12. SECTION 00 — ÉCRAN DE CHARGEMENT

## 12.1 Rôle
Créer une première impression premium et masquer le chargement des polices et de la première image.

## 12.2 Apparence
- Fond : NOIR plein écran.
- Au centre : logo MOLATO en version blanche, hauteur 48px.
- Sous le logo : un filet blanc fin (1px) de 120px de large qui se remplit de gauche à droite (barre de progression minimaliste).
- Un compteur en pourcentage en Inter 500, --t-xs, blanc, en bas à droite : « 000 » → « 100 ».

## 12.3 Animation
1. Le logo apparaît en fondu (opacité 0 → 1) en 600ms, courbe --ease-out.
2. Le filet se remplit pendant que les ressources chargent (durée minimale 1400ms, maximale 3000ms).
3. Le compteur s'incrémente de façon fluide (requestAnimationFrame), jamais par sauts visibles.
4. À 100% : le logo remonte de 12px et disparaît (400ms).
5. Le fond noir se retire vers le haut (clip-path ou translateY(-100%)) en 900ms, courbe --ease-editorial.
6. Pendant ce mouvement, le hero se révèle derrière (voir section 13).

## 12.4 Règles
1. Le preloader ne dure jamais plus de 3 secondes, même si une image tarde.
2. Il n'est affiché qu'une seule fois par visite (sessionStorage — avec try/catch).
3. Si prefers-reduced-motion est actif : affichage instantané, sans animation, durée 0.
4. Le contenu reste accessible aux lecteurs d'écran (aria-hidden sur le preloader une fois terminé).
5. Bloquer le défilement pendant le chargement, puis le réactiver.

---

# 13. SECTION 02 — HERO (#accueil)

## 13.1 Rôle
Choc visuel immédiat. Le vêtement et la marque en une seule image.

## 13.2 Composition (bureau)
- Plein écran 100svh, fond NOIR.
- photo-hero en noir et blanc, plein cadre, avec voile noir léger (opacité 0.25) pour l'unité.
- Très grand titre en bas à gauche : « MOLATO » ou le slogan, en Playfair Display, --t-3xl, blanc.
- En haut à droite : un petit texte « Collection [SAISON ANNÉE] » en --t-xs MAJUSCULES.
- En bas à droite : un indicateur « Défiler » avec une fine ligne verticale animée.
- En bas à gauche, sous le titre : un sous-titre court (une phrase, max 14 mots) en Inter 300.
- Un seul bouton : « Découvrir la collection » (ancre #collection), bouton blanc, texte noir.

## 13.3 Composition (mobile)
- Photo en portrait plein écran.
- Titre en bas, sur deux lignes maximum, --t-2xl.
- Sous-titre et bouton empilés, marge basse de 32px.
- Indicateur « Défiler » masqué.

## 13.4 Animations d'entrée
1. Après le preloader, la photo passe de scale(1.15) à scale(1) en 1600ms, --ease-editorial.
2. Le titre se révèle lettre par lettre ou mot par mot : chaque mot sort d'un masque (overflow hidden), translateY(110%) → 0, décalage de 80ms entre les mots, 900ms par mot.
3. Le sous-titre apparaît en fondu + translateY(16px) → 0, avec 400ms de retard.
4. Le bouton apparaît en dernier, avec 700ms de retard.
5. Les petits textes d'angle apparaissent en fondu à 900ms.

## 13.5 Animations au défilement
1. La photo du hero a un léger effet de parallaxe : elle se déplace de 15% moins vite que le défilement (translateY).
2. Le titre se déplace légèrement vers le haut et s'estompe lorsque l'on quitte le hero (opacité 1 → 0 sur les derniers 40% de la hauteur).
3. Limiter la parallaxe à un maximum de 80px de décalage.

## 13.6 Indicateur « Défiler »
- Ligne verticale blanche de 1px et 56px de haut.
- Un petit segment lumineux de 16px descend en boucle dans la ligne (2200ms, --ease-in-out, infini).
- Texte « DÉFILER » en --t-xs à côté, écrit à la verticale (writing-mode: vertical-rl).

## 13.7 Critères de réussite
1. On comprend la marque et son univers en moins de 5 secondes.
2. Le titre reste lisible sur la photo à tout moment.
3. Aucun décalage de mise en page à l'apparition.
4. Le hero se charge en moins de 2,5 secondes sur une connexion 4G moyenne.

---

# 14. SECTION 01 — EN-TÊTE ET NAVIGATION (#entete)

## 14.1 Comportement
1. En-tête fixe en haut (position: fixed), hauteur 72px (mobile 64px).
2. Sur le hero (fond noir/photo) : fond transparent, logo et liens en BLANC.
3. Sur les sections blanches : l'en-tête passe en fond blanc, logo et liens en NOIR.
4. Le changement de thème est automatique selon la section sous l'en-tête (IntersectionObserver ou mesure de position) et se fait en 300ms.
5. Au défilement vers le bas : l'en-tête se masque (translateY(-100%)). Au défilement vers le haut : il réapparaît.
6. Filet fin de 1px sous l'en-tête (opacité 0.12) uniquement sur les sections blanches.

## 14.2 Éléments (bureau)
- Gauche : logo MOLATO.
- Centre : liens — Marque · Collection · Atelier · Lookbook · Contact.
- Droite : bouton « Commander » (contour 1px) et un lien de langue si pertinent.
- Le lien de la section visible est souligné d'un filet de 1px qui s'étire de gauche à droite.

## 14.3 Éléments (mobile)
- Gauche : logo.
- Droite : bouton « Menu » (texte, pas d'icône colorée) ou icône à deux traits fins.
- Au clic : menu plein écran noir, liens en très grand Playfair Display, blanc.

## 14.4 Menu plein écran (mobile et option bureau)
1. Ouverture : le fond noir descend depuis le haut en 700ms (clip-path), --ease-editorial.
2. Les liens apparaissent un par un, translateY(40px) → 0 et fondu, décalage 70ms.
3. En bas du menu : contact, réseaux, adresse en --t-sm.
4. Fermeture : inverse, plus rapide (500ms).
5. La touche Échap ferme le menu. Le focus est piégé dans le menu quand il est ouvert.
6. Le défilement de la page est bloqué quand le menu est ouvert.

## 14.5 Survols des liens
- Un filet de 1px se dessine de gauche à droite (scaleX 0 → 1, origine gauche) en 350ms.
- Au retrait de la souris, le filet disparaît vers la droite (origine droite).
- Aucun changement de couleur.

## 14.6 Accessibilité
1. <header> avec <nav aria-label="Navigation principale">.
2. Bouton du menu avec aria-expanded et aria-controls.
3. Lien d'évitement « Aller au contenu » visible au focus, en tête de page.
4. Focus visible : contour de 2px blanc ou noir selon le fond, décalage de 3px.

---

# 15. SECTION 03 — MANIFESTE (#marque) — FOND BLANC

## 15.1 Rôle
Dire en quelques lignes qui est MOLATO et ce que la marque défend.

## 15.2 Contenu
- Étiquette : « 01 — La marque »
- Titre H2 (une phrase forte, max 12 mots) : [par défaut : « Des vêtements pensés pour durer, coupés pour se remarquer. »]
- Paragraphe 1 (max 45 mots) : l'histoire en bref (origine, ville, conviction).
- Paragraphe 2 (max 45 mots) : la promesse (coupe, matière, finition).
- Trois chiffres ou mentions clés en ligne (facultatif, n'utiliser que des faits réels fournis par le client) :
  [Année de création] · [Nombre de pièces par collection] · [Fait main / local]
- Signature : nom du fondateur ou de la fondatrice en Playfair Display italique, si fourni.

## 15.3 Mise en page (bureau)
- Deux colonnes asymétriques : texte sur 6 colonnes à gauche, photo-manifeste sur 5 colonnes à droite, avec 1 colonne de vide entre les deux.
- La photo dépasse légèrement vers le haut (décalage de -48px) pour casser l'alignement.
- Le grand numéro « 01 » en Playfair Display, --t-3xl, contour noir 1px, remplissage transparent, placé derrière le titre (effet de profondeur éditorial).

## 15.4 Mise en page (mobile)
- Une colonne : étiquette, titre, photo, paragraphes.
- Photo en pleine largeur, ratio 4:5.

## 15.5 Animations
1. Le titre se révèle ligne par ligne (masque + translateY), déclenché quand 25% de la section est visible.
2. La photo se dévoile par un rideau blanc qui se retire vers le haut (clip-path inset(0 0 100% 0) → inset(0)), 1100ms, --ease-editorial, avec un léger scale 1.1 → 1.
3. Les paragraphes apparaissent en fondu avec un décalage de 120ms.
4. Les chiffres clés comptent de 0 à leur valeur (si numériques) en 1400ms, une seule fois.

---

# 16. SECTION 04 — COLLECTION (#collection) — FOND NOIR

## 16.1 Rôle
Présenter les pièces. C'est la section la plus importante pour la conversion.

## 16.2 Contenu
- Étiquette : « 02 — Collection [SAISON ANNÉE] »
- Titre H2 : [par défaut : « La collection. »]
- Introduction (max 30 mots).
- Six pièces (photo-collection-01 à 06). Pour chaque pièce :
  - Nom du vêtement (ex. : « Chemise Kasaï », « Veste Ndjili ») — noms à fournir par le client.
  - Référence courte (ex. : « MO-001 »).
  - Matière principale.
  - Prix avec devise.
  - Tailles disponibles (S, M, L, XL).
  - Bouton « Commander » qui ouvre WhatsApp avec un message prérempli contenant le nom et la référence.
- Filtres facultatifs : Tout · Homme · Femme. Filtres en texte souligné, jamais en boutons colorés.

## 16.3 Mise en page (bureau)
- Grille éditoriale de 12 colonnes avec décalages irréguliers :
  - Pièce 1 : colonnes 1 à 5.
  - Pièce 2 : colonnes 7 à 11, décalée vers le bas de 96px.
  - Pièce 3 : colonnes 2 à 6.
  - Pièce 4 : colonnes 8 à 12, décalée vers le bas de 96px.
  - Pièce 5 : colonnes 1 à 5.
  - Pièce 6 : colonnes 7 à 11, décalée vers le bas de 96px.
- Chaque carte : photo (ratio 3:4), puis sous la photo une ligne avec le nom à gauche et le prix à droite, puis la référence et la matière en --t-sm.
- Un filet blanc de 1px (opacité 0.12) sépare chaque bloc d'information.

## 16.4 Mise en page (mobile)
- Une colonne, pleine largeur.
- Cartes empilées avec 64px d'écart.
- Option : défilement horizontal avec accroche (scroll-snap) à 82% de largeur de carte, pour montrer qu'il y en a d'autres.

## 16.5 Interactions de survol (bureau)
1. La photo passe de scale(1) à scale(1.04) en 700ms.
2. Un second cadrage (photo de détail du même vêtement) apparaît en fondu par-dessus si disponible.
3. Un bouton « Voir / Commander » glisse depuis le bas de la photo (translateY(100%) → 0).
4. Le curseur personnalisé s'agrandit avec le mot « VOIR » à l'intérieur (voir section 21).

## 16.5b Interactions tactiles (mobile)
1. Pas de survol. Le bouton « Commander » est toujours visible sous la photo.
2. Zone tactile minimale : 48px de haut.
3. Retour visuel au toucher : légère baisse de l'opacité (0.8) pendant 150ms.

## 16.6 Animations d'entrée
1. Chaque carte entre avec un décalage : translateY(64px) + fondu → position finale, 900ms, --ease-editorial.
2. La photo se dévoile par un rideau noir qui se retire (clip-path).
3. Les cartes d'une même rangée entrent avec 150ms de décalage.
4. Déclenchement : quand 20% de la carte est visible. Animation une seule fois.

## 16.7 Détail rapide d'une pièce (optionnel, recommandé)
- Au clic sur une carte : un panneau plein écran noir s'ouvre avec la photo en grand, le nom, le prix, la matière, les tailles, la description (max 40 mots), et le bouton « Commander sur WhatsApp ».
- Ouverture : clip-path circulaire depuis le point du clic, 800ms.
- Fermeture : bouton « Fermer », touche Échap, ou clic hors du panneau.
- Navigation : flèches « Précédent / Suivant » pour passer d'une pièce à l'autre sans fermer.
- Focus piégé, aria-modal="true", rôle dialog.

## 16.8 Message WhatsApp prérempli
Format du lien : https://wa.me/[NUMÉRO_SANS_PLUS_NI_ESPACES]?text=[MESSAGE_ENCODÉ]
Message : « Bonjour MOLATO, je souhaite commander : [NOM DE LA PIÈCE] ([RÉFÉRENCE]), taille [À PRÉCISER]. »
Le message est encodé avec encodeURIComponent.

---

# 17. SECTION 05 — DÉTAILS DU VÊTEMENT (#details) — FOND BLANC

## 17.1 Rôle
Montrer la qualité par le gros plan : couture, col, bouton, tissu. Prouver sans parler.

## 17.2 Contenu
- Étiquette : « 03 — Les détails »
- Titre H2 : [par défaut : « Dans les détails. »]
- Trois blocs, chacun avec : photo-detail, un titre court (3 mots), un texte (max 25 mots).
  - Bloc 1 : La matière — [ex. : coton épais, tissage serré].
  - Bloc 2 : La coupe — [ex. : épaule structurée, ligne nette].
  - Bloc 3 : La finition — [ex. : coutures renforcées, boutons choisis].
  Les textes ci-dessus sont des exemples : le client les remplace par des faits réels.

## 17.3 Mise en page (bureau)
- Section en « épinglage » (sticky) : à gauche, le texte reste fixe ; à droite, les trois photos défilent l'une après l'autre.
- Le texte change (fondu croisé 400ms) selon la photo visible.
- Une barre de progression verticale fine (1px, noire) à gauche indique 1/3, 2/3, 3/3.

## 17.4 Mise en page (mobile)
- Pas d'épinglage. Trois blocs empilés : photo puis texte.
- Photos en pleine largeur, ratio 4:5.

## 17.5 Animations
1. La photo active passe de scale(1.08) à scale(1) pendant qu'elle entre dans le champ.
2. Un cercle de loupe (contour blanc 1px, 96px) suit le curseur sur la photo au survol (bureau), agrandissant le détail ×1,6. Option avancée, désactivée sur tactile.
3. Les numéros « 1 / 2 / 3 » s'animent par défilement vertical (rouleau) lors du changement.

---

# 18. SECTION 06 — SAVOIR-FAIRE (#atelier) — FOND NOIR

## 18.1 Rôle
Humaniser la marque. Montrer l'atelier, les mains, le geste.

## 18.2 Contenu
- Étiquette : « 04 — L'atelier »
- Titre H2 : [par défaut : « Fait avec précision. »]
- Texte (max 60 mots) sur le processus : dessin, coupe, assemblage, contrôle.
- Quatre étapes numérotées avec une ligne chacune :
  01 Dessin — [phrase]
  02 Coupe — [phrase]
  03 Assemblage — [phrase]
  04 Contrôle — [phrase]
- Deux photos : photo-atelier-01 et photo-atelier-02.

## 18.3 Mise en page (bureau)
- Photo-atelier-01 en grand sur 7 colonnes à gauche.
- À droite sur 4 colonnes : texte et liste des étapes.
- Photo-atelier-02 plus petite, chevauchant la première, décalée en bas à droite (superposition maîtrisée, filet blanc de 1px autour).
- Les étapes sont séparées par des filets blancs fins (opacité 0.12).

## 18.4 Animations
1. Les filets se dessinent de gauche à droite (scaleX 0 → 1) quand ils entrent à l'écran, 800ms.
2. Les étapes apparaissent l'une après l'autre (120ms de décalage), avec un numéro qui monte d'un masque.
3. Photo-atelier-02 a une vitesse de parallaxe différente (plus rapide de 20%) pour créer de la profondeur.
4. Un texte géant « MOLATO » en contour blanc (1px), opacité 0.08, défile lentement en bandeau horizontal en arrière-plan (marquee, 40s, linéaire, infini). Désactivé si prefers-reduced-motion.

---

# 19. SECTION 07 — LOOKBOOK (#lookbook) — FOND BLANC

## 19.1 Rôle
Donner à voir l'ambiance. Une galerie éditoriale qui fait rêver.

## 19.2 Contenu
- Étiquette : « 05 — Lookbook »
- Titre H2 : [par défaut : « Lookbook [SAISON ANNÉE]. »]
- Huit photos (photo-lookbook-01 à 08), légende courte pour chacune (ex. : « Look 03 — Ensemble noir »).

## 19.3 Mise en page (bureau)
- Galerie en maçonnerie asymétrique (masonry) sur 12 colonnes :
  - Ligne 1 : une grande photo (7 col) + une petite (4 col).
  - Ligne 2 : trois photos de largeur égale (4 col chacune).
  - Ligne 3 : une petite (4 col) + une grande (7 col).
  - Ligne 4 : une photo pleine largeur (12 col, ratio 16:7).
- Espacement vertical varié (48px à 128px) pour un rythme de magazine.
- Légendes en --t-xs MAJUSCULES sous chaque photo, avec le numéro du look.

## 19.4 Mise en page (mobile)
- Une colonne, photos en pleine largeur, ratios alternés (4:5, 1:1, 3:4).
- Option : défilement horizontal en rangées.

## 19.5 Interactions
1. Au survol : la photo gagne en luminosité (brightness 1.06) et la légende se souligne.
2. Au clic : visionneuse plein écran noire (lightbox) avec flèches, compteur « 03 / 08 », fermeture Échap, glissement tactile.
3. Ouverture de la visionneuse : fondu + scale(0.96) → 1 en 500ms.
4. Pré-chargement de l'image suivante.

## 19.6 Animations d'entrée
1. Chaque photo entre avec un rideau blanc qui se retire (clip-path), décalage de 100ms entre photos d'une même ligne.
2. Les légendes apparaissent 300ms après la photo.
3. Parallaxe douce : les photos de la colonne de droite défilent 8% plus vite que celles de la colonne de gauche (bureau uniquement).

---

# 20. SECTION 08 — CITATION (#citation) — FOND NOIR

## 20.1 Rôle
Une respiration. Une phrase qui résume l'esprit de la marque.

## 20.2 Contenu
- Une seule phrase en Playfair Display italique, --t-xl, blanc, centrée, max 14 mots.
- Par défaut : « L'élégance, c'est ce qu'il reste quand on retire le superflu. » (à remplacer par une phrase propre à la marque si possible).
- En dessous : « — MOLATO » en --t-xs.
- Photo de fond (photo-citation) très assombrie (voile 0.85) ou fond noir plein.

## 20.3 Animation
1. La phrase se révèle mot par mot : chaque mot passe d'opacité 0.12 à 1 selon la progression du défilement (effet « lecture progressive »).
2. La section est épinglée (sticky) pendant la révélation, sur environ 120% de la hauteur de l'écran.
3. Sur mobile : révélation par fondu simple, sans épinglage.

---

# 21. SECTION 09 — COMMANDE ET CONTACT (#contact) — FOND BLANC

## 21.1 Rôle
Convertir. Rendre la prise de contact évidente et sans friction.

## 21.2 Contenu
- Étiquette : « 06 — Contact »
- Titre H2 (très grand) : [par défaut : « Parlons de votre prochaine pièce. »]
- Texte court (max 30 mots) : comment commander, délais, livraison.
- Trois canaux sous forme de grandes lignes cliquables (liens), avec flèche « → » :
  1. WhatsApp — [numéro] (lien wa.me)
  2. E-mail — [adresse] (mailto)
  3. Instagram — [@compte] (lien externe, target="_blank", rel="noopener")
- Adresse et horaires de l'atelier ou de la boutique.
- Formulaire simple (facultatif) : Nom, Téléphone, Message, bouton « Envoyer ».

## 21.3 Mise en page (bureau)
- À gauche (6 col) : titre géant et texte.
- À droite (5 col) : liste de canaux, adresse, horaires, formulaire.
- Les canaux sont séparés par des filets noirs de 1px.

## 21.4 Lignes cliquables (canaux)
1. Au survol : un fond noir monte depuis le bas de la ligne (translateY(100%) → 0, 450ms), le texte passe en blanc, la flèche se déplace de 12px vers la droite.
2. Au repos : fond blanc, texte noir.
3. Zone tactile : minimum 64px de haut sur mobile.

## 21.5 Formulaire
1. Champs avec un simple filet inférieur noir de 1px (pas de boîtes arrondies).
2. Les étiquettes montent au-dessus du champ au focus (animation 250ms).
3. Validation en ligne, messages clairs en noir, jamais en rouge.
4. Le message d'erreur est précédé d'un symbole « — » et décrit le problème en une phrase.
5. Bouton « Envoyer » : fond noir, texte blanc ; au survol, inversion (fond blanc, texte noir, contour noir).
6. État d'envoi : le texte du bouton devient « Envoi en cours… ». Succès : message « Merci. Nous vous répondons sous 24 heures. »
7. Si aucun back-end n'est fourni : le formulaire ouvre WhatsApp ou mailto avec les informations saisies. Ne jamais prétendre qu'un message a été envoyé si rien n'a été envoyé.
8. Attributs : autocomplete adapté, type="tel", type="email", labels associés à chaque champ.

---

# 22. SECTION 10 — PIED DE PAGE (#pied) — FOND NOIR

## 22.1 Contenu
- Logo MOLATO géant en blanc, pleine largeur de la page, tout en bas (effet signature).
- Colonnes : Navigation · Réseaux · Contact · Mentions.
- Ligne de bas de page : « © [ANNÉE] MOLATO. Tous droits réservés. »
- Lien « Retour en haut ↑ ».

## 22.2 Animation
1. Le logo géant monte depuis le bas de l'écran (translateY(40%) → 0) lorsque le pied de page entre dans la vue, 1200ms, --ease-editorial.
2. Au survol du logo géant (bureau) : léger effet de « respiration » (scale 1 → 1.01).
3. Le bouton « Retour en haut » fait défiler la page en douceur (800ms) et la flèche se déplace vers le haut.

---

# 23. SYSTÈME D'ANIMATION GLOBAL

## 23.1 Principes
1. Toute animation répond à une intention : révéler, guider, rythmer ou confirmer.
2. Une seule animation majeure à la fois dans le champ de vision.
3. Les animations d'entrée se jouent une seule fois (pas à chaque passage).
4. Les animations ne déplacent jamais le contenu de façon à gêner la lecture.
5. Les propriétés animées sont limitées à transform et opacity (et clip-path). Interdit d'animer width, height, top, left, margin.
6. Utiliser will-change avec parcimonie et le retirer après l'animation.
7. Tout reste fluide à 60 images par seconde sur un téléphone d'entrée de gamme.

## 23.2 Catalogue des animations (à implémenter une fois, réutiliser partout)
1. FONDU-MONTÉE : opacité 0 → 1, translateY(32px) → 0, 800ms, --ease-out.
2. MASQUE-TEXTE : chaque ligne ou mot dans un conteneur overflow:hidden ; le texte passe de translateY(110%) à 0, 900ms, --ease-editorial.
3. RIDEAU-IMAGE : clip-path inset(0 0 100% 0) → inset(0 0 0 0), 1100ms, --ease-editorial, avec scale(1.12) → 1 sur l'image.
4. FILET-DESSIN : transform scaleX(0) → scaleX(1), origine gauche, 800ms, --ease-in-out.
5. COMPTEUR : nombre de 0 à N en 1400ms, ease-out, une seule fois.
6. PARALLAXE : translateY proportionnel au défilement, plafonné à 80px.
7. MARQUEE : défilement horizontal infini d'un texte, linéaire, 40s.
8. ROULEAU-NUMÉRO : changement de chiffre par glissement vertical, 450ms.
9. SOULIGNEMENT-LIEN : filet qui se dessine au survol, 350ms.
10. BOUTON-INVERSION : le fond monte depuis le bas, 450ms, le texte change entre noir et blanc.
11. CURSEUR-AGRANDI : cercle qui grandit au survol des éléments interactifs.
12. RÉVÉLATION-MOTS : l'opacité des mots passe de 0.12 à 1 selon le défilement.
13. FONDU-CROISÉ : changement de texte ou d'image en 400ms.
14. VOLET-PLEIN-ÉCRAN : menu, panneau produit, visionneuse (clip-path ou translateY), 700ms à 800ms.

## 23.3 Déclenchement
1. Utiliser IntersectionObserver (seuil 0.2, rootMargin « 0px 0px -10% 0px ») pour déclencher les entrées.
2. Ajouter la classe « est-visible » une seule fois, puis cesser d'observer l'élément.
3. Les animations liées au défilement continu (parallaxe, révélation de mots) utilisent requestAnimationFrame et sont limitées par un seul écouteur de scroll passif ({ passive: true }).
4. Aucune bibliothèque lourde obligatoire. Autorisé si besoin : GSAP + ScrollTrigger (depuis cdnjs) ou Lenis pour le défilement doux. Si aucune bibliothèque n'est utilisée, tout fonctionne en CSS + JavaScript natif.
5. Si une bibliothèque est utilisée, la page doit rester fonctionnelle (contenu visible) quand le script échoue.

## 23.4 Décalage (stagger)
- Décalage standard entre éléments frères : 80ms à 150ms.
- Plafond : 8 éléments animés en cascade. Au-delà, regrouper.
- Ne jamais dépasser 1,6 seconde de durée totale pour un groupe d'éléments.

## 23.5 Défilement doux
1. Facultatif : défilement inertiel type « smooth scroll » avec une durée d'amortissement de 1,1 seconde.
2. Désactivé automatiquement sur appareils tactiles (le défilement natif est meilleur).
3. Désactivé si prefers-reduced-motion est actif.
4. Les ancres du menu défilent en douceur avec un décalage de la hauteur de l'en-tête (scroll-margin-top).

---

# 24. ACCESSIBILITÉ ET MOUVEMENT RÉDUIT

## 24.1 Mouvement réduit
@media (prefers-reduced-motion: reduce) :
1. Désactiver preloader animé, parallaxe, marquee, défilement doux, rideaux d'images.
2. Remplacer par des apparitions instantanées ou des fondus très courts (150ms).
3. Tout le contenu reste visible et fonctionnel.

## 24.2 Structure sémantique
1. Un seul <h1> (le titre du hero).
2. Chaque section : <section id="…" aria-labelledby="…">.
3. Hiérarchie de titres sans saut (h1 → h2 → h3).
4. <header>, <nav>, <main>, <footer> utilisés correctement.
5. Listes (<ul>, <ol>) pour les menus, les pièces et les étapes.
6. <figure> et <figcaption> pour les photos légendées.
7. Boutons = <button>, liens = <a>. Jamais de <div> cliquable.

## 24.3 Clavier
1. Tout est accessible au clavier, dans un ordre logique.
2. Focus visible partout, contour de 2px, décalage de 3px, noir ou blanc selon le fond.
3. Menus, panneaux et visionneuses : focus piégé à l'intérieur, retour du focus à l'élément déclencheur à la fermeture.
4. Échap ferme les panneaux. Flèches gauche/droite naviguent dans la visionneuse.
5. Lien d'évitement « Aller au contenu principal ».

## 24.4 Contraste et lisibilité
1. Noir sur blanc et blanc sur noir : contraste maximal (21:1).
2. Texte secondaire : opacité minimale 0.70 pour garder un contraste suffisant.
3. Jamais de texte inférieur à 12px. Le texte courant fait 16px minimum sur mobile.
4. Texte sur photo : toujours avec voile (voir 9.6).
5. Ne jamais transmettre une information par la couleur seule (de toute façon il n'y a que noir et blanc).

## 24.5 Lecteurs d'écran
1. Chaque image informative a un alt précis. Chaque image purement décorative a alt="" et aria-hidden.
2. Les éléments décoratifs (filets, curseur, marquee) sont aria-hidden="true".
3. Les changements dynamiques importants (message du formulaire) utilisent aria-live="polite".
4. Le preloader a role="status" puis est retiré du DOM une fois terminé.
5. Les liens externes précisent « (nouvel onglet) » dans un texte visuellement masqué.

## 24.5b Zones tactiles
1. Minimum 44px × 44px, idéalement 48px.
2. Espacement d'au moins 8px entre deux zones cliquables.

---

# 25. CURSEUR PERSONNALISÉ (BUREAU UNIQUEMENT)

## 25.1 Règles
1. Actif uniquement si (hover: hover) and (pointer: fine).
2. Désactivé sur tactile et avec prefers-reduced-motion.
3. Le curseur système reste visible sur les champs de saisie et les zones de texte.

## 25.2 Apparence
1. Un petit cercle de 12px, plein blanc, avec mix-blend-mode: difference pour rester visible sur noir et blanc (donne un effet de contraste automatique, sans introduire de couleur).
2. Suit la souris avec un léger retard (interpolation 0.18).

## 25.3 États
1. Survol d'une photo de collection : le cercle grandit à 88px et affiche « VOIR ».
2. Survol d'un lien ou d'un bouton : le cercle grandit à 40px, sans texte.
3. Survol d'une photo du lookbook : le cercle affiche « OUVRIR ».
4. Pendant un clic : le cercle se réduit à 8px.
5. Retour à l'état normal en 300ms.

---

# 26. ARCHITECTURE TECHNIQUE

## 26.1 Livrables techniques
1. Un seul fichier index.html contenant le HTML, le CSS (dans <style>) et le JavaScript (dans <script>), pour une livraison simple.
2. Si le projet est livré en plusieurs fichiers : index.html, styles.css, script.js, et un dossier /images avec les photos.
3. Les chemins d'images pointent vers /images/ avec les noms d'emplacements (photo-hero.jpg, photo-collection-01.jpg…).
4. Le code est propre, commenté, structuré par sections, avec des noms de classes en français clair (BEM léger).

## 26.2 Squelette HTML attendu
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MOLATO — Mode [VILLE]</title>
  <meta name="description" content="[Description de 150 caractères max]">
  <meta name="theme-color" content="#000000">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="icon" href="/images/favicon.svg">
  <meta property="og:title" content="MOLATO">
  <meta property="og:description" content="[Description]">
  <meta property="og:image" content="/images/og-molato.jpg">
  <meta property="og:type" content="website">
</head>
<body>
  <a class="evitement" href="#contenu">Aller au contenu</a>
  <div id="chargement" role="status" aria-live="polite">…</div>
  <header id="entete">…</header>
  <main id="contenu">
    <section id="accueil">…</section>
    <section id="marque">…</section>
    <section id="collection">…</section>
    <section id="details">…</section>
    <section id="atelier">…</section>
    <section id="lookbook">…</section>
    <section id="citation">…</section>
    <section id="contact">…</section>
  </main>
  <footer id="pied">…</footer>
</body>
</html>

## 26.3 Organisation du CSS
Ordre dans la feuille de style :
1. Tokens (:root).
2. Réinitialisation (reset) minimale.
3. Base (body, titres, paragraphes, liens, images).
4. Utilitaires (conteneur, grille, masqué visuellement, étiquette).
5. Composants (bouton, filet, carte pièce, ligne canal, champ de formulaire).
6. Sections (une par une, dans l'ordre de la page).
7. Animations (classes et @keyframes).
8. Responsive (@media min-width).
9. Mouvement réduit (@media prefers-reduced-motion).

## 26.4 Réinitialisation minimale
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
body { margin: 0; background: var(--blanc); color: var(--noir); font-family: Inter, system-ui, sans-serif; font-size: var(--t-base); line-height: 1.7; -webkit-font-smoothing: antialiased; }
img, picture, video { display: block; max-width: 100%; height: auto; }
button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; margin: 0; padding: 0; }
h1, h2, h3, p { margin: 0; }
:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }

## 26.5 Organisation du JavaScript
Modules logiques (fonctions séparées, appelées dans un init() unique) :
1. initChargement() — gère le preloader et le compteur.
2. initEntete() — thème clair/sombre selon la section, masquage au défilement.
3. initMenu() — ouverture, fermeture, focus piégé.
4. initRevelations() — IntersectionObserver pour les animations d'entrée.
5. initParallaxe() — parallaxe plafonnée, un seul écouteur de scroll.
6. initCompteurs() — chiffres animés.
7. initCollection() — filtres, panneau produit, lien WhatsApp.
8. initDetails() — section épinglée et changement de texte.
9. initLookbook() — visionneuse plein écran.
10. initCitation() — révélation mot par mot.
11. initCurseur() — curseur personnalisé (bureau).
12. initFormulaire() — validation et envoi.
13. initRetourHaut() — bouton de retour.
Chaque fonction vérifie que ses éléments existent avant de s'exécuter (pas d'erreur si une section est retirée).
Aucune variable globale. Tout dans une IIFE ou un module.

## 26.6 Gestion de l'état d'en-tête (exemple de logique)
1. Pour chaque section, lire data-theme="clair" ou data-theme="sombre".
2. Un IntersectionObserver surveille la ligne située sous l'en-tête.
3. Quand une section traverse cette ligne, appliquer le thème correspondant à l'en-tête (classe « entete--clair » ou « entete--sombre »).
4. Transition de 300ms sur la couleur du texte, du logo (filter: invert) et du fond.

## 26.7 Données des pièces (une seule source)
Définir un tableau JavaScript (ou un bloc JSON) au début du script :
[
  { id: "MO-001", nom: "[NOM 1]", matiere: "[MATIÈRE]", prix: "[PRIX]", tailles: ["S","M","L","XL"], photo: "photo-collection-01", genre: "homme", description: "[40 mots max]" },
  { id: "MO-002", … }, … jusqu'à MO-006
]
Les cartes et le panneau produit sont générés à partir de ce tableau. Le client modifie une seule fois les données, la page se met à jour partout.

## 26.8 Données du lookbook
Même principe : un tableau de huit objets { photo, legende, ratio }.

## 26.9 Configuration centrale
Un objet CONFIG en haut du script :
const CONFIG = {
  marque: "MOLATO",
  whatsapp: "[NUMÉRO]",
  email: "[E-MAIL]",
  instagram: "[LIEN]",
  devise: "[USD]",
  saison: "[SAISON ANNÉE]"
};
Tous les liens et textes variables utilisent cet objet.

---

# 27. RESPONSIVE — COMPORTEMENT PAR APPAREIL

## 27.1 Mobile (jusqu'à 599px)
1. Une colonne. Marges latérales 20px.
2. Hero : photo portrait plein écran, titre --t-2xl en bas.
3. Menu plein écran.
4. Collection : cartes empilées ou défilement horizontal avec accroche.
5. Détails : blocs empilés, pas d'épinglage.
6. Lookbook : colonne unique.
7. Pas de curseur personnalisé, pas de survol. Boutons toujours visibles.
8. Typographie fluide pour éviter les débordements.
9. Aucune barre de défilement horizontale. Vérifier avec 320px de large.

## 27.2 Tablette (600px à 1023px)
1. Grille de 8 colonnes.
2. Collection en 2 colonnes.
3. Lookbook en 2 colonnes.
4. Navigation : liens visibles si la place le permet, sinon menu.

## 27.3 Bureau (1024px et plus)
1. Grille de 12 colonnes, décalages éditoriaux, épinglages, curseur, parallaxe.
2. Navigation complète.
3. Largeur de contenu plafonnée à 1440px.

## 27.4 Très grands écrans (1920px et plus)
1. Contenu centré, plafonné.
2. Hero et pied de page peuvent rester pleine largeur.
3. Tailles typographiques plafonnées par les valeurs maximales des clamp().

## 27.5 Orientation
1. Téléphone en paysage : hero en 100svh sans que le titre soit coupé ; réduire --t-3xl à --t-2xl.
2. Prévoir min-height plutôt que height fixe pour tous les blocs plein écran.

## 27.6 Zones sûres (encoche)
1. Utiliser env(safe-area-inset-*) pour l'en-tête et le menu sur iPhone.
2. viewport-fit=cover si nécessaire.

---

# 28. PERFORMANCE

## 28.1 Objectifs mesurables
1. LCP (affichage du plus grand élément) : moins de 2,5 secondes en 4G.
2. CLS (décalage de mise en page) : moins de 0,05.
3. INP (réactivité) : moins de 200ms.
4. Poids total initial (hors images en lazy) : moins de 500 Ko.
5. Score Lighthouse mobile : 90+ en Performance, 100 en Accessibilité, 100 en Bonnes pratiques, 95+ en SEO.

## 28.2 Images
1. Compresser toutes les photos : WebP qualité 78 à 82, ou AVIF.
2. Le hero : maximum 250 Ko en mobile, 450 Ko en bureau.
3. Autres photos : maximum 180 Ko chacune.
4. Fournir plusieurs tailles avec srcset et sizes.
5. Réserver l'espace avec width/height ou aspect-ratio pour éviter le CLS.
6. Lazy loading sur tout ce qui est sous le premier écran.
7. Fond flou ou bloc gris neutre pendant le chargement (placeholder).

## 28.3 Polices
1. Deux familles seulement, quatre à cinq graisses au total.
2. font-display: swap et preconnect.
3. Sous-ensemble latin (ajouter latin-ext pour les accents si nécessaire).

## 28.4 JavaScript
1. Charger le script avec defer.
2. Pas de bibliothèque inutile.
3. Écouteurs passifs pour scroll et touch.
4. Limiter les calculs dans le scroll ; mutualiser dans un seul requestAnimationFrame.
5. Détacher les observateurs une fois les animations jouées.

## 28.5 CSS
1. Animer uniquement transform, opacity, clip-path.
2. Utiliser content-visibility: auto sur les sections sous le premier écran, avec contain-intrinsic-size adapté.
3. Éviter les filtres coûteux (blur) sur de grandes surfaces.
4. Le filtre grayscale sur les images est appliqué en CSS, ou mieux : convertir les images en noir et blanc en amont si possible pour économiser le GPU.

---

# 29. SEO ET PARTAGE

1. Balise <title> unique et claire (60 caractères max).
2. Meta description (150 à 160 caractères).
3. Balises Open Graph et Twitter Card avec une image 1200×630 (noir et blanc).
4. Données structurées JSON-LD de type Organization (ou ClothingStore) avec nom, logo, URL, adresse, réseaux.
5. lang="fr" sur <html>.
6. Texte réel dans le HTML (pas de texte intégré uniquement dans des images).
7. Attributs alt riches et naturels.
8. Un seul H1.
9. Fichiers robots.txt et sitemap.xml simples si le projet est publié.
10. Favicon : le « M » de MOLATO en noir sur blanc (SVG), version sombre via media query.

---

# 30. CONTENU PROVISOIRE (PLACEHOLDERS PROPRES)

## 30.1 Règle
Tant que le client n'a pas fourni ses textes, utiliser des textes provisoires crédibles, courts, clairement marqués [À REMPLACER] dans le code (commentaire HTML), mais jamais de lorem ipsum visible.

## 30.2 Textes provisoires proposés
- Slogan : « Porter l'essentiel. »
- Sous-titre hero : « Des vêtements coupés avec précision, pensés pour la ville. »
- Manifeste, paragraphe 1 : « MOLATO naît d'une conviction simple : un vêtement doit être juste. Juste dans sa coupe, juste dans sa matière, juste dans son prix. »
- Manifeste, paragraphe 2 : « Chaque pièce est dessinée, coupée et contrôlée avec le même soin. Peu de pièces. Beaucoup d'exigence. »
- Détail matière : « Des tissus choisis pour leur tenue et leur confort, jour après jour. »
- Détail coupe : « Des lignes nettes, des épaules structurées, une silhouette qui tombe juste. »
- Détail finition : « Coutures renforcées, boutons sélectionnés, chaque détail est vérifié à la main. »
- Atelier : « Du premier trait au dernier point, la pièce passe par quatre étapes. À chacune, un contrôle. »
- Contact : « Écrivez-nous sur WhatsApp. Nous vous répondons sous 24 heures. »
- Mention : « Livraison possible. Retouches sur rendez-vous. »

## 30.3 Interdits
1. Pas de faux témoignages de clients.
2. Pas de faux chiffres (nombre de clients, années d'expérience) s'ils ne sont pas fournis.
3. Pas de fausses récompenses ou de logos de presse.
4. Pas de faux prix présentés comme définitifs : indiquer « Prix à confirmer » dans le commentaire du code.

---

# 31. TEXTES D'INTERFACE (MICROCOPIE)

- Bouton principal hero : « Découvrir la collection »
- Bouton pièce : « Commander »
- Bouton panneau produit : « Commander sur WhatsApp »
- Bouton fermer : « Fermer »
- Navigation visionneuse : « Précédent » / « Suivant »
- Compteur visionneuse : « 03 / 08 »
- Indicateur défilement : « Défiler »
- Retour : « Retour en haut »
- Formulaire — étiquettes : « Nom », « Téléphone », « Votre message »
- Formulaire — envoi : « Envoyer »
- Formulaire — en cours : « Envoi en cours… »
- Formulaire — succès : « Merci. Nous vous répondons sous 24 heures. »
- Formulaire — erreur nom : « — Indiquez votre nom. »
- Formulaire — erreur téléphone : « — Indiquez un numéro valide. »
- Formulaire — erreur message : « — Écrivez quelques mots. »
- Filtres : « Tout », « Homme », « Femme »
- Lien d'évitement : « Aller au contenu principal »

---

# 32. ÉTATS ET CAS LIMITES

1. Photo manquante : afficher un bloc neutre avec le nom de l'emplacement. Pas d'icône d'image cassée.
2. Chargement lent : le preloader plafonne à 3 secondes ; la page reste utilisable.
3. JavaScript désactivé : tout le contenu reste lisible ; les éléments « à révéler » sont visibles par défaut (classe « js » ajoutée par script avant de masquer).
4. Réseau lent : images en lazy, placeholders gris.
5. Texte très long (nom de pièce) : retour à la ligne propre, pas de débordement (overflow-wrap: anywhere).
6. Zoom du navigateur à 200% : la page reste utilisable.
7. Mode sombre du système : la page garde sa palette noire et blanche (elle est déjà bicolore). Ne pas inverser les photos.
8. Impression : version noir et blanc, sans animations, sans menu (@media print).
9. Écran très étroit (320px) : aucune coupe de contenu.
10. Écran très large (2560px) : contenu centré, pas d'étirement des photos.

---

# 33. STYLE DES COMPOSANTS (SPÉCIFICATIONS)

## 33.1 Bouton principal
- Hauteur 56px, padding horizontal 32px, angles droits.
- Fond noir, texte blanc (sur fond clair) ; fond blanc, texte noir (sur fond sombre).
- Texte : Inter 500, MAJUSCULES, 0.14em.
- Survol : le fond inverse par montée (BOUTON-INVERSION), contour 1px de la couleur opposée.
- Actif : scale(0.98), 120ms.
- Focus : contour 2px, décalage 3px.
- Une flèche « → » à droite du texte, qui se déplace de 6px au survol.

## 33.2 Bouton secondaire
- Même taille, fond transparent, contour 1px (noir ou blanc selon le fond).
- Survol : fond rempli par montée.

## 33.3 Lien textuel
- Souligné par un filet de 1px à 4px sous le texte ; le filet se redessine au survol.

## 33.4 Étiquette de section
- Format : « 03 — Collection ».
- Inter 500, --t-xs, MAJUSCULES, espacement 0.18em, opacité 0.7.
- Un filet de 40px avant le texte.

## 33.5 Carte pièce
- Photo, nom, prix, référence, matière.
- Pas de bordure, pas d'ombre, pas de fond de carte.
- Filet fin sous les informations.

## 33.6 Champ de formulaire
- Pas de boîte. Filet inférieur de 1px.
- Étiquette flottante qui monte au focus.
- Hauteur 56px, texte 16px minimum (évite le zoom automatique sur iPhone).

## 33.7 Panneau produit
- Plein écran noir, photo à gauche (55%), informations à droite (45%) sur bureau ; empilé sur mobile.
- Barre supérieure : référence à gauche, bouton « Fermer » à droite.

## 33.8 Visionneuse du lookbook
- Fond noir 96%, photo centrée avec marges de 5vh.
- Légende en bas, compteur en haut à gauche, bouton fermer en haut à droite.
- Flèches fines, zone tactile 56px.

## 33.9 Filets
- Horizontaux uniquement, 1px, opacité 0.12 à 0.3.

---

# 34. CONTRÔLE QUALITÉ — LISTE DE VÉRIFICATION

## 34.1 Couleurs
[ ] Seuls le noir et le blanc sont utilisés (aucune autre teinte nulle part).
[ ] Les gris sont uniquement des transparences du noir ou du blanc.
[ ] Aucune ombre colorée, aucun dégradé coloré.
[ ] Les photos sont en noir et blanc (grayscale).
[ ] Le logo est noir sur blanc et blanc sur noir, jamais d'autre couleur.

## 34.2 Structure
[ ] Une seule page, scroll vertical, sections dans l'ordre défini.
[ ] Alternance noir / blanc respectée.
[ ] Tous les liens d'ancre fonctionnent.
[ ] Aucun lorem ipsum visible.
[ ] Aucun lien mort.

## 34.3 Typographie
[ ] Deux familles seulement (Playfair Display + Inter).
[ ] Hiérarchie claire : un seul H1, H2 par section.
[ ] Paragraphes limités à 62 caractères de large.
[ ] Aucun texte inférieur à 12px.

## 34.4 Images
[ ] Tous les emplacements nommés existent (data-photo).
[ ] Alt présent et pertinent.
[ ] width/height ou aspect-ratio définis.
[ ] Lazy loading sauf le hero.
[ ] Aucune image étirée.

## 34.5 Animations
[ ] Preloader de 3 secondes maximum.
[ ] Entrée du hero fluide.
[ ] Entrées de sections déclenchées une seule fois.
[ ] Aucune animation ne gêne la lecture.
[ ] Seuls transform, opacity et clip-path sont animés.
[ ] prefers-reduced-motion respecté.

## 34.6 Interaction
[ ] Menu : ouverture, fermeture, Échap, focus piégé.
[ ] Panneau produit : ouverture, navigation, fermeture.
[ ] Visionneuse : flèches, glissement, Échap.
[ ] Boutons WhatsApp : message prérempli correct.
[ ] Formulaire : validation claire, aucun faux succès.

## 34.7 Responsive
[ ] 320px, 375px, 414px, 768px, 1024px, 1280px, 1440px, 1920px testés.
[ ] Aucun défilement horizontal.
[ ] Zones tactiles de 44px minimum.
[ ] Hero correct en portrait et en paysage.

## 34.8 Accessibilité
[ ] Navigation au clavier complète.
[ ] Focus visible.
[ ] Contraste maximal.
[ ] Lecteur d'écran : structure et textes alternatifs corrects.
[ ] Lien d'évitement présent.

## 34.9 Performance
[ ] LCP < 2,5 s, CLS < 0,05.
[ ] Poids initial < 500 Ko hors images différées.
[ ] Pas de bibliothèque inutile.

## 34.10 Marque
[ ] Le ton est sobre, élégant, sans exclamation.
[ ] Les textes sont courts.
[ ] Le logo respecte sa zone de protection.
[ ] Rien ne ressemble à un template générique.

---

# 35. PROCESSUS DE TRAVAIL DEMANDÉ À CLAUDE DESIGN

Étapes à suivre dans l'ordre. Ne saute aucune étape.

## 35.1 Étape A — Lecture et confirmation
1. Lis l'intégralité de ce brief.
2. Liste en cinq lignes maximum ce que tu as compris (marque, couleurs, structure, photos, animations).
3. Liste les champs [ENTRE CROCHETS] encore vides et la valeur par défaut que tu vas utiliser.
4. Ne pose pas plus de trois questions, et seulement si elles bloquent vraiment.
5. Si aucune question ne bloque, continue directement.

## 35.2 Étape B — Direction artistique
1. Présente la direction en un court paragraphe.
2. Montre les tokens (couleurs, typographie, espacements).
3. Décris le hero en détail (composition, animation).

## 35.3 Étape C — Construction
1. Construis la page complète, section par section, dans l'ordre défini à la section 11.
2. Respecte tous les tokens et toutes les règles.
3. Génère le code complet et fonctionnel.

## 35.4 Étape D — Animations
1. Implémente le catalogue d'animations (section 23.2).
2. Vérifie la fluidité et le mouvement réduit.

## 35.5 Étape E — Vérification
1. Passe la liste de contrôle de la section 34.
2. Corrige tout écart avant de livrer.
3. Indique clairement ce qui est fait, et ce qui dépend d'un élément du client (photos, textes, numéro).

## 35.6 Étape F — Livraison
1. Livre le fichier complet de la page.
2. Résume en dix lignes maximum : structure, choix de design, éléments à fournir par le client.
3. Propose trois améliorations possibles, classées par impact.

---

# 36. FORMAT DE RÉPONSE ATTENDU

1. Réponse en français.
2. Structure : « Compréhension », « Direction artistique », « Page livrée », « Éléments à fournir », « Améliorations proposées ».
3. Le code est livré en un seul bloc complet, sans coupure, sans « le reste est identique ».
4. Jamais de « ... » dans le code. Chaque section est écrite entièrement.
5. Les commentaires du code sont en français et expliquent les choix importants.
6. Pas de remplissage, pas de formules de politesse excessives.

---

# 37. ÉLÉMENTS À FOURNIR PAR LE CLIENT (CHECKLIST CLIENT)

## 37.1 Obligatoires
[ ] Logo MOLATO noir (SVG ou PNG transparent, 2000px de large minimum).
[ ] Photo hero (portrait ou paysage, haute résolution).
[ ] Photos des six pièces de la collection.
[ ] Noms, références, matières, prix et tailles des pièces.
[ ] Numéro WhatsApp, e-mail, compte Instagram.
[ ] Adresse et horaires (ou mention « sur rendez-vous »).

## 37.2 Recommandés
[ ] Trois photos de détails (matière, coupe, finition).
[ ] Deux photos d'atelier.
[ ] Huit photos de lookbook.
[ ] Slogan officiel.
[ ] Texte du manifeste (2 paragraphes).
[ ] Prénom du fondateur ou de la fondatrice et signature.

## 37.3 Facultatifs
[ ] Photo de fond pour la citation.
[ ] Photo pour la section contact.
[ ] Liens vers d'autres réseaux.
[ ] Mentions légales.

---

# 38. CONSIGNES PHOTO POUR LE CLIENT (POUR OBTENIR UN RENDU PRO)

1. Lumière : naturelle, douce, près d'une grande fenêtre, ou studio avec deux sources diffuses.
2. Fond : uni, blanc ou noir, ou mur simple. Pas d'objets qui distraient.
3. Vêtement : repassé, propre, bien ajusté, sans plis involontaires.
4. Cadrages : une photo large (tenue entière), une photo mi-corps, une photo de détail pour chaque pièce.
5. Format : orientation portrait pour la majorité (3:4 ou 4:5).
6. Résolution : 3000px sur le grand côté minimum, pas de compression excessive.
7. Cohérence : même lumière et même style pour toutes les photos d'une même collection.
8. Contraste : éviter les surexpositions. Le noir et blanc exige un bon contraste naturel.
9. Poses : naturelles, sobres, sans effets. Le vêtement doit rester le sujet.
10. Prévoir une photo dont la partie gauche ou basse est calme pour accueillir le titre du hero.

---

# 39. ERREURS À ÉVITER ABSOLUMENT

1. Ajouter une couleur « pour égayer » : interdit.
2. Utiliser des icônes colorées ou des émojis : interdit.
3. Mettre trop d'animations en même temps : interdit.
4. Écrire un texte long là où une phrase suffit : interdit.
5. Étirer ou déformer le logo : interdit.
6. Inventer des photos de vêtements : interdit.
7. Utiliser un carrousel automatique rapide : interdit.
8. Cacher le prix ou le moyen de commander : interdit.
9. Oublier la version mobile : interdit.
10. Ignorer le mouvement réduit : interdit.
11. Livrer du code incomplet : interdit.
12. Copier le design d'une autre marque : interdit.
13. Utiliser des fenêtres pop-up à l'ouverture : interdit.
14. Faire dépendre la lisibilité d'une animation : interdit.
15. Laisser un lien ou un bouton sans action : interdit.

---

# 40. ÉVOLUTIONS FUTURES (À PRÉVOIR DANS LE CODE, SANS LES IMPLÉMENTER)

1. Ajout d'une boutique avec panier et paiement mobile.
2. Version anglaise de la page (structure prête pour deux langues).
3. Ajout de nouvelles collections via le tableau de données.
4. Intégration d'un compteur de visites ou d'analytique respectueux de la vie privée.
5. Ajout d'une section « Presse » ou « Partenaires » en noir et blanc.
6. Newsletter simple (champ e-mail).

---

# 41. INSTRUCTION FINALE

Exécute ce brief avec rigueur.
Deux couleurs. Des photographies professionnelles de vrais vêtements. Le logo noir MOLATO. Une seule page.
Chaque animation est sobre, intentionnelle et fluide.
Chaque texte est court. Chaque espace est volontaire.
Livre une page qu'une maison de mode pourrait publier telle quelle.
Commence maintenant par l'étape A.

---

# 42. ANNEXE A — PROMPTS D'ITÉRATION (À UTILISER APRÈS LA PREMIÈRE VERSION)

Après la livraison, utilise ces demandes courtes pour affiner. Une demande à la fois.

## 42.1 Ajustements visuels
1. « Augmente le contraste du hero et agrandis le titre de 10%. »
2. « Ajoute plus d'espace vertical entre la collection et les détails. »
3. « Rends le pied de page plus imposant : logo MOLATO sur toute la largeur. »
4. « Remplace la grille de la collection par une grille symétrique de 3 colonnes. »
5. « Réduis la taille des légendes et augmente l'espacement des lettres. »

## 42.2 Ajustements d'animation
1. « Ralentis l'animation du hero de 20%. »
2. « Supprime la parallaxe sur le hero, garde-la sur l'atelier. »
3. « Ajoute un effet de rideau sur chaque photo du lookbook. »
4. « Rends l'ouverture du menu plus rapide (500ms). »
5. « Désactive le curseur personnalisé. »

## 42.3 Ajustements de contenu
1. « Remplace le slogan par : [NOUVEAU SLOGAN]. »
2. « Mets à jour le prix de la pièce MO-003 : [PRIX]. »
3. « Ajoute une septième pièce : [NOM, MATIÈRE, PRIX]. »
4. « Traduis la page en anglais en gardant la même structure. »
5. « Raccourcis tous les paragraphes de 20%. »

## 42.4 Ajustements techniques
1. « Sépare le code en trois fichiers : index.html, styles.css, script.js. »
2. « Optimise les images pour un poids total inférieur à 3 Mo. »
3. « Vérifie l'accessibilité et corrige tout ce qui échoue. »
4. « Teste mentalement la page à 320px et corrige les débordements. »
5. « Ajoute les données structurées JSON-LD pour le référencement. »

---

# 43. ANNEXE B — RÈGLES DE DÉCISION EN CAS DE CONFLIT

Quand deux règles semblent se contredire, applique cet ordre de priorité :
1. Les contraintes absolues (section 4) : noir et blanc, vraies photos, logo intact, mono-page.
2. L'accessibilité et la lisibilité (section 24).
3. La performance (section 28).
4. La clarté de la hiérarchie visuelle.
5. L'élégance des animations.
6. Les préférences esthétiques secondaires.

Exemples :
- Une animation spectaculaire gêne la lecture → la supprimer ou la simplifier.
- Une photo en couleur est fournie → l'afficher en noir et blanc (règle 4.1).
- Un texte est illisible sur une photo → ajouter un voile plus dense avant de changer la photo.
- Le logo fourni est en couleur → utiliser sa version monochrome noire ou blanche, signaler l'écart.
- Une section semble trop vide → ne pas la remplir ; l'espace fait partie du luxe.

---

# 44. ANNEXE C — GLOSSAIRE

- Hero : premier écran de la page, plein écran, avec la photo principale.
- Lookbook : galerie de photos d'ambiance présentant la collection portée.
- Parallaxe : décalage de vitesse entre deux plans pendant le défilement.
- Clip-path : découpe d'un élément, utilisée pour créer des effets de rideau.
- Sticky / épinglage : élément qui reste fixe à l'écran pendant que le reste défile.
- Preloader : écran de chargement initial.
- Marquee : texte qui défile en boucle horizontalement.
- Token : variable de design (couleur, espacement, durée) définie une seule fois.
- LCP, CLS, INP : mesures de performance perçue par l'utilisateur.
- Stagger : décalage dans le temps entre plusieurs éléments qui s'animent.
- Voile : calque semi-transparent noir posé sur une photo pour rendre le texte lisible.
- Mono-page : site entier contenu dans une seule page, navigation par ancres.

---

# FIN DU BRIEF
