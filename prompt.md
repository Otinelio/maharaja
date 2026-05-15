━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROMPT LOVABLE — MAHARAJA LOUNGE & FINE DINING
Le Roi des Saveurs Indiennes · Lomé, Togo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

— VISION GLOBALE —

Le visiteur arrive sur le site et il sent quelque chose. Pas un restaurant. Un palais. L'écran s'ouvre sur un fond de nuit impériale — ce noir profond et légèrement chaud que l'on appelle Nuit Moghole — traversé par un halo doré comme la lueur d'une bougie à travers le cristal. Il y a du safran dans l'air. Il y a de la laque et du bois de santal dans les textures. Les titres arrivent au ralenti, dorés, avec l'autorité d'une proclamation royale. Maharaja ne ressemble à aucun autre restaurant à Lomé : là où la ville est vibrante et soudaine, le site est souverain et délibéré. Chaque scroll révèle un nouveau tableau — un curry brûlant de couleur, un naan soufflé et doré, une salle de restaurant baignée d'une lumière à la fois chaude et solennelle. C'est l'Inde impériale réinventée pour une soirée à Assivito — à deux kilomètres de la mer, au premier étage d'un bâtiment qui cache un royaume.

---

— ARCHITECTURE GLOBALE — MÊME PROJET REACT, MÊME CODEBASE —

```
PAGES DE L'APPLICATION

━ PUBLIC (navigation principale) ━
  /           → Home     : hero royal, ambiance, CTA vers /menu
  /about      → À propos : histoire Maharaja, valeurs, cuisine
  /contact    → Contact  : adresse, horaires, WhatsApp, réseaux
  /menu       → Menu     : catalogue complet, panier, commande WhatsApp

━ ACCÈS RESTREINT (URL directe uniquement — aucun lien dans la navigation) ━
  /admin      → Dashboard admin     : gestion menu, catégories, paramètres
  /menu/scan  → Menu sur place      : identique à /menu + modal table bloquant + suivi commande
  /cuisine    → Interface brigade   : Kanban 4 colonnes, tickets, bips, statuts

NAVIGATION PUBLIQUE :
  Mobile  : bottom navigation bar fixe (Home | Menu | À propos | Contact)
            → icônes lucide-react, label 10px, onglet actif = couleur Saffron Moghole
  Desktop : top navbar horizontale, fond Nuit Moghole avec blur 20px
            → NE PAS créer de lien vers /admin, /menu/scan ou /cuisine dans la navigation
            → Ces pages sont accessibles uniquement en tapant l'URL directement
```

---

— DIRECTION ESTHÉTIQUE —

Nom de la direction : "Impérial Sensoriel · Lounge Moghol Contemporain"

Ce que le site N'EST PAS :
- Pas un restaurant indien générique avec fond rouge et motifs répétitifs bon marché
- Pas un site fast-food aux couleurs criardes avec emojis partout
- Pas un site "exotique kitsch" avec des éléphants en clip-art et des polices dorées pixelisées

Ce que le site EST :
- Un éditorial gastronomique de luxe, comme une double page de Condé Nast Traveler dédiée à un palais de Jaipur
- La rencontre entre la chaleur royale indo-moghole et l'élégance sobre d'un lounge contemporain de Lagos ou Abidjan
- Un objet visuel qui se prend lui-même au sérieux — comme son nom l'indique : "Maharaja" est un roi, pas un food truck

Comportement de la grille : éditorial asymétrique. Les sections alternent entre typographie surdimensionnée à gauche et image plein-cadre à droite, puis s'inversent. Dense en images, aéré en texte.

Caractère général : fond sombre dominant (Nuit Moghole #120D07), accents or et safran strictement limités, photos saturées et chaudes, typographie élégante à fort contraste.

---

— PALETTE SIGNATURE MAHARAJA —

Ces 6 couleurs sont exclusives à Maharaja — ne pas utiliser de valeurs génériques.

```
COULEUR                   | DESCRIPTION ÉVOCATRICE                                      | HEX       | RÈGLE D'USAGE STRICTE
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Nuit Moghole              | Noir chaud teinté d'ocre — la couleur du ciel de Jaipur      | #120D07   | Fond principal de toutes les pages publiques
                          | après le coucher de soleil, jamais un noir pur               |           | Ne pas mélanger avec du blanc pur
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Saffron Moghole           | Or ambré profond — pas le jaune, pas le miel : l'exacte      | #C9A84C   | Couleur accent principale : CTA, prix, titres H1,
                          | teinte du safran Kashmir qui infuse dans l'eau chaude         |           | bordures actives, badge panier. Max 15% de l'interface.
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Rajput Cramoisi           | Rouge sang royal — profond, presque brun-carmin, la couleur  | #8B1A2F   | Accents secondaires, hover sur cartes, indicateurs
                          | des turbans des gardes du Maharaja de Jodhpur                |           | d'urgence en cuisine. Jamais sur fond sombre sans halo.
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Ivoire Tandoor            | Blanc cassé très chaud — comme la paroi intérieure d'un      | #F5EDD6   | Texte courant sur fonds sombres, descriptions de plats,
                          | four tandoor en terre cuite, jamais froid ni bleuté           |           | fond dashboard admin. Jamais en grande surface sur fond clair.
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Paon Royal                | Bleu-vert profond — la couleur exacte du plumage du paon     | #1B4D52   | Utilisé uniquement pour les badges végétariens, la section
                          | indien dans l'ombre, rare et souverain                        |           | "Thali végétarien", et les icônes de catégorie herbacée.
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Cendre Impériale          | Gris brun très sombre — la couleur de la pierre ancienne     | #2A2118   | Fond des cards, fond du CartDrawer, séparateurs de section.
                          | des forts moghols, entre le noir et la terre cuite            |           | Jamais seul : toujours avec un accent Saffron ou Ivoire.
```

---

— TYPOGRAPHIE —

Deux fonts Google Fonts uniquement.

POLICE 1 — Cormorant Garamond
Justification : Coupante, royale, avec des empattements fins qui évoquent la calligraphie moghole et les manuscrits enluminés. Elle donne aux titres l'autorité d'une proclamation — sans surcharge ornementale.

Spécifications par usage :
- Hero (nom du restaurant) : 96px desktop / 56px mobile · weight 600 · letter-spacing -0.02em · casse : MAJUSCULES · couleur : dégradé de #C9A84C à #F5EDD6 (135deg)
- Tagline hero : 22px · weight 300 · letter-spacing 0.15em · MAJUSCULES · couleur : #F5EDD6 à 70%
- Titres de section H2 : 52px desktop / 36px mobile · weight 500 · letter-spacing 0.04em · mixte
- Noms des plats dans les cards : 20px · weight 600 · letter-spacing 0em · mixte
- Citation (page About) : 36px · weight 300 italic · letter-spacing 0.02em · couleur : #C9A84C

POLICE 2 — Inter
Justification : Neutralité absolue et lisibilité maximale pour tout ce qui est fonctionnel. Elle disparaît derrière le contenu.

Spécifications par usage :
- Descriptions de plats : 14px · weight 400 · line-height 1.6 · letter-spacing 0em · couleur : #F5EDD6 à 65%
- Prix : 18px · weight 700 · lettre-spacing 0.03em · couleur : #C9A84C
- Labels catégories (CategoryNav) : 13px · weight 500 · MAJUSCULES · letter-spacing 0.08em
- Boutons CTA : 14px · weight 600 · MAJUSCULES · letter-spacing 0.1em
- Navigation mobile labels : 10px · weight 500 · MAJUSCULES · letter-spacing 0.06em
- Body texte général : 16px · weight 400 · line-height 1.7

---

— ICÔNES —

Règle absolue : zéro emoji dans l'interface. Partout, jamais, aucun.
Toute représentation visuelle passe par des icônes vectorielles `lucide-react`.

```
Stroke width global : 1.5 (élégant, conforme à l'ambiance lounge)

Mapping obligatoire :
- Nav Home       : Home              - Nav Menu      : UtensilsCrossed
- Nav About      : Info              - Nav Contact   : MapPin
- CartFab        : ShoppingCart      - Ajouter       : Plus
- Enlever        : Minus             - Supprimer     : Trash2
- WhatsApp CTA   : MessageCircle (#25D366)
- Table (modal)  : Hash
- Adresse        : MapPin            - Horaires      : Clock
- Admin logout   : LogOut            - Admin save    : Save
- Admin edit     : Pencil            - Admin delete  : Trash2
- Végétarien     : Leaf (Paon Royal #1B4D52)
- Épicé          : Flame (Rajput Cramoisi #8B1A2F)
- Cuisine pending: Clock (#C9A84C)   - Cuisine prep  : Flame (#E8883A)
- Cuisine ready  : BellRing (#25D366)- Cuisine served: CheckCircle (#666666)
- Toast cuisine  : Bell              - Archive       : Archive
- Logout cuisine : LogOut
```

---

— ÉCRAN DE CHARGEMENT —

Durée totale : 2 secondes.
- 0ms → 400ms : fond Nuit Moghole #120D07 opaque, lettre "M" en Cormorant Garamond 120px couleur #C9A84C apparaît avec scale 0.6 → 1 + opacity 0 → 1 (ease-out 400ms)
- 400ms → 900ms : les lettres "AHARAJA" arrivent une à une depuis la droite, stagger 60ms, chacune avec translateX(20px)→0 + opacity
- 900ms → 1500ms : ligne dorée fine (1px, largeur 60px) se dessine sous le nom, gauche → droite, 600ms linear
- 1500ms → 2000ms : l'ensemble fade-out opacity 1→0, fond disparaît, la page s'installe
- Pas de spinner générique. Pas de barre de chargement. Pas d'animation bounce.

---

— NAVIGATION —

Desktop (topbar fixe)
- Hauteur 72px · fond Nuit Moghole #120D07 avec backdrop-filter blur(20px) opacity 0.92
- Logo gauche : "MAHARAJA" en Cormorant Garamond 24px · weight 600 · couleur #C9A84C
- Liens : Inter 13px · MAJUSCULES · weight 500 · letter-spacing 0.1em · couleur #F5EDD6 à 80%
- Hover : couleur → #C9A84C, avec underline 1px de couleur #C9A84C qui se dessine de gauche à droite en 250ms ease-out
- CTA "Commander" à droite : bordure 1px #C9A84C · couleur #C9A84C · padding 10px 24px · border-radius 2px · hover : fond #C9A84C, couleur #120D07, transition 200ms

Mobile (bottom navigation fixe)
- Hauteur 64px · fond #120D07 · border-top 1px solid #2A2118
- 4 onglets : Home (Home) | Menu (UtensilsCrossed) | À propos (Info) | Contact (MapPin)
- Onglet inactif : icône + label, couleur #F5EDD6 à 45%
- Onglet actif : icône + label, couleur #C9A84C · indicateur : point 4px rond #C9A84C centré sous le label

---

— VOLET 1 : SITE VITRINE + COMMANDE —

Page Home (`/`)

HERO — 100vh, centré vertical
- Image de fond : photo grand format de l'intérieur du restaurant Maharaja (Unsplash fallback : "indian fine dining restaurant warm candlelight gold") · traitement CSS : saturate(1.2) contrast(0.9) brightness(0.55)
- Overlay : gradient radial centré, center → bords, rgba(18,13,7,0) → rgba(18,13,7,0.85)
- Contenu centré :
  - "MAHARAJA" en Cormorant Garamond 96px · dégradé doré · apparaît en fondu depuis scale(0.95) en 800ms ease-out
  - Sous-titre : "LOUNGE & FINE DINING" en Inter 12px · MAJUSCULES · letter-spacing 0.25em · couleur #F5EDD6 à 70% · stagger 300ms après le titre
  - Accroche : "Voyage en Inde au cœur de Lomé" en Cormorant Garamond 26px italic · couleur #C9A84C · stagger 500ms
  - CTA : bouton "Découvrir le menu" · bordure 1px solid #C9A84C · Inter 13px MAJUSCULES · letter-spacing 0.1em · hover : fond #C9A84C, couleur #120D07
- Scroll indicator : ligne verticale fine 40px #C9A84C qui pulse en opacity 1→0.2→1 toutes les 2s, centré en bas du hero

SECTION SIGNATURES — 3 piliers
- Fond : #120D07 · padding vertical 100px
- 3 colonnes centrées (desktop) / colonne unique (mobile) avec séparateur vertical 1px #2A2118
- Pilier 1 : icône UtensilsCrossed (32px, #C9A84C) · titre "Gastronomie Authentique" · texte "Épices sélectionnées, recettes d'origine, cuisine ouverte sur chaque assiette."
- Pilier 2 : icône MapPin (32px, #C9A84C) · titre "Fine Dining à Lomé" · texte "1er étage, Immeuble RAMCO, Avenue du 24 Janvier — un cadre souverain au cœur d'Assivito."
- Pilier 3 : icône Clock (32px, #C9A84C) · titre "7j/7 · 11h–15h & 18h–23h" · texte "Déjeuner, dîner, réservation, livraison — le palais ne ferme jamais trop tôt."
- Apparition : translateY(30px) → 0 + opacity 0 → 1, stagger 150ms, easing ease-out 500ms, déclenchée au scroll

SECTION AMBIANCE — Collage éditorial
- Grille asymétrique : 1 grande image à gauche (60% de la largeur desktop) + 2 petites empilées à droite
- Images : "indian curry biryani overhead shot rich colors" · "indian naan bread garlic golden" · "indian restaurant interior warm lighting lounge"
- Traitement CSS uniforme : saturate(1.3) contrast(1.05) · border-radius 4px
- Superposition de texte sur la grande image : "L'Inde n'est pas un pays. C'est un parfum." · Cormorant Garamond 32px italic · couleur #F5EDD6 · fond gradient diagonal

ÉLÉMENT SIGNATURE — Compteur de l'expérience
- 3 chiffres animés (countUp 1s ease-out au scroll) : "12+ Spécialités", "7j/7 Ouvert", "1er Fine Dining Indien à Lomé"
- Fond #2A2118 · chiffres en Cormorant Garamond 72px #C9A84C · labels Inter 12px #F5EDD6

---

Page About (`/about`)

- Hero éditorial : image de la salle de restaurant ou d'un plat signature · overlay gradient horizontal · titre "L'histoire d'un Royaume" en Cormorant Garamond 64px · superposé à droite
- Texte histoire : 2 paragraphes sur Maharaja — le concept Fine Dining Indien à Lomé, l'emplacement Avenue du 24 Janvier, l'ambiance lounge, la promesse culinaire
- Élément signature : citation mise en avant typographiquement sur toute la largeur : "Chaque assiette est un voyage. Chaque épice est une mémoire." · Cormorant Garamond 42px · poids 300 italic · centré · couleur #C9A84C · fond #2A2118 · padding 80px
- Section spécialités : liste illustrée avec Butter Chicken, Biryani, Thali, Naan, Gambas aux épices — chacun avec une petite image carrée border-radius 8px et un label Inter 14px

---

Page Contact (`/contact`)

- Titre "Nous Trouver" en Cormorant Garamond 56px
- Bloc adresse : MapPin (24px, #C9A84C) + "1er étage, Immeuble RAMCO, Avenue du 24 Janvier, Assivito, Lomé, Togo"
- Bloc horaires : Clock (24px, #C9A84C) + "Lundi – Dimanche · 11h00–15h00 & 18h00–23h00"
- Indicateur temps réel "Ouvert / Fermé" calculé depuis l'heure locale du navigateur · badge vert (#25D366) ou rouge (#8B1A2F) · texte Inter 12px MAJUSCULES
- Bouton WhatsApp : fond #25D366 · texte blanc · MessageCircle 20px · "Commander sur WhatsApp" · pleine largeur mobile · border-radius 4px · 52px height
- Téléphone : +228 91 91 01 01
- Réseaux sociaux : Instagram (@maharajalome) + Facebook (Maharaja Lounge & Fine Dining) · icônes lucide-react 20px · hover couleur #C9A84C
- Google Maps embed : localisation Avenue du 24 Janvier, Assivito, Lomé (iframe Google Maps, filtre CSS grayscale(80%) pour s'intégrer au fond sombre)

---

— VOLET 2 : DASHBOARD ADMIN (`/admin`) —

```javascript
// Constante hardcodée — ⚠️ À CHANGER AVANT DÉPLOIEMENT
const ADMIN_PASSWORD = "maharaja2025"
```

Écran login : fond Ivoire Tandoor #F5EDD6 · logo "MAHARAJA ADMIN" Inter 18px · champ password centré border 1px #2A2118 · bouton fond #120D07 texte #C9A84C

Dashboard authentifié — 4 sections (tabs en haut) :

1. MENU (défaut)
- Plats groupés par catégorie · toggle disponible/indisponible par plat
- Bouton "Ajouter un plat" → formulaire : nom, description, prix (FCFA), catégorie, URL image, végétarien (toggle), épicé (toggle)
- Modifier (Pencil) / Supprimer (Trash2 + confirmation) par plat

2. CATÉGORIES
- Liste : Entrées, Currys, Biryani, Végétarien, Naan & Pain, Desserts, Boissons, Thali Spéciaux
- Ajouter / renommer / supprimer / réordonner (flèches)

3. PARAMÈTRES DU RESTAURANT
```javascript
const DEFAULT_DATA = {
  restaurant: {
    name: "Maharaja Lounge & Fine Dining",
    tagline: "Voyage en Inde au cœur de Lomé",
    whatsapp: "+22891910101",
    address: "1er étage, Immeuble RAMCO, Avenue du 24 Janvier, Assivito, Lomé",
    hours: "7j/7 · 11h00–15h00 & 18h00–23h00",
    instagram: "https://instagram.com/maharajalome",
    facebook: "https://facebook.com/maharajalome"
  },
  categories: [
    { id: "cat_1", name: "Entrées", order: 0 },
    { id: "cat_2", name: "Currys", order: 1 },
    { id: "cat_3", name: "Biryani", order: 2 },
    { id: "cat_4", name: "Végétarien", order: 3 },
    { id: "cat_5", name: "Naan & Pain", order: 4 },
    { id: "cat_6", name: "Thali Spéciaux", order: 5 },
    { id: "cat_7", name: "Desserts", order: 6 },
    { id: "cat_8", name: "Boissons", order: 7 }
  ],
  items: [
    { id: "item_1", categoryId: "cat_2", name: "Butter Chicken", description: "Poulet mariné aux épices, sauce tomate crémeuse, beurre clarifié, coriandre fraîche.", price: 8500, imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400", available: true, vegetarian: false, spicy: true, order: 0 },
    { id: "item_2", categoryId: "cat_3", name: "Biryani Royal", description: "Riz basmati parfumé au safran, viande tendre marinée, épices entières, oignon frit.", price: 9500, imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d20d?w=400", available: true, vegetarian: false, spicy: false, order: 0 },
    { id: "item_3", categoryId: "cat_5", name: "Cheese Naan", description: "Pain tandoor au fromage fondu, beurre clarifié, herbes fraîches.", price: 2500, imageUrl: "https://images.unsplash.com/photo-1513135467880-6c41603e5f65?w=400", available: true, vegetarian: true, spicy: false, order: 0 },
    { id: "item_4", categoryId: "cat_5", name: "Garlic Naan", description: "Pain tandoor à l'ail confit, coriandre, beurre de buffle.", price: 2000, imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", available: true, vegetarian: true, spicy: false, order: 1 },
    { id: "item_5", categoryId: "cat_6", name: "Thali Maharaja", description: "Plateau royal : curry du jour, riz basmati, naan, dhal, raita, chutney et dessert.", price: 13500, imageUrl: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400", available: true, vegetarian: false, spicy: false, order: 0 },
    { id: "item_6", categoryId: "cat_4", name: "Palak Paneer", description: "Fromage frais maison dans une sauce épinards aux épices douces.", price: 7500, imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", available: true, vegetarian: true, spicy: false, order: 0 },
    { id: "item_7", categoryId: "cat_2", name: "Gambas Masala", description: "Gambas royales sautées en sauce masala rouge, tomate, gingembre, piment vert.", price: 13000, imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", available: true, vegetarian: false, spicy: true, order: 1 }
  ]
}

function getRestaurantData() {
  try {
    const stored = localStorage.getItem("restaurantData")
    return stored ? JSON.parse(stored) : DEFAULT_DATA
  } catch { return DEFAULT_DATA }
}
function saveRestaurantData(data) {
  localStorage.setItem("restaurantData", JSON.stringify(data))
}
```

4. EXPORT / CONFIG
- Bouton "Copier la config JSON" (icône Copy) → presse-papier
- Bouton "Réinitialiser aux données par défaut" (avec confirmation)
- Note : "Les modifications admin ne sont visibles que sur ce navigateur. Pour déployer : exporter le JSON et transmettre au développeur."

Design dashboard : fond Ivoire Tandoor #F5EDD6, accents #120D07, Inter partout — look outil professionnel neutre, distinct du site public. Mobile-first.

En haut du dashboard : bouton "Déconnexion" (icône LogOut) · localStorage.removeItem("adminAuth")

---

— VOLET 3 : MENU SUR PLACE (`/menu/scan`) —

```javascript
// Composant partagé
// /menu       → <MenuPage scanMode={false} />
// /menu/scan  → <MenuPage scanMode={true}  />
```

TABLEMODAL — Règles strictes :
- Affiché au chargement si localStorage["tableNumber"] est vide
- Non-dismissable : pas de croix, overlay non-cliquable, pas d'Escape
- Saisie TOUJOURS manuelle — NE PAS lire de paramètre ?table= dans l'URL
- Fond : #120D07 avec overlay rgba(18,13,7,0.97)
- Icône Hash (40px, #C9A84C) centré en haut
- Titre : "Votre numéro de table ?" · Cormorant Garamond 32px · couleur #F5EDD6
- Sous-titre : "Entrez le numéro inscrit sur votre table" · Inter 14px · couleur #F5EDD6 à 60%
- Input : 52px height · border 1px solid #C9A84C · fond #2A2118 · texte #F5EDD6 · placeholder "ex : 5" · Inter 20px centré
- Bouton "Confirmer la table" : fond #C9A84C · couleur #120D07 · Inter 14px MAJUSCULES · 52px height · pleine largeur
- Animation entrée : fondu 300ms ease-out + scale 0.96 → 1

BLOC SUIVI COMMANDE — Affiché sous CategoryNav si legrm_last_order_id existe :

```javascript
// Polling toutes les 3 secondes
useEffect(() => {
  const orderId = localStorage.getItem("legrm_last_order_id")
  if (!orderId) return
  const poll = () => {
    const order = getOrders().find(o => o.id === orderId)
    if (order) setCurrentOrderStatus(order.status)
  }
  poll()
  const interval = setInterval(poll, 3000)
  window.addEventListener("storage", poll)
  return () => { clearInterval(interval); window.removeEventListener("storage", poll) }
}, [])
```

| Status     | Icône lucide-react | Texte affiché                           | Couleur fond         |
|------------|--------------------|-----------------------------------------|----------------------|
| pending    | Clock              | "Commande reçue — en attente cuisine"   | #2A2118 · texte Ivoire 60% |
| preparing  | Flame              | "En préparation..."                     | #2A2118 · texte #C9A84C |
| ready      | BellRing           | "Votre commande est prête !"            | #1A3A1A · texte #25D366 · pulse shadow |
| served     | CheckCircle        | "Commande servie · Bon appétit !"       | #1A3A1A · texte #25D366 |

Animation statut "ready" : box-shadow 0 0 0 8px rgba(37,211,102,0.25), pulse 1.5s infinite.
Bouton "Nouvelle commande" (status served uniquement) → removeItem("legrm_last_order_id")

Message WhatsApp — mode scan :
```javascript
const message = `Commande Maharaja — Table ${tableNumber} :\n${items}\n\nTotal : ${total} FCFA`
window.open(`https://wa.me/+22891910101?text=${encodeURIComponent(message)}`, '_blank')
```

---

— COMPOSANTS MENU PARTAGÉS (`/menu` et `/menu/scan`) —

CategoryNav (sticky, top 72px desktop / top 0 mobile)
- Scroll horizontal · pills · fond #120D07 · border-bottom 1px solid #2A2118
- Pill inactive : fond #2A2118 · texte #F5EDD6 à 60% · Inter 12px MAJUSCULES
- Pill active : fond #C9A84C · texte #120D07 · weight 600
- Clic → scroll fluide vers la section (scrollIntoView, behavior: smooth)
- Données lues depuis getRestaurantData().categories

MenuItemCard
- Fond #2A2118 · border-radius 12px · overflow hidden
- Image 4:3 · saturate(1.2) contrast(1.05) · hover : scale(1.02) 300ms ease-out
- Nom : Cormorant Garamond 20px · weight 600 · couleur #F5EDD6
- Description : Inter 13px · line-height 1.6 · 2 lignes max · couleur #F5EDD6 à 60%
- Badges : Leaf (végétarien, Paon Royal #1B4D52) + Flame (épicé, #8B1A2F) · 16px
- Prix : Inter 18px · weight 700 · couleur #C9A84C
- Bouton "+" : 32×32px · rond · fond #C9A84C · couleur #120D07 · Plus 16px · animation scale 1→1.2→1, 300ms spring
- Si dans panier : row [Minus | count | Plus] · même style
- Données lues depuis getRestaurantData().items (filtrer par available: true)

CartFab
- Fixed bottom-right (au-dessus bottom nav + 20px)
- 56×56px · fond #C9A84C · ShoppingCart 24px couleur #120D07 · border-radius 28px
- Badge count : fond #8B1A2F · texte blanc · 20px · animé scale spring au changement
- Visible uniquement si panier non vide
- Clic → ouvre CartDrawer

CartDrawer
- Mobile : bottom sheet, translateY(100%) → 0, 380ms cubic-bezier(0.32, 0.72, 0, 1)
- Desktop : drawer droit 400px, translateX(100%) → 0, 350ms ease-out
- Fond #1A1208 · border-top 1px solid #2A2118 (mobile) / border-left 1px solid #2A2118 (desktop)
- Titre : "Votre commande" · Cormorant Garamond 24px · couleur #C9A84C
- Liste articles : Minus / Plus / Trash2 (lucide-react) · sous-total en bas · note optionnelle (textarea fond #2A2118)
- Bouton WhatsApp : fond #25D366 · texte blanc · MessageCircle 20px · "Commander sur WhatsApp" · pleine largeur · 52px height · border-radius 4px
- Panier persisté dans localStorage["cart"]
- État vide : ShoppingCart 48px opacity 0.2 + "Votre panier est vide" Inter 14px · jamais d'emoji

---

— VOLET 4 : INTERFACE BRIGADE (`/cuisine`) —

Page non liée dans aucune navigation. Accès : URL directe uniquement.

```javascript
const CUISINE_PASSWORD = "cuisine2025" // ⚠️ À changer avant mise en ligne
// Guard : si localStorage["cuisineAuth"] !== "true" → login screen
```

Écran login cuisine : fond Nuit Moghole #120D07 · label "CUISINE" Inter 14px MAJUSCULES lettre-spacing 0.2em · couleur #C9A84C · champ password centré · bouton fond #C9A84C couleur #120D07

Structure de données des commandes :
```javascript
// Clé de stockage : "legrm_orders"
const ORDER = {
  id: "order_" + Date.now(),
  tableNumber: "5",
  items: [{ name: "Butter Chicken", qty: 2, unitPrice: 8500, price: 17000 }],
  note: "Sans coriandre",
  total: 17000,
  status: "pending",      // pending → preparing → ready → served
  timestamp: Date.now(),
  statusUpdatedAt: Date.now()
}

function getOrders() {
  try { return JSON.parse(localStorage.getItem("legrm_orders") || "[]") }
  catch { return [] }
}
function saveOrders(orders) {
  localStorage.setItem("legrm_orders", JSON.stringify(orders))
}
function updateOrderStatus(orderId, newStatus) {
  const orders = getOrders()
  const idx = orders.findIndex(o => o.id === orderId)
  if (idx !== -1) {
    orders[idx].status = newStatus
    orders[idx].statusUpdatedAt = Date.now()
    saveOrders(orders)
  }
}
```

Topbar cuisine — 56px fixe :
- Gauche : "CUISINE" Inter 13px MAJUSCULES letter-spacing 0.15em · couleur #C9A84C
- Centre : heure en temps réel HH:MM (setInterval 1s) · Cormorant Garamond 28px · couleur #F5EDD6
- Droite : badge commandes actives (pending + preparing) · bouton Archive (Archive, lucide-react) · bouton LogOut

Notification sonore — Web Audio API :
```javascript
function playOrderBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.type = "sine"
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.1)
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.4)
  } catch {}
}
// Nouvelle commande : playOrderBeep(); setTimeout(playOrderBeep, 250)
```

Détection nouvelles commandes :
```javascript
let knownIds = getOrders().map(o => o.id)
const checkNewOrders = () => {
  const current = getOrders()
  const newOnes = current.filter(o => !knownIds.includes(o.id))
  if (newOnes.length > 0) {
    playOrderBeep(); setTimeout(playOrderBeep, 250)
    newOnes.forEach(o => showToast(`Table ${o.tableNumber} · ${o.items.length} article(s)`))
    knownIds = current.map(o => o.id)
  }
}
// Polling 3s + event storage
setInterval(checkNewOrders, 3000)
window.addEventListener("storage", checkNewOrders)
```

Layout Kanban — 4 colonnes :

| Colonne        | Icône      | Couleur header | Comportement              |
|----------------|------------|----------------|---------------------------|
| EN ATTENTE     | Clock      | #C9A84C        | Toutes les pending         |
| EN PRÉPARATION | Flame      | #E8883A        | Toutes les preparing       |
| PRÊT           | BellRing   | #25D366        | Toutes les ready           |
| SERVI          | CheckCircle| #555555        | Max 10 dernières served    |

Desktop 4 colonnes égales · séparateur 1px #2A2118. Tablet : 2 colonnes, PRÊT + SERVI en scroll horizontal.

OrderCard :
- Fond #1A1208 · border-left 3px solid [couleur statut] · padding 16px · margin-bottom 1px
- En-tête : "Table 5" Cormorant Garamond 24px couleur #F5EDD6 + heure relative Inter 12px #F5EDD6 à 50%
- Indicateur durée :
  - < 10 min → point neutre #555
  - 10–20 min → point orange #E8883A
  - > 20 min → point rouge #8B1A2F + texte "URGENT"
- Liste articles : "2× Butter Chicken" · Inter 14px · couleur #F5EDD6
- Note cuisine (si non vide) : fond #2A2118 · AlertCircle 14px #C9A84C · texte italique 13px
- Bouton d'action unique (pleine largeur 44px) :

| Status    | Label bouton         | Couleur                    |
|-----------|----------------------|----------------------------|
| pending   | "Prendre en charge"  | fond #C9A84C · couleur #120D07 |
| preparing | "Commande prête"     | fond #25D366 · couleur blanc   |
| ready     | "Marquer servie"     | fond #2A2118 · couleur #F5EDD6 |
| served    | (aucun bouton)       | card opacity 0.5              |

Animation nouvelle card : entrée scale(0.95)→1 + opacity 0→1 en 350ms spring + flash fond #C9A84C → transparent 600ms.

Toast notifications :
- Position top-right · stack max 3 · z-index 9999 · auto-dismiss 5s
- "Nouvelle commande · Table N · X article(s)" · slide depuis droite 300ms ease-out · fond #2A2118 · border-left 3px #C9A84C

Archivage :
```javascript
function archiveServed() {
  const cutoff = Date.now() - 2 * 60 * 60 * 1000
  saveOrders(getOrders().filter(
    o => !(o.status === "served" && o.statusUpdatedAt < cutoff)
  ))
}
```

---

— ANIMATIONS SYSTÈME —

- Scroll reveals : translateY(24px) → 0 · opacity 0 → 1 · durée 500ms · easing ease-out · stagger 120ms entre éléments d'une même section · déclenché à 80% du viewport
- Transitions pages : fade opacity 0→1 · durée 300ms · easing ease-in-out · pas de clip-path (trop dramatique pour le contexte)
- Hover cards menu : scale(1.02) · box-shadow 0 8px 32px rgba(201,168,76,0.15) · 250ms ease-out
- Bouton "+" panier : scale 1→1.2→1 · 300ms cubic-bezier(0.34, 1.56, 0.64, 1) · rebond doux
- Badge panier : scale 1→1.3→1 · 350ms cubic-bezier(0.34, 1.56, 0.64, 1) au changement de chiffre
- Bottom sheet CartDrawer : translateY(100%) → 0 · 380ms cubic-bezier(0.32, 0.72, 0, 1) · overlay fond rgba(18,13,7,0.85) fade 300ms
- TableModal : fondu + scale(0.96)→1 · 300ms ease-out
- CategoryNav pills : background-color transition 200ms ease · pas de scale
- Hover liens navigation : underline dessiné gauche→droite 250ms ease-out
- Interdit : bounce excessif, élasticité, effets parallax agressifs, transitions trop longues (>600ms)

---

— IMAGES —

Traitement CSS global uniforme pour toutes les photos de plats :
`filter: saturate(1.25) contrast(1.05) brightness(0.92)`

Format des clips : rectangles droits avec border-radius 8-16px selon la taille de la card. Pas de diagonales.

Queries Unsplash recommandées par section :
- Hero home : `indian fine dining restaurant interior warm gold candlelight`
- Butter Chicken : `butter chicken curry orange sauce coriander overhead`
- Biryani : `biryani rice saffron golden spices overhead`
- Gambas Masala : `prawn masala curry red sauce spices close-up`
- Naan tandoor : `naan bread garlic baked golden tandoor oven`
- Palak Paneer : `palak paneer green spinach curry cheese`
- Thali Maharaja : `indian thali plate multiple dishes traditional`
- Ambiance restaurant : `indian restaurant interior lounge warm lighting`
- Section About : `indian spices saffron turmeric curcuma overhead flat lay`
- Footer : `indian pattern mandala gold dark background`

Overlays : gradient directionnel sur le hero : 135deg, rgba(18,13,7,0) 0%, rgba(18,13,7,0.75) 100%

---

— FOOTER —

- Fond #0A0805 (plus sombre que Nuit Moghole)
- 3 colonnes desktop / 1 colonne mobile
- Colonne 1 : logo "MAHARAJA" Cormorant Garamond 28px #C9A84C + tagline Inter 12px + réseaux (Instagram, Facebook — icônes lucide-react 18px, hover #C9A84C, transition 200ms)
- Colonne 2 : navigation rapide (Accueil, Menu, À propos, Contact) · Inter 13px · couleur #F5EDD6 à 50% · hover #C9A84C
- Colonne 3 : horaires + adresse + téléphone + bouton WhatsApp compact
- Ligne légale : Inter 11px · couleur #F5EDD6 à 30% · "© 2026 Maharaja Lounge & Fine Dining · Lomé, Togo · Tous droits réservés"
- Apparition : translateY(20px) → 0 + opacity 0 → 1 · 400ms ease-out au scroll
- Aucun emoji dans le footer

---

— CLÉS LOCALSTORAGE —

| Clé                    | Écrit par       | Lu par              | Contenu                             |
|------------------------|-----------------|---------------------|-------------------------------------|
| `restaurantData`       | /admin          | /menu, /menu/scan   | Config complète (menu + infos)      |
| `adminAuth`            | /admin          | /admin              | "true" si connecté                  |
| `cart`                 | /menu, /menu/scan| même page          | Panier en cours (tableau JSON)      |
| `tableNumber`          | /menu/scan      | /menu/scan          | Numéro de table saisi               |
| `legrm_orders`         | /menu/scan      | /cuisine, /menu/scan| Toutes les commandes                |
| `legrm_last_order_id`  | /menu/scan      | /menu/scan          | ID dernière commande (pour suivi)   |
| `cuisineAuth`          | /cuisine        | /cuisine            | "true" si brigade connectée         |

---

— ARCHITECTURE PAGES COMPLÈTE —

```
━ PUBLIC (navigation visible) ━
  /           → Home
  /about      → À propos
  /contact    → Contact
  /menu       → Menu classique (WhatsApp uniquement)

━ ACCÈS RESTREINT (URL directe uniquement — aucun lien dans la nav) ━
  /admin      → Dashboard admin (mot de passe : maharaja2025)
  /menu/scan  → Menu sur place + tableau suivi commande
  /cuisine    → Interface brigade Kanban (mot de passe : cuisine2025)
```

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMENT UTILISER CE PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Copier l'intégralité du brief ci-dessus
2. Ouvrir Lovable (lovable.dev) → Nouveau projet
3. Coller dans le chat de l'agent et lancer la génération
4. Si trop long → générer volet par volet :
   - D'abord : site vitrine complet (/, /about, /contact, /menu)
   - Ensuite : "Ajoute le dashboard /admin selon les spécifications"
   - Ensuite : "Ajoute /menu/scan avec TableModal et bloc suivi commande"
   - Ensuite : "Ajoute la page /cuisine avec interface Kanban et bips"
5. Tester /admin en tapant l'URL directement dans le navigateur
6. Tester /menu/scan : le TableModal doit bloquer avant tout accès au menu
7. Tester /cuisine : l'écran login doit s'afficher avant tout

SYNCHRONISATION :
→ /admin et /cuisine fonctionnent sur le même navigateur (même appareil)
→ Pour déployer le menu mis à jour : "Exporter config" dans /admin → transmettre le JSON au développeur

MOTS DE PASSE À CHANGER AVANT MISE EN LIGNE :
→ ADMIN_PASSWORD    : "maharaja2025"   → ligne dans le code /admin
→ CUISINE_PASSWORD  : "cuisine2025"   → ligne dans le code /cuisine

INFORMATIONS CONFIRMÉES :
→ Nom : Maharaja Lounge & Fine Dining
→ Adresse : 1er étage, Immeuble RAMCO, Avenue du 24 Janvier, Assivito, Lomé
→ WhatsApp : +228 91 91 01 01
→ Horaires : 7j/7 · 11h00–15h00 & 18h00–23h00
→ Instagram : @maharajalome
→ Facebook : Maharaja - Lounge & Fine Dining

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━