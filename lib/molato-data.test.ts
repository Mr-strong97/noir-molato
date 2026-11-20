import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COLLECTION_PIECES,
  LOOKBOOK_ITEMS,
  DETAILS_ITEMS,
  buildContactWhatsAppUrl,
  buildGeneralWhatsAppUrl,
  buildWhatsAppOrderUrl,
  filterPiecesByGenre,
  formatLookIndex,
  validateContactForm,
} from './molato-data';

test('filterPiecesByGenre filters tout, homme, and femme accurately', () => {
  const all = filterPiecesByGenre(COLLECTION_PIECES, 'tout');
  const homme = filterPiecesByGenre(COLLECTION_PIECES, 'homme');
  const femme = filterPiecesByGenre(COLLECTION_PIECES, 'femme');

  assert.equal(all.length, 20);
  assert.equal(homme.length, 16);
  assert.equal(femme.length, 4);
  assert.ok(homme.every((item) => item.genre === 'homme'));
  assert.ok(femme.every((item) => item.genre === 'femme'));
});

test('all catalogue and editorial image paths use SEO filenames in /images/catalogue/', () => {
  const allSources = [
    ...COLLECTION_PIECES.map((p) => p.imageSrc),
    ...DETAILS_ITEMS.map((d) => d.imageSrc),
    ...LOOKBOOK_ITEMS.map((l) => l.imageSrc),
  ];
  assert.ok(
    allSources.every(
      (src) =>
        src.startsWith('/images/catalogue/') &&
        src.includes('noir-molato') &&
        src.endsWith('.jpg') &&
        fs.existsSync(path.join(process.cwd(), 'public', src.slice(1))),
    ),
  );
});

test('buildWhatsAppOrderUrl formats pre-filled message with piece name, id, and size', () => {
  const urlDefault = buildWhatsAppOrderUrl('243810000000', {
    nom: 'Chemise Kimono Lin Noir',
    id: 'MO-001',
  });
  assert.ok(urlDefault.startsWith('https://wa.me/243810000000?text='));
  assert.ok(
    decodeURIComponent(urlDefault).includes(
      'Chemise Kimono Lin Noir (MO-001), taille À PRÉCISER.',
    ),
  );

  const urlSized = buildWhatsAppOrderUrl(
    '+243 81 000 00 00',
    {
      nom: 'Pantalon Ample Ceinturé Noir',
      id: 'MO-002',
    },
    'L',
  );
  assert.ok(urlSized.startsWith('https://wa.me/243810000000?text='));
  assert.ok(
    decodeURIComponent(urlSized).includes(
      'Pantalon Ample Ceinturé Noir (MO-002), taille L.',
    ),
  );
});

test('validateContactForm enforces all required fields with exact French editorial messages', () => {
  const invalid = validateContactForm({ nom: '', telephone: '123', message: '' });
  assert.equal(invalid.valid, false);
  assert.equal(invalid.errors.nom, '— Indiquez votre nom.');
  assert.equal(invalid.errors.telephone, '— Indiquez un numéro valide.');
  assert.equal(invalid.errors.message, '— Écrivez quelques mots.');

  const valid = validateContactForm({
    nom: 'Amina Kabongo',
    telephone: '+243 812 345 678',
    message: 'Je souhaite essayer la Chemise Officier en taille M.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('buildContactWhatsAppUrl encodes customer inquiry cleanly', () => {
  const url = buildContactWhatsAppUrl('243810000000', {
    nom: 'Amina',
    telephone: '+243812345678',
    message: 'Disponible en taille M ?',
  });
  assert.ok(url.startsWith('https://wa.me/243810000000?text='));
  assert.ok(decodeURIComponent(url).includes('Amina (+243812345678). Disponible en taille M ?'));
});

test('buildGeneralWhatsAppUrl formats general chat inquiry cleanly', () => {
  const url = buildGeneralWhatsAppUrl('+243 81 000 00 00');
  assert.ok(url.startsWith('https://wa.me/243810000000?text='));
  assert.ok(decodeURIComponent(url).includes('Noir Molato'));
});

test('formatLookIndex pads counters to two digits', () => {
  assert.equal(formatLookIndex(0, 8), '01 / 08');
  assert.equal(formatLookIndex(2, 8), '03 / 08');
  assert.equal(formatLookIndex(7, 8), '08 / 08');
});
