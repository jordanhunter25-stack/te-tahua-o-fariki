# 🐠 GUIDE COMPLET — Mettre le site en ligne avec admin Decap CMS
## École Te Tahua o Fariki — Hao

---

## VUE D'ENSEMBLE

```
GitHub (stocke les fichiers) ←→ Netlify (affiche le site) ←→ /admin/ (tu modifies)
```

Quand tu publies quelque chose dans l'admin → GitHub se met à jour → Netlify remet le site à jour en 30 secondes.

---

## ÉTAPE 1 — Créer un compte GitHub

1. Va sur https://github.com
2. Clique "Sign up"
3. Nom d'utilisateur : `ecole-fariki-hao` (ou ce que tu veux)
4. Confirme ton e-mail

---

## ÉTAPE 2 — Créer un dépôt GitHub

1. Connecté sur GitHub → clique "+" en haut à droite → "New repository"
2. Nom : `site-fariki`
3. Sélectionne "Public"
4. Coche "Add a README file"
5. Clique "Create repository"

---

## ÉTAPE 3 — Uploader TOUS les fichiers

1. Dans ton dépôt → clique "Add file" → "Upload files"
2. Glisse-dépose le dossier entier (ou tous les fichiers) :
   ```
   index.html
   style.css
   script.js
   netlify.toml
   uploads/
     logo.png
   admin/
     index.html
     config.yml
   content/
     parametres.json
     actualites/
     agenda/
     projets/
     ame/
     equipe/
     documents/
   ```
3. Message de commit : "Mise en ligne initiale"
4. Clique "Commit changes" ✅

---

## ÉTAPE 4 — Connecter GitHub à Netlify

1. Va sur https://app.netlify.com
2. "Add new site" → "Import an existing project"
3. Clique "GitHub"
4. Autorise Netlify → cherche "site-fariki" → sélectionne-le
5. Paramètres :
   - Branch : `main`
   - Publish directory : `.` (un point)
6. Clique "Deploy site" ✅

L'URL sera du type : `https://site-fariki-abc.netlify.app`
→ Pour la changer : Site configuration → Change site name → `ecole-fariki-hao`

---

## ÉTAPE 5 — Activer Netlify Identity (connexion admin)

1. Dans Netlify → ton site → onglet "Integrations"
2. Cherche "Identity" → "Enable Identity"
3. Dans la page Identity :
   - "Registration preferences" → sélectionne **"Invite only"**
4. Descends jusqu'à "Git Gateway" → "Enable Git Gateway" ✅

---

## ÉTAPE 6 — Créer ton compte admin

1. Netlify → Identity → "Invite users"
2. Entre ton adresse e-mail → "Send"
3. Ouvre l'e-mail reçu → clique le lien → crée ton mot de passe

---

## ÉTAPE 7 — Accéder à l'admin

URL de l'admin :
```
https://ecole-fariki-hao.netlify.app/admin/
```

1. Va sur cette URL
2. Clique "Login with Netlify Identity"
3. Entre ton e-mail et mot de passe
4. Tu es dans l'interface Decap CMS ✅

---

## CE QUE TU PEUX MODIFIER DEPUIS L'ADMIN

| Section | Actions possibles |
|---|---|
| 📰 Actualités | Écrire, modifier, supprimer des articles |
| 🌟 Projets | Gérer les projets de l'année |
| 🐬 AME | Publier des sorties et comptes-rendus |
| 📅 Agenda | Ajouter des événements |
| 👩‍🏫 Équipe | Mettre à jour les membres |
| 📄 Documents | Uploader des PDF |
| ⚙️ Paramètres | Mot de la directrice, coordonnées |

### Pour publier un article :
1. Admin → "📰 Actualités" → "New Actualité"
2. Remplis titre, date, résumé, contenu
3. "Publish" en haut à droite
4. Le site se met à jour en 30 secondes ✅

---

## DONNER L'ACCÈS À UN(E) COLLÈGUE

Netlify → Identity → "Invite users" → leur e-mail → ils créent leur mot de passe → ils peuvent se connecter à /admin/

---

## EN CAS DE PROBLÈME

**Pas d'e-mail d'invitation :** vérifier les spams

**Erreur de connexion à l'admin :** vérifier que Git Gateway est activé (Étape 5)

**Le site ne se met pas à jour :** attendre 1-2 min → vérifier dans Netlify → Deploys
