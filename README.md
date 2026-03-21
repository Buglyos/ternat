# sipere expressapi template

Express based REST API template.

Website:

* [https://sipere.github.io/sipere/](https://sipere.github.io/sipere/)

## Install dependencies

```cmd
npm install
npm run dev
```

See the docs directory for details.


Backend Szerver Dokumentáció
Ez a projekt egy Node.js + Express + Sequelize alapú REST API, amely SQLite adatbázist használ. A rendszer csapatokat (Teams), tagokat (Members) és felhasználókat (Users) kezel, JWT alapú hitelesítéssel.

A szerver beüzemelése
1.1. Követelmények
A futtatáshoz szükséges: Node.js 18+, NPM, Sequelize CLI, SQLite (automatikusan létrejön)

1.2. Telepítés
Lépj be a backend mappába:
cd backend
Telepítsd a függőségeket:
npm install

1.3. Adatbázis beállítása
A projekt SQLite adatbázist használ. A konfiguráció a config/config.json fájlban található. A development környezet így néz ki:
{ "development": { "dialect": "sqlite", "storage": "./database.sqlite" } }

1.4. Migrációk futtatása
A táblák létrehozása:
npx sequelize-cli db:migrate

1.5. Seeder adatok betöltése
npx sequelize-cli db:seed:all

1.6. Szerver indítása
npm start
A szerver alapértelmezett címe:
http://localhost:8000

Hitelesítés
A rendszer JWT alapú hitelesítést használ. A védett végpontokhoz szükséges:
Authorization: Bearer TOKEN

Csapatok (Teams) API
GET /api/teams – Összes csapat listázása.
Példa válasz:
[ { "id": 1, "name": "Fradi", "city": "Budapest", "league": "NB1" } ]

GET /api/teams/:id – Csapat lekérése tagokkal együtt.
Példa válasz:
{ "id": 1, "name": "Fradi", "city": "Budapest", "league": "NB1", "members": [ { "id": 1, "fullName": "Kovács Péter", "position": "csatár" } ] }

POST /api/teams – Új csapat létrehozása tagokkal együtt.
Példa kérés:
{ "name": "Újpest", "city": "Budapest", "league": "NB1", "members": [ { "fullName": "Nagy László", "position": "kapus" }, { "fullName": "Tóth Béla", "position": "védő" } ] }

PUT /api/teams/:id – Csapat frissítése + tagok újra mentése.
DELETE /api/teams/:id – Csapat törlése.

Tagok (Members) API
GET /api/members – Összes tag listázása.
GET /api/members/:id – Egy tag lekérése.
POST /api/members – Új tag létrehozása.
PUT /api/members/:id – Tag módosítása.
DELETE /api/members/:id – Tag törlése.

Felhasználók (Users) API
GET /api/users – Felhasználók listázása.
GET /api/users/:id – Felhasználó lekérése.
PUT /api/users/:id/password – Jelszó módosítása.
DELETE /api/users/:id – Felhasználó törlése.

Adatbázis szerkezete
Teams tábla: id, name, city, league, createdAt, updatedAt
Members tábla: id, teamId, fullName, position, createdAt, updatedAt
Users tábla: id, name, email, password (hash), roleId, createdAt, updatedAt

Összegzés
Ez a backend rendszer JWT alapú hitelesítést használ, támogatja a csapatok és tagok teljes CRUD műveleteit, SQLite adatbázist használ, migrációkkal és seederekkel telepíthető, és Angular frontenddel kompatibilis.

Frontend Dokumentáció
Ez a projekt egy Angular alapú kliens alkalmazás, amely a backend REST API-val kommunikál. A rendszer lehetővé teszi csapatok (Teams) és tagok (Members) kezelését, beleértve a létrehozást, szerkesztést, törlést és listázást. A frontend a backend által biztosított végpontokat használja, és HTTP kéréseken keresztül kommunikál.

A frontend beüzemelése
1.1. Követelmények
A futtatáshoz szükséges: Node.js 18+, NPM, Angular CLI (globálisan telepítve)

1.2. Telepítés
Lépj be a frontend mappába:
cd frontend
Telepítsd a függőségeket:
npm install

1.3. Fejlesztői szerver indítása
A projekt indítása:
ng serve
Az alkalmazás alapértelmezett címe:
http://localhost:4200

1.4. Backend kapcsolat
A frontend a backend API-t a következő címen éri el:
http://localhost:8000/api
A TeamsService, MembersService és AuthService ezen az útvonalon keresztül kommunikál.

Projekt felépítése
A fontosabb mappák és funkciók:
src/app/teams – csapatok listázása, hozzáadása, szerkesztése
src/app/members – tagok listázása, hozzáadása, szerkesztése
src/app/services – API hívások (TeamsService, MembersService, AuthService)
src/app/auth – bejelentkezés kezelése
src/app/app.routes – útvonalak definiálása

Elérhető funkciók
A frontend a következő funkciókat biztosítja:
– Csapatok listázása
– Csapat létrehozása (név, város, liga, tagok hozzáadása)
– Csapat szerkesztése (adatok módosítása, tagok hozzáadása/törlése)
– Csapat törlése
– Tagok listázása
– Tag létrehozása
– Tag szerkesztése
– Tag törlése
– Bejelentkezés (JWT token használatával)

Csapatok kezelése
A csapatokhoz tartozó oldalak:
/teams – csapatok listája
/teams/add – új csapat létrehozása
/teams/edit/:id – csapat szerkesztése
A csapat létrehozásakor és szerkesztésekor a felhasználó tetszőleges számú tagot adhat hozzá. A tagok a backend felé a members tömbben kerülnek elküldésre.

Tagok kezelése
A tagokhoz tartozó oldalak:
/members – tagok listája
/members/add – új tag létrehozása
/members/edit/:id – tag szerkesztése
A tagok külön is kezelhetők, de a csapatok szerkesztésekor is módosíthatók.

API kommunikáció
A frontend a következő szolgáltatásokat használja:
TeamsService – csapatok CRUD műveletei
MembersService – tagok CRUD műveletei
AuthService – bejelentkezés, token kezelés
A szolgáltatások HttpClient segítségével küldenek kéréseket a backend felé.

Hitelesítés
A bejelentkezés után a backend JWT tokent ad vissza.
A token a böngészőben tárolódik, és minden védett kéréshez automatikusan hozzáadásra kerül.
A frontend ellenőrzi, hogy a felhasználó be van-e jelentkezve, és ennek megfelelően engedélyezi a funkciókat.

Használt technológiák
Angular 17
TypeScript
HTML, CSS
Angular Router
HttpClient
Standalone Components
Bootstrap vagy saját stílusok (projektfüggő)

Összegzés
Ez a frontend alkalmazás biztosítja a csapatok és tagok teljes körű kezelését. A rendszer Angular alapokon működik, a backend REST API-val kommunikál, és JWT alapú hitelesítést használ. A projekt könnyen bővíthető, karbantartható és modern Angular architektúrát követ.